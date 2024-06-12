import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// const anotherUser = "Akbari"

// const reactElement = React.createElement(
//   'a',
//   {href:"https://google.com", target:'_blank'},
//   "Hello Maulik",
//   anotherUser
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // reactElement
);
