import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import './App.css';
import Testing from "./components/testing"

class App extends Component {
  render() {
   return (
     <Provider store={ store }>
       <Router>
         <div className="App">
           <Route exact path="/testing" component={ Testing } />
         </div>
       </Router>
     </Provider>
   );
 }
}


export default App;
