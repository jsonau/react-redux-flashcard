import React, { Component } from 'react';
import ContainerDeckManager from './containers/ContainerDeckManager'
import './App.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import decks from './reducers/decks'

class App extends Component {
  render() {
    let store = createStore(decks);
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <h2>React Redux Flashcard</h2>
          </div>
          <ContainerDeckManager />

        </div>
      </Provider>
    );
  }
}

export default App;
