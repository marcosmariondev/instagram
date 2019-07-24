import React from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

function App() {
  return (
    <div>

      <Header />

      <Post name="Marcos Marion"
              avatar={require('./profile.jpg')}
              caption="Legenda 1"
              imagePost="https://source.unsplash.com/random/500x300" />

      <Post name="Joao Dois"
              avatar={require('./profile.jpg')}
              caption="Legenda dois"
              imagePost="https://source.unsplash.com/random/600x400" />


    </div>
  );
}

export default App;
