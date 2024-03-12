import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import { HomePage } from './pages/home/Home.pages';
import { LoginPage } from './pages/login/Login.pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
