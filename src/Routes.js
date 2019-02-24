import React from 'react';
import { Switch, Route } from 'react-router';
import LandingScreen from './containers/LandingPageContainer';

export default () => (
    <Switch>
        <Route path={'/'} component={LandingScreen} />
    </Switch>
);