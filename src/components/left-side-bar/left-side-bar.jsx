import React from 'react';
import './left-side-bar.css';
import { NavLink } from 'react-router-dom';
import globe from '../../assets/globe.svg';

const LeftSideBar = () => {
    return (
        <div className="left-side-bar">
            <nav className="side-nav">
                <NavLink to="/" className="side-nav-links">
                    <p>Home</p>
                </NavLink>
                <div className="side-nav-div">
                    <div>
                        <p>PUBLIC</p>
                    </div>
                    <NavLink to="/Questions" className="side-nav-links">
                        <img src={globe} alt="Globe" className="globe" />
                        <p>Questions</p>
                    </NavLink>
                    <NavLink to="/Tags" className="side-nav-links">
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to="/Users" className="side-nav-links">
                        <p>Users</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default LeftSideBar;
