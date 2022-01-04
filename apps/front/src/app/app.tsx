import React from 'react';
import Welcome from './pages/Welcome';
import LandingPage from './pages/LandingPage';
import { Route, Switch } from 'react-router-dom';

export function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/usercrud">
        <Welcome />
      </Route>
    </Switch>
  );
}

export default App;
