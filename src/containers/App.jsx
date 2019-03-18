import * as React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { AppPaths } from '../constants/HttpConstants.js';
import MainPage from '../components/MainPage/index.jsx';

import 'semantic-ui-css/semantic.min.css';

const history = createBrowserHistory();

export default class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact={true} path={AppPaths.MAIN_PAGE} component={MainPage} />
                </Switch>
            </Router>
        );
    }
}
