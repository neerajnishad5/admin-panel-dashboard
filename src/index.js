import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import { DarkModeContextProvider } from './context/darkModeContext';
 
ReactDOM.render(
  <React.StrictMode>
  <DarkModeContextProvider>
  <App />
  </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);