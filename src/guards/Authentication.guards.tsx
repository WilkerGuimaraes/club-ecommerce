import { ReactNode, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Utilities
import { UserContext } from '../contexts/user.context';

// Components
import { Loading } from '../components/loading/Loading';
import { Header } from '../components/header/Header';

export const AuthenticationGuard = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading message="Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em alguns instantes..." />
      </>
    );
  }

  return children;
};
