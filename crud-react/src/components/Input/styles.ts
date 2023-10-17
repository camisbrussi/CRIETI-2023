import styled from "styled-components";

type InputProps = {
  width: number;
};
export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: ${(props) => props.width}px;
`;
