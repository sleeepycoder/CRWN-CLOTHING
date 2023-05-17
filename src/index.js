import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './contexts/contexts';
import { CategoriesProvider } from "./contexts/Categories_context";
import { CartProvider } from './contexts/cart_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <CategoriesProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </CategoriesProvider>
    </UserProvider>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

