import React from 'react';
import PropTypes from 'prop-types';

const Posts = ({posts}) => (
    <ul>
        {posts.map((post, i) =>
            <div key={i}>
                <li key={i} href={post.url} style={{cursor:'pointer' }} onClick={() => { console.log(post.url);window.open(post.url)}}>{post.title}</li>
                <em>{post.selftext}</em>
            </div>
        )}
    </ul>
)

Posts.propTypes = {
    posts: PropTypes.array.isRequired
};

export default Posts;
