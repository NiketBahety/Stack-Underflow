import * as api from '../API/index';
import { toast } from 'react-toastify';
toast.configure({ position: 'top-center', autoClose: 2500 });

export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.askQuestion(questionData);
        dispatch({ type: 'ASK_QUESTION', data });
        navigate('/');
        toast.success('Question Posted !!');
    } catch (err) {
        toast.error('Some error occured !!');
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
        toast.success('Answer Posted !!');
    } catch (err) {
        toast.warning('Please login to post answers !!');
        console.log(err);
    }
};

export const deleteQuestion = (id, navigate) => async (dispatch) => {
    try {
        const res = await api.deleteQuestion(id);
        dispatch({ type: 'DELETE_QUESTION', res });
        navigate('/');
        toast.success('Question deleted !!');
    } catch (err) {
        toast.error('Some error occured !!');
        console.log(err);
    }
};

export const deleteAnswer = (qid, aid) => async (dispatch) => {
    try {
        const res = await api.deleteAnswer(qid, aid);
        dispatch({ type: 'DELETE_ANSWER', res });
        toast.success('Answer deleted !!');
    } catch (err) {
        toast.error('Some error occured !!');
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
