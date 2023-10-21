import { ButtonContainer } from "./styles";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  width?: number;
  height?: number;
  onClick?: () => void;
}
export function Button({
  label,
  width = 300,
  height = 50,
  onClick,
}: ButtonProps) {
  return (
    <ButtonContainer width={width} height={height} onClick={onClick}>
      {label}
    </ButtonContainer>
  );
}
