import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import { configureStore, history } from './store';
import routes from './common/js/routes';
import LandingScreen from './screens/landing-screen/LandingScreenComponent';
import CounterScreen from './screens/counter-screen/CounterScreenComponent';
import DisplayScreen from './screens/display-screen/DisplayScreenComponent';

const store = configureStore();

const App = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const windowType = urlParams.get('window');
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          {
            (windowType === routes.WINDOW_TYPE_MAIN)
              ? (
                <Switch>
                  <Route exact path={routes.HOME} component={LandingScreen} />
                  <Route path={routes.COUNTER} component={CounterScreen} />
                  <Route path={routes.DISPLAY} component={DisplayScreen} />
                </Switch>
              ) : null
          }
          {
            (windowType === routes.WINDOW_TYPE_DISPLAY)
              ? (
                <Switch>
                  <Route exact path={routes.HOME} component={DisplayScreen} />
                </Switch>
              ) : null
          }
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
