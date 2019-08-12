import React from 'react';
import 'styled-components';
import './App.css';
import { ContentWithRouter } from './content';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return <BrowserRouter>
    <header><span>歌を分かる</span></header>
    <main>
      <ContentWithRouter />
    </main>
    <footer><span>by LastObserver, 2019</span></footer>
  </BrowserRouter>
}

export default App;
