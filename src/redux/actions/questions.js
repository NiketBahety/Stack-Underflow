import * as api from '../API/index';

export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.askQuestion(questionData);
        dispatch({ type: 'ASK_QUESTION', data });
        navigate('/');
    } catch (err) {
        console.log(err);
    }
};

export const getAllQuestions = (tag) => async (dispatch) => {
    try {
        const { data } = await api.getAllQuestions(tag);
        dispatch({ type: 'GET_QUESTIONS', data });
    } catch (err) {
        console.log(err);
    }
};

export const answerQuestion = (data, id) => async (dispatch) => {
    try {
        const res = await api.answerQuestion(data, id);
        dispatch({ type: 'ANSWER_QUESTION', res });
    } catch (err) {
        console.log(err);
    }
};

export const deleteQuestion = (id, navigate) => async (dispatch) => {
    try {
        const res = await api.deleteQuestion(id);
        dispatch({ type: 'DELETE_QUESTION', res });
        navigate('/');
    } catch (err) {
        console.log(err);
    }
};

export const deleteAnswer = (qid, aid) => async (dispatch) => {
    try {
        const res = await api.deleteAnswer(qid, aid);
        dispatch({ type: 'DELETE_ANSWER', res });
    } catch (err) {
        console.log(err);
    }
};

export const vote = (data, id) => async (dispatch) => {
    try {
        const res = await api.vote(data, id);
        dispatch({ type: 'VOTE', res });
    } catch (err) {
        console.log(err);
    }
};
