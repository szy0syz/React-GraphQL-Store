import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'gestalt/dist/gestalt.css';

import App from './components/App';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';

import registerServiceWorker from './registerServiceWorker'

const Root = () => (
  <Router>
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route component={App} exact path="/" />
        <Route component={Signin} path="/Signin" />
        <Route component={Signup} path="/Signup" />
        <Route component={Checkout} path="/Checkout" />
      </Switch>
    </React.Fragment>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
