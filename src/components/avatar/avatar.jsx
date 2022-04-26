import React from 'react';
import { Link } from 'react-router-dom';

const Avatar = ({
    backgroundColor,
    px,
    py,
    color,
    borderRadius,
    fontSize,
    cursor,
    displayLetter,
    id,
}) => {
    const style = {
        backgroundColor,
        padding: `${py} ${px}` || '0 0',
        color: color || 'black',
        borderRadius: borderRadius || '100%',
        fontSize: fontSize || '14px',
        textAlign: 'center',
        cursor: cursor || 'pointer',
        textDecoration: 'none',
        fontWeight: 'bold',
        margin: '0 10px',
    };
    return (
        <div style={style}>
            <Link
                to={`/Users/${id}`}
                style={{
                    color: 'white',
                    textDecoration: 'none',
                }}
            >
                {displayLetter}
            </Link>
        </div>
    );
};

export default Avatar;
