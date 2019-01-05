import React, { Component } from 'react';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
import './App.sass';
import Timer from './components/Timer';

import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div id="App">
              <Timer />
          </div>
        </Provider>
    );
  }
}
export default App;
