import React from 'react';
import NotesApp from './component/NotesApp.js'
import UpdateButton from './component/UpdateButton';

const App = () => {
  return (
    <div>
      <h1>CRUD</h1>
      <UpdateButton />
      <NotesApp />
    </div>
  );
};

export default App;
