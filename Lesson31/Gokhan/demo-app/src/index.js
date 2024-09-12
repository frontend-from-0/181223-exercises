import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Named export require {} around the name (of what you import)
import {App} from './App';
// Default export do not use {} around the name (of what you import)
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Lines 8-10 contain JSX code
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

