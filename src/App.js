//Library Imports of React
import React, { Component } from 'react';

//Required Components Imports
import Header from './Components/Header/Header.component'
import KeyBoard from './Components/keyboard/keyboard.component'
import Footer from './Components/Footer/footer.component'

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
    const { wordList } = this.state
    return (
      < div >
        <Header />
        <KeyBoard />
        <Footer />
      </div >
    )
  }
}

export default App;
