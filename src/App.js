import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing}  />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
