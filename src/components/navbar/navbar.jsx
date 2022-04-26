import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import search from '../../assets/search.svg';
import Avatar from '../../components/avatar/avatar';
import { setCurrentUser } from '../../redux/actions/currentUser';

import './navbar.css';
import { logout } from '../../redux/actions/authActions';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let User = useSelector((state) => state.currentUserReducer);
    useEffect(() => {
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(logout(navigate));
    };

    return (
        <nav className="main-navbar">
            <div className="navbar">
                <Link to="/" className="nav-item nav-logo">
                    <img src={logo} alt="Logo" />
                </Link>
                <Link to="/" className="nav-item nav-btn">
                    About
                </Link>
                <Link to="/" className="nav-item nav-btn">
                    Products
                </Link>
                <Link to="/" className="nav-item nav-btn">
                    For Teams
                </Link>
                <form>
                    <input type="text" placeholder="Search..." />
                    <img
                        src={search}
                        alt="Search"
                        width="16"
                        className="search-icon"
                    />
                </form>
                {User === null ? (
                    <Link to="/Auth" className="nav-item nav-links">
                        Log In
                    </Link>
                ) : (
                    <>
                        <Avatar
                            backgroundColor="#009dff"
                            px="10px"
                            py="7px"
                            borderRadius="50%"
                            displayLetter={`${User.user.name[0].toUpperCase()}`}
                            id={User.user._id}
                        ></Avatar>
                        <button
                            onClick={handleLogout}
                            className="nav-item nav-links"
                        >
                            Log Out
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
