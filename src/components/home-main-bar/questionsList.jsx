import React from 'react';
import Question from './question';

const QuestionsList = ({ questions }) => {
    return (
        <div className="questions-list">
            <p className="num-of-questions">
                {questions.length === 0
                    ? 'Loading...'
                    : `${questions.length} questions`}
            </p>
            {questions.map((question) => (
                <Question key={question._id} question={question}></Question>
            ))}
        </div>
    );
};

export default QuestionsList;
