import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './components/session/Login'
import store from './store'
import './App.css';
import Testing from "./components/testing"
import Header from './components/layout/Header'

class App extends Component {
  render() {
   return (
     <Provider store={ store }>
       <Router>
         <div className="App">
           <Header />
           <Route exact path="/testing" component={ Testing } />
           <Route exact path="/Login" component={ Login } />
         </div>
       </Router>
     </Provider>
   );
 }
}


export default App;
