import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import {
  Footer
} from "mdbreact";
import './App.css';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <main>
          <Routes />
        </main>
        <Footer color="indigo">
            <p className="footer-copyright mb-0 py-3 text-center">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.muzzlab.com"> Muzzlab.com </a>
            </p>
          </Footer>
          </div>
      </Router>

    );
  }
}

export default App;
