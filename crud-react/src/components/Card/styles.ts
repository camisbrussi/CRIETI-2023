import styled from "styled-components";

export const CardContainer = styled.div`
    height: 4rem;
    background-color: ${(props) => props.theme.secondaryBackground};
    border: 1px solid ${(props) => props.theme["gray-100"]};
    border-radius: 8px;

    padding: 20px;

`