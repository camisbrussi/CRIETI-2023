import { InputContainer } from "./styles";
interface InputProps {
  label: string;
  id: string;
  placeholder?: string;
  type: string;
  width?: number;
}
export function Input({
  label,
  id,
  placeholder,
  width = 100,
  ...rest
}: InputProps) {
  return (
    <InputContainer width={width}>
      <label htmlFor={id}>{label}</label>
      <input name={id} placeholder={placeholder} {...rest} />
    </InputContainer>
  );
}
