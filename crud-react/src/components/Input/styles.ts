import styled from "styled-components";

type InputProps = {
  width: number;
};
export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: ${(props) => props.width}px;

  input {
    margin: 0;
    padding: 0;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme["gray-100"]};
    outline: none;
    background: transparent;

    &:focus {
      border-bottom: 2px solid ${(props) => props.theme.primary};
    }
  }

  span {
    color: ${(props) => props.theme.danger};
  }
`;
