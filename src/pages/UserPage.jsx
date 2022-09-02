import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectUserById } from 'components/Users/usersSlice';
import { selectPostsByUser } from 'components/Posts/postsSlice';

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector(state => selectUserById(state, Number(userId)));

  const postsForUser = useSelector(state =>
    selectPostsByUser(state, Number(userId)),
  );

  const postTitles = postsForUser.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/post/${id}`}>{title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user?.name}</h2>
      <ol>{postTitles}</ol>
    </section>
  );
};

export default UserPage;
