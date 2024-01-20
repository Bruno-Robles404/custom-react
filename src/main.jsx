import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB8XCzMv4WUu6PYNU-tleVpf95SMG-Il_Q",
  authDomain: "patagonia-3d330.firebaseapp.com",
  projectId: "patagonia-3d330",
  storageBucket: "patagonia-3d330.appspot.com",
  messagingSenderId: "293251729550",
  appId: "1:293251729550:web:3976ceda4cc122a475a1df"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
