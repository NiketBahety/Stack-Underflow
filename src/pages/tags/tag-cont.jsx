import React from 'react';
import Tag from '../../components/tag/tag';
import './tag-cont.css';

const TagCont = ({ data }) => {
    return (
        <div className="tag-cnt">
            <div className="tag-name">
                <Tag name={data.tagName}></Tag>
            </div>
            <div className="tag-desc">
                <p>{data.tagDesc}</p>
            </div>
        </div>
    );
};

export default TagCont;
