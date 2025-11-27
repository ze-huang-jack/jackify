

/**
 * Entry point for the React application.
 * This file sets up the React DOM and renders the main App component.
 * It uses React 18's createRoot API for better performance and concurrency features.
 * Make sure to have an element with id 'root' in your HTML file.
 * Author: jack
 * Date: 2025-11-27
 * Version: 1.0.0
 * License: MIT
 */


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
       <App />
  </React.StrictMode>
);