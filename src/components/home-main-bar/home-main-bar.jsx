import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllQuestions } from '../../redux/actions/questions';
import './home-main-bar.css';
import QuestionsList from './questionsList';
import { toast } from 'react-toastify';
toast.configure({ position: 'top-center', autoClose: 2500 });

const HomeMainBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    let tag = window.location.search.substring(1);

    const user = useSelector((state) => state.currentUserReducer);
    const redirect = () => {
        if (user === null) {
            toast.warning('Please login to post questions !!');
            navigate('/Auth');
        } else navigate('/AskQuestion');
    };

    useEffect(() => {
        dispatch(getAllQuestions(tag));
    }, [dispatch, location]);

    let questionsList = useSelector(
        (state) => state.questionsReducer?.data?.questions
    );
    if (questionsList === undefined) questionsList = [];

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
