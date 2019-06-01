import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import categoriesShow from './components/categories/Show'
import usersNew from './components/users/new'
import NewActivityTicket from "./components/activities/NewActivityTicket"
import NewStripe from './components/stripe/new'
import StripeTerms from './components/stripe/terms'
import AcctDetails from './components/stripe/accountDetails'
import StripeAcct from './components/stripe/stripeAcct'
import ShowTermsAndConditions from './components/terms/showTermsAndConditions'
import PrivacyAgreement from './components/terms/privacyAgreement'
import EditActivityForm from './components/activities/EditActivityForm'
import Footer from './components/layout/Footer'
import LandingRevised from './components/layout/LandingRevised'
import AboutCreating from './components/layout/aboutCreating'
import NewContact from './components/layout/newContact'

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
           <Switch>
             <Route exact path="/" component={ LandingRevised } />
             // <Route exact path="/" component={ Landing } />
             <Route exact path="/categories/:id" component={ categoriesShow } />
             <Route exact path="/about" component={ About } />
             <Route exact path="/users/new" component={usersNew} />
             <Route exact path="/contact" component={ NewContact } />
             // <Route exact path="/contact" component={ Contact } />
             <Route exact path="/experiences" component={ categoriesIndex } />
             <Route exact path="/activities/:id/edit" component={ EditActivityForm } />
             <Route exact path="/activities/:id" component={ activitiesShow } />
             <Route exact path="/activities/:id/activityTickets/new" component={ NewActivityTicket } />
             <Route exact path="/stripe/:id/new" component={ NewStripe } />
             <Route exact path="/users/:id" component={ usersShow } />
             <Route exact path="/testing" component={ Testing } />
             <Route exact path="/Login" component={ Login } />
             <Route exact path="/stripe/:id/terms/new" component={ StripeTerms } />
             <Route exact path="/stripe/:id/stripe_acct_details" component={ AcctDetails } />
             <Route exact path="/stripe/:id/stripe_acct" component={ StripeAcct } />
             <Route exact path="/termsAndConditions" component={ ShowTermsAndConditions } />
             <Route exact path="/privacyAgreement" component={ PrivacyAgreement } />
             <Route exact path="/aboutCreating" component={ AboutCreating } />
          </Switch>
          <Footer />
         </div>
       </Router>
     </Provider>
   );
 }
}

export default App;
