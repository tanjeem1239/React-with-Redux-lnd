import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BookApp from './BookApp';
import Button from './components/Button';
import { Provider } from './context/books';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Provider >
      <BookApp/>
    </Provider> */}
   
  </React.StrictMode>
);
