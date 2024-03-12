import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import { HomePage } from './pages/home/Home.page';
import { LoginPage } from './pages/login/Login.page';
import { SignUpPage } from './pages/sign-up/Sign-up.page';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
