import React from 'react';
import Tag from '../tag/tag';

const WidgetTags = () => {
    const tags = [
        'c++',
        'css',
        'javascript',
        'react',
        'node.js',
        'mongoDB',
        'netlify',
    ];
    return (
        <div className="widget-tags">
            <h3>Watched tags</h3>
            <div className='tag-cont'>
                {tags.map((tag) => (
                    <Tag key={tag} name={tag} />
                ))}
            </div>
        </div>
    );
};

export default WidgetTags;
