import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App.js';

//redux
import { pokemonsReducer } from './reducers/pokemons.js';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { featuring, logger } from './middlewares/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeEnhacers=compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
                              applyMiddleware(logger,featuring));

const store = createStore(pokemonsReducer,composeEnhacers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
