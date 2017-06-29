/* global document window */

import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import '../css/style.css';

const __webpack_public_path__ = window.myDynamicPublicPath;
const config = {
  apiKey: 'AIzaSyDGiUCLWRfehrexCLMnlj4CUzJNUnTf5mw',
  authDomain: 'leowong-e4905.firebaseapp.com',
  databaseURL: 'https://leowong-e4905.firebaseio.com',
  projectId: 'leowong-e4905',
  storageBucket: 'leowong-e4905.appspot.com',
  messagingSenderId: '207137667139',
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
