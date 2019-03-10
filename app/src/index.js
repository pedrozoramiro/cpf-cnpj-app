import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './modules/App';
import * as serviceWorker from './serviceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from './configuration/store'
import './index.css';

function renderApp(store) {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
  )
}

function startApp() {
  const store = configureStore();
  serviceWorker.unregister();
  renderApp(store);
}

startApp();