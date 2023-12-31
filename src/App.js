import './App.css';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { Article, Brand, Navbar, CTA } from './components';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar  />
          <Header  />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  );
}

export default App;
