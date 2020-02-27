import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';


import HomePage from './pages/homepage/homepage.component';

const Hat = () => (<h1>Hats</h1>);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={Hat} />
      </Switch>
    </div>
  );
}

export default App;
