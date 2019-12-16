import React, { Component } from 'react';
import './App.css';

import store from './store'
import Posts from './components/Posts'
import Postfrom from './components/Postform';
import { Provider } from 'react-redux';
import FetchAlbums from './components/FetchAlbums';



class App extends Component {
  render(){
  return (
    <Provider store={store}>
      <div className="App">
        <FetchAlbums/>
        <Postfrom/>
        <Posts/>
      </div>
    </Provider>
   
  );
}
}

export default App;
