import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import css from './PostsExcerpt.module.css';
import PostAuthor from '../PostAuthor/PostAuthor';
import TimeAgo from '../TimeAgo/TimeAgo';
import ReactionButtons from '../ReactionButtons/ReactionButtons';
import { selectPostById } from '../postsSlice';

const PostsExcerpt = ({ postId }) => {
  const post = useSelector(state => selectPostById(state, postId));
  const { title, body, userId, date } = post;

  return (
    <article className={css.post}>
      <h3>{title}</h3>
      <p>{body.substring(0, 100)}</p>
      <Link to={`post/${postId}`}>View Post</Link>
      <div className={css.authorAndTimeContainer}>
        <PostAuthor userId={userId} />
        <TimeAgo timestamp={date} />
      </div>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
