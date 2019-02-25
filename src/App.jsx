import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import { configureStore, history } from './store';
import routes from './common/js/routes';
import LandingScreen from './screens/landing-screen/LandingScreenComponent';
import CounterScreen from './screens/counter-screen/CounterScreenComponent';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={routes.HOME} component={LandingScreen} />
        <Route path={routes.COUNTER} component={CounterScreen} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
