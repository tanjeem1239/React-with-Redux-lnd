import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BookApp from './BookApp';
import Button from './components/Button';
import { Provider } from './context/books';
import { NavigationProvider } from './context/navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <NavigationProvider>
    <App />
    </NavigationProvider>

    {/* <Provider >
      <BookApp/>
    </Provider> */}
   
  </React.StrictMode>
);
