import React from 'react';
import 'styled-components';
import './App.css';
import axios from 'axios';
import { ContentWithRouter } from './content';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  private store = store();

  constructor(props: {}) {
    super(props);
 
    axios.defaults.baseURL = 'http://localhost:4000';
  }

  public render() {
    return (
      <Provider store={this.store}>
        <BrowserRouter>
          <header><span>歌を分かる</span></header>
          <main>
            <ContentWithRouter />
          </main>
          <footer><span>by LastObserver, 2019</span></footer>
        </BrowserRouter>
      </Provider>
    );
  }
}
