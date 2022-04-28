import React from 'react';
import { Link } from 'react-router-dom';

import './tag.css';

const Tag = (props) => {
    let val = props.name;
    val.replace('+', '%2b');
    return (
        <div className="tag">
            <Link to={`/Questions?${val}`}>{props.name}</Link>
        </div>
    );
};

export default Tag;
