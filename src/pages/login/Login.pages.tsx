import { BsGoogle } from 'react-icons/bs';
import { FiLogIn } from 'react-icons/fi';

// Components
import { CustomButtom } from '../../components/custom-buttom/Custom-buttom';
import { Header } from '../../components/header/Header';
import { CustomInput } from '../../components/custom-input/Custom-input';

// Styles
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from './Login.styles';

export const LoginPage = () => {
  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButtom startIcon={<BsGoogle size={18} />}>
            Entrar com o Google
          </CustomButtom>

          <LoginSubtitle>Ou entre com o seu e-mail</LoginSubtitle>

          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput placeholder="Digite o seu e-mail" />
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput placeholder="Digite sua senha" />
          </LoginInputContainer>

          <CustomButtom startIcon={<FiLogIn size={18} />}>Entrar</CustomButtom>
        </LoginContent>
      </LoginContainer>
    </>
  );
};
