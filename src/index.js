import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// API a usar: REM REST API https://rem-rest-api.herokuapp.com/
// Setting some defaults for axios:
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api';

// Se crea la saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Se crea el store y se le pasa el middleware de las sagas
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// Para ejecutar las sagas
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  /* Se debe envolver-wrap up el componente App en el componente
  Provider, para pasarle el store */
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
