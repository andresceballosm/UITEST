import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home';
import Header from './routes/Header';
import { PastTrials } from './pages/pasttrials';
import { Login } from './pages/login';
import { HowItWorks } from './pages/howitworks';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/pasttrials' component={PastTrials}/>
      <Route exact path='/howitworks' component={HowItWorks} />
      <Route exact path='/login' component={Login} />
    </Switch>
  </main>
)

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Main />
        </div>
    );
  }
}

export default App;
