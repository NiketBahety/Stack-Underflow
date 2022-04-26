import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AskQuestion from './pages/ask-question/ask-question';
import Auth from './pages/auth/auth';
import Home from './pages/home/home';
import DisplayQuestion from './pages/questions/display-question';
import Questions from './pages/questions/questions';
import TagsList from './pages/tags/tags-list';
import UsersList from './pages/users/users-list';
import DisplayUser from './pages/users/displayUser';

const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Auth" element={<Auth />} />
            <Route exact path="/Questions" element={<Questions />} />
            <Route exact path="/AskQuestion" element={<AskQuestion />} />
            <Route exact path="/Questions/:id" element={<DisplayQuestion />} />
            <Route exact path="/Tags" element={<TagsList />} />
            <Route exact path="/Users" element={<UsersList />} />
            <Route exact path="/Users/:id" element={<DisplayUser />} />
        </Routes>
    );
};

export default AllRoutes;
