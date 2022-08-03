import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

// firebase.database().ref('Personal Portfolio/' + 'Projects').on('value', function (snapshot) {
//   console.log(snapshot.val()['GLAU Aide Memoire']);
// })
// import firebase from 'firebase';
// const firebaseConfig = {
//   apiKey: "AIzaSyCHj253SLY7_RisdfWtv0zJLqEvB2i2Guw",
//   authDomain: "fir-demo-d760f.firebaseapp.com",
//   databaseURL: "https://fir-demo-d760f-default-rtdb.firebaseio.com",
//   projectId: "fir-demo-d760f",
//   storageBucket: "fir-demo-d760f.appspot.com",
//   messagingSenderId: "835102837793",
//   appId: "1:835102837793:web:5014939774043806a02760",
//   measurementId: "G-DYC8G5CB9R"
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
