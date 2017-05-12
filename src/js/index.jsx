/* global document window */

import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import '../css/style.css';

const __webpack_public_path__ = window.myDynamicPublicPath;
const config = {
  apiKey: 'AIzaSyBOFDpcFg6-8dpWlmLc4kyiKgYifXcbDSI',
  authDomain: 'personal-site-b3739.firebaseapp.com',
  databaseURL: 'https://personal-site-b3739.firebaseio.com',
  projectId: 'personal-site-b3739',
  storageBucket: 'personal-site-b3739.appspot.com',
  messagingSenderId: '430509954560',
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
