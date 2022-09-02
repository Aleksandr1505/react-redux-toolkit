import { Routes, Route, Navigate } from 'react-router-dom';
import PostsList from 'components/Posts/PostsList/PostsList';
import AddPostForm from 'components/Posts/AddPostForm/AddPostForm';
import EditPostForm from 'components/Posts/EditPostForm/EditPostForm';
import Layout from 'components/Layout/Layout';
import UsersList from 'components/Users/UsersList/UsersList';
import SinglePostPage from 'pages/SinglePostPage';
import UserPage from 'pages/UserPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
