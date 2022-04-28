import React from 'react';
import { Link } from 'react-router-dom';

import './tag.css';

const Tag = (props) => {
    return (
        <div className="tag">
            <Link to={`/Questions?${props.name}`}>{props.name}</Link>
        </div>
    );
};

export default Tag;
