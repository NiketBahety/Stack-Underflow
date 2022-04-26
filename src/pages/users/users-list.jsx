import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeftSideBar from '../../components/left-side-bar/left-side-bar';
import './users-cont.css';
import { getAllUsers } from '../../redux/actions/userActions';
import UserCont from './users';

const UsersList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    let usersList = useSelector((state) => state.userReducer);

    usersList = usersList?.data?.data?.users;
    usersList === undefined && dispatch(getAllUsers());

    if (usersList === undefined) usersList = [];
    return (
        <div className="home-container-1">
            <LeftSideBar></LeftSideBar>
            <div className="home-container-2 users-page">
                {usersList.map((user) => (
                    <UserCont key={user._id} data={user}></UserCont>
                ))}
            </div>
        </div>
    );
};

export default UsersList;
