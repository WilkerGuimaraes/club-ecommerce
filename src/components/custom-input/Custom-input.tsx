import { InputHTMLAttributes } from 'react';

// Styles
import { CustomInputContainer } from './Custom-input.styles';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const CustomInput = ({ hasError, ...rest }: CustomInputProps) => {
  return <CustomInputContainer hasError={hasError} {...rest} />;
};
