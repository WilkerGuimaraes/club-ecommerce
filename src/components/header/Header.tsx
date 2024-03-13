import { BsCart3 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';

// Utilities
import { auth } from '../../config/firebase.config';
import { UserContext } from '../../contexts/user.context';

// Styles
import {
  HeaderContainer,
  HeaderTitle,
  HeaderItems,
  HeaderItem,
} from './Header.styles';

export const Header = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useContext(UserContext);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/sign-up');
  };

  const handleExploreClick = () => {
    navigate('/explore');
  };

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick}>CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignupClick}>Criar Conta</HeaderItem>
          </>
        )}
        {isAuthenticated && (
          <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
        )}
        <HeaderItem>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
};
