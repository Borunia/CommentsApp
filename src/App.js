import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer.js';
import DevTools from './DevTools';
import MessageInputContainer from './MessageInputContainer';

const App = () => {
  return (
    <div className={'App'}>
      <h1>Welcame to Comments Show App</h1>
      <p> To add your comment write text in form below and press ENTER. </p>
      <MessageInputContainer />
      <CommentsListContainer />
      <DevTools />
    </div>
  );
}

export default App;
