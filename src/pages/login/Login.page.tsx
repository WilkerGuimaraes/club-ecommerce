import { BsGoogle } from 'react-icons/bs';
import { FiLogIn } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { CustomButtom } from '../../components/custom-buttom/Custom-buttom';
import { Header } from '../../components/header/Header';
import { CustomInput } from '../../components/custom-input/Custom-input';
import { InputErrorMessage } from '../../components/input-error-message/Input-error-message';

// Styles
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from './Login.styles';

// Utilities
import { auth, db, googleProvider } from '../../config/firebase.config';
import { UserContext } from '../../contexts/user.context';

interface LoginForm {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<LoginForm>();

  const { isAuthenticated } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmitPress = async (data: LoginForm) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      console.log({ userCredentials });
    } catch (error) {
      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        return setError('password', { type: 'mismatch' });
      }
    }
  };

  const handleSignInWithGooglePress = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider);

      const querySnapShot = await getDocs(
        query(
          collection(db, 'users'),
          where('id', '==', userCredentials.user.uid),
        ),
      );

      const user = querySnapShot.docs[0]?.data();

      if (!user) {
        const firstName = userCredentials.user.displayName?.split(' ')[0];
        const lastName = userCredentials.user.displayName?.split(' ')[1];
        await addDoc(collection(db, 'users'), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          provider: 'google',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButtom
            startIcon={<BsGoogle size={18} />}
            onClick={handleSignInWithGooglePress}
          >
            Entrar com o Google
          </CustomButtom>

          <LoginSubtitle>Ou entre com o seu e-mail</LoginSubtitle>

          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              $hasError={!!errors?.email}
              placeholder="Digite o seu e-mail"
              {...register('email', {
                required: true,
                validate: (value) => {
                  return isEmail(value);
                },
              })}
            />
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O e-mail é obrigatório.</InputErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>
                Por favor, insira um e-mail válido.
              </InputErrorMessage>
            )}
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              type="password"
              $hasError={!!errors?.password}
              placeholder="Digite sua senha"
              {...register('password', { required: true })}
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}

            {errors?.password?.type === 'mismatch' && (
              <InputErrorMessage>
                O email e/ou a senha são inválidos.
              </InputErrorMessage>
            )}
          </LoginInputContainer>

          <CustomButtom
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Entrar
          </CustomButtom>
        </LoginContent>
      </LoginContainer>
    </>
  );
};
