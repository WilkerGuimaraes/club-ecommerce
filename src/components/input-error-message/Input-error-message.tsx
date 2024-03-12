// Styles
import { InputErrorMessageContainer } from './Input-error-message.styles';

interface InputErrorMessageProps {
  children: string;
}

export const InputErrorMessage = ({ children }: InputErrorMessageProps) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>;
};
