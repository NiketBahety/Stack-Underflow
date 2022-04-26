import React from 'react';
import './right-side-bar.css';
import Widget from './widget';
import WidgetTags from './widgetTags';

const RightSideBar = () => {
    return (
        <aside className="right-side-bar">
            <Widget />
            <WidgetTags />
        </aside>
    );
};

export default RightSideBar;
