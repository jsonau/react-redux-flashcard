import React, { Component } from 'react';
import DeckManager from './components/DeckManager'
import './App.css';

var decks = [
  {
    id: "123",
    title: "Physics",
  },
  {
    id: "345",
    title: "Biology"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Redux Flashcard</h2>
        </div>
        <DeckManager decks={decks} />

      </div>
    );
  }
}

export default App;
