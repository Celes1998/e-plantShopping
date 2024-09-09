import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'; // Import the Redux store
import App from './App';
import './index.css'; // Import global styles if you have any

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app wrapped with Provider
root.render(
  <Provider store={store}> {/* Provide the Redux store to the App */}
    <App />
  </Provider>
);
