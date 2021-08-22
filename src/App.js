import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import store from './store';
import { NEW_TOURNAMENT, TOURNAMENT } from './constants/urls';
import { StartTournament, Tournament } from './pages';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path={NEW_TOURNAMENT}>
            <StartTournament />
          </Route>
          <Route path={TOURNAMENT}>
            <Tournament />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
