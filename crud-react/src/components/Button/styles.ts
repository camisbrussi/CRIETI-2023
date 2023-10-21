import styled from "styled-components";

interface ButtonContainerProps {
  width: number;
  height: number;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  border-radius: 10px;

  color: white;
  background-color: #00f;
  border: none;
`;
