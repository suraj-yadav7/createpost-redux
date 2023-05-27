import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store.jsx"
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-f0vrvzicx3fqszs1.us.auth0.com"
  clientId="TATqhhZI6gkrUFpzIdMG64wIT1x1fYov"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <Provider store={store}>
    <App />
  </Provider>
  </Auth0Provider>,
)
