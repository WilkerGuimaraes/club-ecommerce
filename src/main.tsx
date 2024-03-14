import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

import { UserContextProvider } from './contexts/user.context.tsx';

import { GlobalStyle } from './main.style.ts';
import { CategoryContextProvider } from './contexts/category.context.tsx';
import { CartContextProvider } from './contexts/cart.context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <CategoryContextProvider>
        <CartContextProvider>
          <GlobalStyle />
          <App />
        </CartContextProvider>
      </CategoryContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
);
