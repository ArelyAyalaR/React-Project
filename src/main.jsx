import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1Qi1q2O1diwsi_F6hgqelboogZkyJEl8",
  authDomain: "react-ecdfd.firebaseapp.com",
  projectId: "react-ecdfd",
  storageBucket: "react-ecdfd.appspot.com",
  messagingSenderId: "489996881981",
  appId: "1:489996881981:web:4cf1c980911559cb95da54",
  measurementId: "G-KQB23EB9JY"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
