import React from 'react';
import pen from '../../assets/pen.svg';
import message from '../../assets/message.svg';
import './right-side-bar.css';

const Widget = () => {
    return (
        <div className="widget">
            <div className="right-div-1">
                <h4>The Overflow Blog</h4>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={pen} alt="" width="13" />
                    <p>BlockChain is the new future</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={pen} alt="" width="13" />
                    <p>Podcast 73: Is web development dying?</p>
                </div>
            </div>
            <div className="right-div-1">
                <h4>Featured on Meta</h4>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={message} alt="" width="13" />
                    <p>BlockChain is the new future</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={message} alt="" width="13" />
                    <p>Podcast 73: Is web development dying?</p>
                </div>
            </div>
            <div className="right-div-1">
                <h4>Hot Meta Posts</h4>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={pen} alt="" width="13" />
                    <p>Which is the best course for learning React.js ?</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={pen} alt="" width="13" />
                    <p>Can I make axios requests from backend ?</p>
                </div>
            </div>
        </div>
    );
};

export default Widget;
