// import { FunctionComponent } from 'react';
import { ButtonHTMLAttributes } from 'react';
import { CustomButtonContainer, IconContainer } from './Custom-buttom.styles';

// Styles
interface CustomButtomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  startIcon?: JSX.Element;
}

export const CustomButtom = ({
  children,
  startIcon,
  ...rest
}: CustomButtomProps) => {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  );
};
