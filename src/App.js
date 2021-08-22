import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { START_TOURNAMENT, TOURNAMENT } from './constants/urls';

import { StartTournament, Tournament } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={START_TOURNAMENT}>
          <StartTournament />
        </Route>
        <Route path={TOURNAMENT}>
          <Tournament />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
