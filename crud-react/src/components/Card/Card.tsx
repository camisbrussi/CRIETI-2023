import { MouseEventHandler, ReactNode } from "react";
import {
  ButtonsContainer,
  ContentContainer,
  DivContainer,
  IconButton,
} from "./Card.styles";
import { Pencil, Trash } from "phosphor-react";

interface CardProps {
  children: ReactNode;
  openModalEdit:  () => void
  openModalDelete:  () => void
}

export function Card({ children, openModalEdit, openModalDelete }: CardProps) {
  return (
    <DivContainer>
      <ContentContainer>
        {children}
        <ButtonsContainer>
          <IconButton 
            title="Editar" 
            variant="primary" 
            onClick={openModalEdit}
            aria-label="Editar"
          >
            {<Pencil size={24} />}
          </IconButton>
          <IconButton 
            title="Excluir" 
            variant="danger" 
            onClick={openModalDelete}
            aria-label="Deletar"
          >
            {<Trash size={24} />}
          </IconButton>
        </ButtonsContainer>
      </ContentContainer>
    </DivContainer>
  );
}
