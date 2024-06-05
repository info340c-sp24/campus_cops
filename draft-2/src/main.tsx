import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";

// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyBgfyDJTL5xMAUd7teUCyKi_HbPLacdUd8",
  authDomain: "campus-cops-99b95.firebaseapp.com",
  projectId: "campus-cops-99b95",
  storageBucket: "campus-cops-99b95.appspot.com",
  messagingSenderId: "821578310991",
  appId: "1:821578310991:web:8517ccfe8eb8842eb7d13a",
  measurementId: "G-JCQXFZC6HY"
};


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
