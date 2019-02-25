import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import { configureStore, history } from './store';
import LandingScreen from './screens/landing-screen/LandingScreenComponent';
import CounterScreen from './screens/counter-screen/CounterScreenComponent';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={LandingScreen} />
        <Route path="/counter" component={CounterScreen} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
