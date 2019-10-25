import React, { Component } from 'react';

import './Comment.css';

function Comment({ comment }) {
    return (
        <div className="comment">
            <img src={comment.author.avatar} />
            <div className="comment-box">
                <p>
                    <strong>{comment.author.name}</strong> {comment.content}
                </p>
            </div>
        </div>
    );
}

export default Comment;
