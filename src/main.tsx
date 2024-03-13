import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

import { UserContextProvider } from './contexts/user.context.tsx';

import { GlobalStyle } from './main.style.ts';
import { CategoryContextProvider } from './contexts/category.context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <CategoryContextProvider>
        <GlobalStyle />
        <App />
      </CategoryContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
);
