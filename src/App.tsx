import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useContext } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

// Pages
import { HomePage } from './pages/home/Home.page';
import { LoginPage } from './pages/login/Login.page';
import { SignUpPage } from './pages/sign-up/Sign-up.page';

// Utilities
import { auth, db } from './config/firebase.config';
import { UserContext } from './contexts/user.context';

export const App = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user;

    if (isSigningOut) {
      return logoutUser();
    }

    const isSigningIn = !isAuthenticated && user;
    if (isSigningIn) {
      const querySnapshot = await getDocs(
        query(collection(db, 'users'), where('id', '==', user.uid)),
      );

      const userFromFirestore = querySnapshot.docs[0]?.data();

      return loginUser(userFromFirestore as any);
    }
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
