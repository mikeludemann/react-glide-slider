import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlideSlider from './components/glide';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <GlideSlider id="slider"></GlideSlider>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;
