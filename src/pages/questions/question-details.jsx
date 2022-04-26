import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './display-question.css';

import Tag from '../../components/tag/tag';
import Avatar from '../../components/avatar/avatar';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getAllQuestions } from '../../redux/actions/questions';
import { answerQuestion } from '../../redux/actions/questions';
import { deleteQuestion } from '../../redux/actions/questions';
import { deleteAnswer } from '../../redux/actions/questions';
import copy from 'copy-to-clipboard';
import { vote } from '../../redux/actions/questions';

const QuestionDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let User = useSelector((state) => state.currentUserReducer);

    const [answerBody, setAnswerBody] = useState();
    let sameUser = false;
    let upVote = false;
    let downVote = false;

    const handleSubmit = (e) => {
        e.preventDefault();
        let temp = answerBody.trim();
        if (temp === '') alert('Answer cannot be empty !!');
        else dispatch(answerQuestion({ answerBody: temp }, id));
    };

    const handleShare = () => {
        copy(window.location.href);
        alert('Copied');
    };

    let questionsList = useSelector(
        (state) => state.questionsReducer?.data?.questions
    );

    questionsList === undefined && dispatch(getAllQuestions());

    let question = questionsList?.filter((question) => question._id === id);

    if (question)
        question[0].userPosted._id === User?.user?._id
            ? (sameUser = true)
            : (sameUser = false);

    if (question) {
        if (question[0].upVotes.includes(User.user._id)) upVote = true;
        else if (question[0].downVotes.includes(User.user._id)) downVote = true;
    }

    const handleDelete = () => {
        if (window.confirm('Do you really want to delete ?'))
            dispatch(deleteQuestion(id, navigate));
    };

    const handleAnswerDelete = (e) => {
        if (window.confirm('Do you really want to delete ?'))
            dispatch(deleteAnswer(id, e.target.id));
    };

    const handleUpVote = () => {
        upVote = !upVote;
        downVote = false;
        dispatch(vote({ vote: 'upvote' }, id));
    };

    const handleDownVote = () => {
        downVote = !downVote;
        upVote = false;
        dispatch(vote({ vote: 'downvote' }, id));
    };

    return (
        <div className="question-details-page">
            {questionsList === undefined ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <div className="title">{question[0].questionTitle}</div>
                    <div className="question-body">
                        <div className="votes-cont">
                            <svg
                                fill="#696f75"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                onClick={handleUpVote}
                                className={upVote ? 'clicked' : ''}
                            >
                                <path d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z" />
                            </svg>
                            <p>
                                {question[0].upVotes.length -
                                    question[0].downVotes.length}
                            </p>
                            <svg
                                fill="#696f75"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                onClick={handleDownVote}
                                className={downVote ? 'clicked' : ''}
                            >
                                <path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" />
                            </svg>
                        </div>
                        <div className="question-details">
                            {question[0].questionBody}
                        </div>
                    </div>
                    <div className="tags-cont">
                        {question[0].questionTags.map((tag) => (
                            <Tag key={tag} name={tag} className="tag" />
                        ))}
                    </div>
                    <div className="question-footer">
                        <div className="share">
                            <span onClick={handleShare}>Share</span>
                            <span>Edit</span>
                            <span>Follow</span>
                            {sameUser && (
                                <span onClick={handleDelete}>Delete</span>
                            )}
                        </div>
                        <div className="user">
                            <p>
                                asked on{' '}
                                {moment().format('MMM D', question[0].postedOn)}
                            </p>
                            <div className="user-profile">
                                <Avatar
                                    backgroundColor="#009dff"
                                    px="10px"
                                    py="7px"
                                    borderRadius="50%"
                                    displayLetter={question[0].userPosted.name[0].toUpperCase()}
                                    className="avatar"
                                    id={question[0].userPosted._id}
                                ></Avatar>
                                <Link
                                    to={`/Users/${question[0].userPosted._id}`}
                                    className="link-user"
                                >
                                    {question[0].userPosted.name}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <p className="answers">
                        {question[0].answers.length} Answers
                    </p>
                    <div className="answers-cont">
                        {question[0].answers.map((answer) => (
                            <div className="answer" key={answer._id}>
                                <div className="question-body">
                                    <div className="votes-cont">
                                        <svg
                                            fill="#696f75"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                        >
                                            <path d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z" />
                                        </svg>
                                        <p>{answer.votes}</p>
                                        <svg
                                            fill="#696f75"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                        >
                                            <path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" />
                                        </svg>
                                    </div>
                                    <div className="question-details">
                                        {answer.answerBody}
                                    </div>
                                </div>
                                <div className="question-footer">
                                    <div className="share">
                                        <span onClick={handleShare}>Share</span>
                                        <span>Edit</span>
                                        <span>Follow</span>
                                        {User?.user?._id ===
                                            answer.user._id && (
                                            <span
                                                onClick={handleAnswerDelete}
                                                id={answer._id}
                                            >
                                                Delete
                                            </span>
                                        )}
                                    </div>
                                    <div className="user">
                                        <p>
                                            answered on{' '}
                                            {moment().format(
                                                'MMM D',
                                                answer.answeredOn
                                            )}
                                        </p>
                                        <div className="user-profile">
                                            <Avatar
                                                backgroundColor="#009dff"
                                                px="10px"
                                                py="7px"
                                                borderRadius="50%"
                                                displayLetter={answer.user.name[0].toUpperCase()}
                                                className="avatar"
                                                id={answer.user._id}
                                            ></Avatar>
                                            <Link
                                                to={`/Users/${answer.user._id}`}
                                                className="link-user"
                                            >
                                                {answer.user.name}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="body">
                                <p className="answers">Your Answer</p>
                                <textarea
                                    name="body"
                                    id="body"
                                    onChange={(e) => {
                                        setAnswerBody(e.target.value);
                                    }}
                                />
                            </label>
                            <button type="submit" className="answer-btn">
                                Post your answer
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuestionDetails;
