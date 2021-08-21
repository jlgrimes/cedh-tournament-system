import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { StartTournament } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/start-tournament'>
          <StartTournament />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
