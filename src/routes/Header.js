import React, { Component } from 'react';
import CardPope from '../components/CardPope';
import { CardCounter } from '../components/CardCounter';

class Header extends Component {
  render() {
    return (
      <div className="background-header">
       <nav className="nav navbar navbar-expand-lg navbar-dark defoc">
          <a className="navbar-brand white" href="/">Rule of Thumb.</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link white" href="/pasttrials">Past Trials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link white" href="/howitworks">Home It Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link white" href="/login">Log In / Sign Up</a>
            </li>
            <li className="nav-item menu">
              <i className="fas fa-search fa-1x white"/>
            </li>
          </ul>
          </div>
        </nav>       
        <CardPope />
        <CardCounter />
      </div>
    );
  }
}

export default Header;