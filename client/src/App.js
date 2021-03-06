import React, { Component } from 'react';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
import './App.sass';

import store from './store';
import Timer from './components/Timer';
import Type from "./components/Type";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div id="App">
                <Timer />
                <div id={"work-type"}>
                    <Type name={"break"}/>
                    <Type name={"session"}/>
                </div>
            </div>
            <footer>
                by <a href="https://github.com/tchell" target="_blank" rel="noopener noreferrer">Tanner Chell</a> | <a href="https://github.com/tchell/fcc-pomodoro" target="_blank" rel="noopener noreferrer">view the code</a>
            </footer>
        </Provider>
    );
  }
}
export default App;
