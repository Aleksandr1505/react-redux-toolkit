import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllUsers } from '../usersSlice';

const UsersList = () => {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map(({ name, id }) => (
    <li key={id}>
      <Link to={`/user/${id}`}>{name}</Link>
    </li>
  ));

  return (
    <section>
      <h2>Users</h2>
      <ul>{renderedUsers}</ul>
    </section>
  );
};

export default UsersList;
