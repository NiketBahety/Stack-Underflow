import React from 'react';
import LeftSideBar from '../../components/left-side-bar/left-side-bar';
import RightSideBar from '../../components/right-side-bar/right-side-bar';
import QuestionDetails from './question-details';
import '../../App.css';

const DisplayQuestion = () => {
    return (
        <div className="home-container-1">
            <LeftSideBar></LeftSideBar>
            <div className="home-container-2">
                <QuestionDetails></QuestionDetails>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default DisplayQuestion;
