import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectPostById } from 'components/Posts/postsSlice';
import PostAuthor from 'components/Posts/PostAuthor/PostAuthor';
import TimeAgo from 'components/Posts/TimeAgo/TimeAgo';
import ReactionButtons from 'components/Posts/ReactionButtons/ReactionButtons';

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector(state => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2> Post not found</h2>
      </section>
    );
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
    </article>
  );
};

export default SinglePostPage;
