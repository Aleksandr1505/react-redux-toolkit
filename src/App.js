import PostsList from 'features/posts/PostsList/PostsList';
import AddPostForm from 'features/posts/AddPostForm/AddPostForm';

const App = () => {
  return (
    <main>
      <AddPostForm />
      <PostsList />
    </main>
  );
};

export default App;
