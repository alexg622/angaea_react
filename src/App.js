import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SET_CURRENT_USER } from "./actions/types"
import Login from './components/session/Login'
import store from './store'
import './App.css';
import Testing from "./components/testing"
import Header from './components/layout/Header'
import activitiesShow from './components/activities/show'
import Landing from "./components/layout/Landing"
import usersShow from './components/users/show'
import categoriesIndex from './components/categories/Index'
import About from "./components/layout/about"
import Contact from "./components/layout/contact"

if(localStorage.isAuthenticated === "true") {
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: {currentUser: JSON.parse(localStorage.currentUser)}
  })
}


class App extends Component {
  render() {
   return (
     <Provider store={ store }>
       <Router>
         <div className="App">
           <Header />
           <Route exact path="/" component={ Landing } />
           <Route exact path="/about" component={ About } />
           <Route exact path="/contact" component={ Contact } />
           <Route exact path="/experiences" component={ categoriesIndex } />
           <Route exact path="/activities/:id" component={ activitiesShow } />
           <Route exact path="/users/:id" component={ usersShow } />
           <Route exact path="/testing" component={ Testing } />
           <Route exact path="/Login" component={ Login } />
         </div>
       </Router>
     </Provider>
   );
 }
}


export default App;
