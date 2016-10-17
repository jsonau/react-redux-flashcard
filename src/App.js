import React, { Component } from 'react';
import ContainerDeckManager from './containers/ContainerDeckManager'
import ContainerDeck from './containers/ContainerDeck'
import './App.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import app from './reducers'

class App extends Component {
  render() {
    let store = createStore(app);
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <h2>React Redux Flashcard</h2>
          </div>
          <ContainerDeckManager />
          <ContainerDeck/>
        </div>
      </Provider>
    );
  }
}

export default App;
