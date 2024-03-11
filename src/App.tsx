import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/home/Home.pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
