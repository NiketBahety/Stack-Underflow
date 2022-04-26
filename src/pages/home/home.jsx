import React from 'react';
import HomeMainBar from '../../components/home-main-bar/home-main-bar';
import LeftSideBar from '../../components/left-side-bar/left-side-bar';
import RightSideBar from '../../components/right-side-bar/right-side-bar';
import '../../App.css';

const Home = () => {
    return (
        <div className="home-container-1">
            <LeftSideBar></LeftSideBar>
            <div className="home-container-2">
                <HomeMainBar></HomeMainBar>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default Home;
