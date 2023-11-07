import { ButtonContainer } from "./styles";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  width?: number;
  height?: number;
  onClick?: () => void;
  variant?: "primary" | "danger" | "secondary";
}
export function Button({
  label,
  width = 200,
  height = 36,
  onClick,
  variant = "primary",
}: ButtonProps) {
  return (
    <ButtonContainer
      width={width}
      height={height}
      onClick={onClick}
      variant={variant}
    >
      {label}
    </ButtonContainer>
  );
}
