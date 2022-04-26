import * as api from '../API/index';

export const getAllUsers = () => async (dispatch) => {
    try {
        let users = await api.users();
        dispatch({ type: 'GET_ALL_USERS', users });
    } catch (err) {
        console.log(err);
    }
};

export const getUser = (id) => async (dispatch) => {
    try {
        let user = await api.getUser(id);
        dispatch({ type: 'GET_USER', user });
    } catch (err) {
        console.log(err);
    }
};
