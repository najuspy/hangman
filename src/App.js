//Library Imports of React
import React, { Component } from 'react';

import axios from 'axios';
//Required Components Imports
import Header from './Components/Header/Header.component'

//WOrd List Import
import words from './WordList'

//CSS Imports
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      wordList: []
    }

  }
  componentDidMount() {
    this.setState({ wordList: words })
  }

  render() {
    return (
      < div >
        <Header />
        {this.state.wordList}
      </div >
    )
  }
}

export default App;
