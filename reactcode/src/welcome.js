import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Customer from './customer';
import Home from './home';
import About from './about';
import CustomerDashBoard from './customerDashBoard';




export default function Welcome() {
    return <div>

        <div><h1> Axis Bank</h1></div>

        <div>
        <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/customer">Customer</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/customer">
            <Customer />
          </Route>
          <Route path="/listCustomer">
            <CustomerDashBoard />
          </Route>

        </Switch>
      </div>
    </Router>
        </div>



        <div><p>Footer 2021 copywrite</p> </div>

    </div>
}
