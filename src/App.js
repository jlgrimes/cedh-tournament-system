import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { START_TOURNAMENT } from './constants/urls';

import { StartTournament } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={START_TOURNAMENT}>
          <StartTournament />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
