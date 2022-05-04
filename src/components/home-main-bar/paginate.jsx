import React from 'react';
import './home-main-bar.css';

const Paginate = ({ questions, questionsPerPage, paginate }) => {
    const pages = [];
    for (let i = 0; i < Math.ceil(questions.length / questionsPerPage); i++) {
        pages.push(i + 1);
    }

    return (
        <div>
            <ul>
                {pages.map((page) => (
                    <li key={page} onClick={() => paginate(page)}>
                        {page}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Paginate;
