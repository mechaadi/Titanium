import React, { Component } from 'react';
import './App.css';

import store from './store'
import Posts from './components/Posts'
import Postfrom from './components/Postform';
import { Provider } from 'react-redux';



class App extends Component {
  render(){
  return (
    <Provider store={store}>
      <div className="App">
        <Postfrom/>
        <Posts/>
      </div>
    </Provider>
   
  );
}
}

export default App;
