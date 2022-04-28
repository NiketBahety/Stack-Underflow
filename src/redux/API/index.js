import axios from 'axios';

axios.defaults.withCredentials = true;

const API = axios.create({
    baseURL: 'https://stack-underflow-api.herokuapp.com',
});

export const logIn = (authData) => API.post('/users/login', authData);
export const signUp = (authData) => API.post('/users/signup', authData);
export const logOut = () => API.get('/users/logout');

export const getAllQuestions = (tag) =>
    API.get(`/questions/getAllQuestions?tag=${tag}`);
export const askQuestion = (data) => API.post('/questions/askQuestion', data);
export const answerQuestion = (data, id) =>
    API.patch(`/questions/answerQuestion/${id}`, data);
export const deleteQuestion = (id) =>
    API.delete(`/questions/deleteQuestion/${id}`);
export const deleteAnswer = (qid, aid) =>
    API.patch(`/questions/deleteAnswer/${qid}/${aid}`);
export const vote = (data, qid) => API.patch(`/questions/vote/${qid}`, data);

export const users = () => API.get('/users/getAllUsers');
export const getUser = (id) => API.get(`/users/getUser/${id}`);
