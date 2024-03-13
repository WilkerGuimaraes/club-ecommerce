import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

// Pages
import { HomePage } from './pages/home/Home.page';
import { LoginPage } from './pages/login/Login.page';
import { SignUpPage } from './pages/sign-up/Sign-up.page';

// Utilities
import { auth } from './config/firebase.config';

export const App = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user);
  });
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
