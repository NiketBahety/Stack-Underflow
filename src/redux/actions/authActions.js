import * as api from '../API/index';
import { setCurrentUser } from './currentUser';
import { toast } from 'react-toastify';
toast.configure({ position: 'top-center', autoClose: 2500 });

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData);
        dispatch({ type: 'AUTH', data });
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
        navigate('/');
        toast.success('Successfully logged in !!');
    } catch (err) {
        toast.error('Please try again');
        console.log(err);
    }
};

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData);
        dispatch({ type: 'AUTH', data });
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
        navigate('/');
        toast.success('Successfully logged in !!');
    } catch (err) {
        toast.error('Incorrect email or password !!');
        console.log(err);
    }
};

export const logout = (navigate) => async (dispatch) => {
    try {
        const { data } = await api.logOut();
        dispatch({ type: 'LOGOUT' });
        dispatch(setCurrentUser(null));
        navigate('/');
        toast.success('Successfully logged out !!');
    } catch (err) {
        console.log(err);
    }
};
