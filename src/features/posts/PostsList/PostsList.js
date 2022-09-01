import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from '../postsSlice';
import css from './PostList.module.css';
import PostsExcerpt from '../PostsExcerpt/PostsExcerpt';

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postsStatus === 'succeeded') {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map(post => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === 'failed') {
    content = <p>{error}</p>;
  }

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
      console.log('test');
    }
  }, [dispatch, postsStatus]);

  return (
    <section className={css.postList}>
      <h2>Posts</h2>
      <div className={css.postsContainer}>{content}</div>
    </section>
  );
};

export default PostsList;
