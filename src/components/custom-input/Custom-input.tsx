import { FunctionComponent, InputHTMLAttributes, forwardRef } from 'react';

// Styles
import { CustomInputContainer } from './Custom-input.styles';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  $hasError?: boolean;
}

export const CustomInput: FunctionComponent<CustomInputProps> = forwardRef(
  (props, ref) => {
    return <CustomInputContainer {...props} ref={ref as any} />;
  },
);

CustomInput.displayName = 'CustomInput';
