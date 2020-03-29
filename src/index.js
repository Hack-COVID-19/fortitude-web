import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import App from './containers/app'

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

import 'sanitize.css/sanitize.css'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

Amplify.configure(awsExports);

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
