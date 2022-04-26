import React from 'react';
import Tag from '../../components/tag/tag';
import Avatar from '../../components/avatar/avatar';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Question = ({ question }) => {
    const url = '/Questions/' + question._id;
    return (
        <div className="question-card">
            <div className="question-card-left">
                <p>
                    {question.upVotes.length - question.downVotes.length} votes
                </p>
                <p>{question.answers.length} answers</p>
                <p>{question.views} views</p>
            </div>
            <div className="question-card-right">
                <div className="question-card-title">
                    <Link to={url}>{question.questionTitle}</Link>
                </div>
                <div className="question-card-body">
                    <div className="question-tags">
                        {question.questionTags.map((tag) => (
                            <Tag key={tag} name={tag} className="tag" />
                        ))}
                    </div>
                    <div className="question-card-bottom-right">
                        <div className="question-asked-by">
                            <Avatar
                                backgroundColor="#009dff"
                                px="0px"
                                py="0px"
                                borderRadius="100%"
                                displayLetter={question.userPosted.name[0].toUpperCase()}
                                className="avatar"
                                id={question.userPosted._id}
                            ></Avatar>
                            <Link
                                to={`/Users/${question.userPosted._id}`}
                                className="link-user"
                            >
                                {question.userPosted.name}
                            </Link>
                        </div>
                        <p className="question-asked-on">
                            asked {moment(question.postedOn).fromNow()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
