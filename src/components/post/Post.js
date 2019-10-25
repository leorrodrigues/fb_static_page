import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Post.css';

import Comment from '../comment/Comment';

function Post({ post }) {
    return (
        <div className="post">
            <img src={post.author.avatar} alt={post.author.name} />
            <div className="post-name">{post.author.name}</div>
            <div className="post-date">{post.date}</div>
            <div className="post-content">{post.content}</div>
            <hr></hr>
            {post.comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
}

Post.propTypes = {
    post: PropTypes.object,
};

export default Post;
