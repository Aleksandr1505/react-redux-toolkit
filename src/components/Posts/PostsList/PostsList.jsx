import React from 'react';
import { useSelector } from 'react-redux';
import { selectPostsIds, getPostsStatus, getPostsError } from '../postsSlice';
import css from './PostList.module.css';
import PostsExcerpt from '../PostsExcerpt/PostsExcerpt';

const PostsList = () => {
  const orderedPostsIds = useSelector(selectPostsIds);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postsStatus === 'succeeded') {
    
    content = orderedPostsIds.map(postId => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (postsStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <section className={css.postList}>
      <h2>Posts</h2>
      <div className={css.postsContainer}>{content}</div>
    </section>
  );
};

export default PostsList;
