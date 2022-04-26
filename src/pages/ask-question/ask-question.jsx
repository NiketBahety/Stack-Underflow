import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { askQuestion } from '../../redux/actions/questions';
import './ask-question.css';

const AskQuestion = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [questionTitle, setTitle] = useState('');
    const [questionBody, setBody] = useState('');
    const [questionTags, setTags] = useState(['']);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            askQuestion({ questionTitle, questionBody, questionTags }, navigate)
        );
    };

    return (
        <div className="ask-question">
            <h1 className="heading">Ask a public question</h1>
            <div className="question-form-div">
                <form className="question-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">
                            <h3>Title</h3>
                            <p>
                                Be specific and imagine you're asking a question
                                to another person
                            </p>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                                required
                            />
                        </label>
                        <label htmlFor="body">
                            <h3>Body</h3>
                            <p>
                                Include all the information someone would need
                                to answer your question
                            </p>
                            <textarea
                                name="body"
                                id="body"
                                onChange={(e) => {
                                    setBody(e.target.value);
                                }}
                                required
                            />
                        </label>
                        <label htmlFor="tags">
                            <h3>Tags</h3>
                            <p>
                                Add up to 5 tags to describe what your question
                                is about
                            </p>
                            <input
                                type="text"
                                name="tags"
                                id="tags"
                                placeholder="e.g. (string linux python-3.x)"
                                onChange={(e) => {
                                    setTags(e.target.value.split(' '));
                                }}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit" className="submit-btn">
                        Review your question
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AskQuestion;
