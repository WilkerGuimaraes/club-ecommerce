import { FiLogIn } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';

// Components
import { CustomButtom } from '../../components/custom-buttom/Custom-buttom';
import { CustomInput } from '../../components/custom-input/Custom-input';
import { Header } from '../../components/header/Header';
import { InputErrorMessage } from '../../components/input-error-message/Input-error-message';

// Styles
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer,
} from './Sign-up.styles';

interface SignUpForm {
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpForm>();

  const watchPassword = watch('password');

  const handleSubmitPress = (data: SignUpForm) => {
    console.log({ data });
  };

  return (
    <>
      <Header />

      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua conta</SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              $hasError={!!errors?.name}
              placeholder="Digite seu nome"
              {...register('name', { required: true })}
            />
            {errors?.name?.type === 'required' && (
              <InputErrorMessage>O nome é obrigatório.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              $hasError={!!errors?.lastName}
              placeholder="Digite seu sobrenome"
              {...register('lastName', { required: true })}
            />
            {errors?.lastName?.type === 'required' && (
              <InputErrorMessage>O sobrenome é obrigatório.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>e-mail</p>
            <CustomInput
              $hasError={!!errors?.email}
              placeholder="Digite seu e-mail"
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
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              $hasError={!!errors?.password}
              placeholder="Digite sua senha"
              type="password"
              {...register('password', { required: true })}
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirmação de senha</p>
            <CustomInput
              $hasError={!!errors?.passwordConfirmation}
              placeholder="Digite novamente sua senha"
              type="password"
              {...register('passwordConfirmation', {
                required: true,
                validate: (value) => {
                  return value === watchPassword;
                },
              })}
            />
            {errors?.passwordConfirmation?.type === 'required' && (
              <InputErrorMessage>
                A confirmação de senha é obrigatória.
              </InputErrorMessage>
            )}

            {errors?.passwordConfirmation?.type === 'validate' && (
              <InputErrorMessage>
                A confirmação de senha precisa se igual a senha.
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <CustomButtom
            startIcon={<FiLogIn />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Criar conta
          </CustomButtom>
        </SignUpContent>
      </SignUpContainer>
    </>
  );
};
