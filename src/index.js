import React from 'react';
import ReactDOM from 'react-dom';
import style from '../styles/index.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import App from './components/app';

ReactDOM.render(<App />, document.querySelector('.selector'));
