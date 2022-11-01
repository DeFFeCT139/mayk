import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAilaispXrz2Xh6_KLigzqYIaMhUHH1WG0",
  authDomain: "tg-bots-b22e8.firebaseapp.com",
  databaseURL: "https://tg-bots-b22e8-default-rtdb.firebaseio.com",
  projectId: "tg-bots-b22e8",
  storageBucket: "tg-bots-b22e8.appspot.com",
  messagingSenderId: "335739215574",
  appId: "1:335739215574:web:9ba49a4b4a252f6a0f7377"
};

const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
