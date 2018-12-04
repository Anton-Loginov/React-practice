import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import {articles} from "../fixtures";
import ArticleList from "./ArticleList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
