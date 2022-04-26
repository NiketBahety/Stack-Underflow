import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllQuestions } from '../../redux/actions/questions';
import './home-main-bar.css';
import QuestionsList from './questionsList';

const HomeMainBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.currentUserReducer);
    const redirect = () => {
        if (user === null) {
            alert('Please login/signup to ask a question');
            navigate('/Auth');
        } else navigate('/AskQuestion');
    };

    useEffect(() => {
        dispatch(getAllQuestions());
    }, [dispatch]);

    let questionsList = useSelector(
        (state) => state.questionsReducer?.data?.questions
    );
    if (questionsList === undefined) questionsList = [];

    const location = useLocation();
    return (
        <div className="home-main-bar">
            <div className="home-main-bar-header">
                <p>
                    {location.pathname === '/'
                        ? 'Top Questions'
                        : 'All Questions'}
                </p>
                <button onClick={redirect} className="ask-btn">
                    Ask Question
                </button>
            </div>
            <QuestionsList questions={questionsList}></QuestionsList>
        </div>
    );
};

export default HomeMainBar;
