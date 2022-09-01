import React from 'react';

import css from './PostsExcerpt.module.css';
import PostAuthor from '../PostAuthor/PostAuthor';
import TimeAgo from '../TimeAgo/TimeAgo';
import ReactionButtons from '../ReactionButtons/ReactionButtons';

const PostsExcerpt = ({ post }) => {
  const { title, body, userId, date } = post;

  return (
    <article className={css.post}>
      <h3>{title}</h3>
      <p>{body.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={userId} />

        <TimeAgo timestamp={date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
