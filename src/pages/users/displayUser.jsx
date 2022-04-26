import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LeftSideBar from '../../components/left-side-bar/left-side-bar';
import { getUser } from '../../redux/actions/userActions';

const DisplayUser = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getUser(id));
    }, [dispatch]);

    let User = useSelector((state) => state.userReducer);
    User = User?.data?.data?.user;

    return (
        <div className="home-container-1">
            <LeftSideBar></LeftSideBar>
            <div className="home-container-2 user">
                <div className="header">
                    <div className='user-info'>
                        <div className="avtar">
                            {User?.name[0].toUpperCase()}
                        </div>
                        <div className="name">{User?.name}</div>
                    </div>
                </div>
                <div className="joined-on">joined 8 months ago</div>
                <div className="bio">{User?.bio}</div>
            </div>
        </div>
    );
};

export default DisplayUser;
