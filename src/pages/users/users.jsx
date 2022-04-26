import React from 'react';
import './users-cont.css';
import Avatar from '../../components/avatar/avatar';
import { Link } from 'react-router-dom';

const UserCont = ({ data }) => {
    const colors = ['purple', 'blue', 'green', '#333'];
    return (
        <div className="user-cnt">
            <Avatar
                displayLetter={data.name[0].toUpperCase()}
                backgroundColor={
                    colors[Math.floor(Math.random() * colors.length)]
                }
                px="10px"
                py="10px"
                id={data._id}
            />
            <p>
                <Link to={`/Users/${data._id}`}>{data.name}</Link>
            </p>
        </div>
    );
};

export default UserCont;
