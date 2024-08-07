import { ButtonContainer } from "./Button.style";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: string;
};

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <ButtonContainer type={type} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
