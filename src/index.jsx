import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App.jsx';
import { Provider } from 'react-redux';
// import configureStore from './store/store';

import '../src/static/_reset.scss';

// const store = configureStore({});

ReactDOM.render(
    (
        <Provider >
            <App />
        </Provider>
    ),
    document.getElementById('root')
);
