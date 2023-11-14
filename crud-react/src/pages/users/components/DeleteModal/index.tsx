import { ButtonContainer, DivContainer } from "./styles";
import { Button } from "@/components/Button";
import axios from 'axios';
import {  toast } from 'react-toastify';
import { User } from "@/contexts/AuthContext";

interface DeleteModalProps {
    onClose: Function
    userData?: User 
}

export function DeleteModal({onClose, userData}: DeleteModalProps) {

    async function handleDeleteUser() {
        try {
            if(userData) {
                await axios.delete(`
                http://localhost:3333/usuarios/${userData.id}
                `)
                toast.success("Usuário excluído com sucesso")
            }
            onClose()
        } catch (error) {
            toast.error("Erro ao excluir usuário")
        }
    }

    return (
       
            <DivContainer>
               <span>Você tem certeza que deseja excluir o usuário?</span>
               <span>Essa ação é irreversível.</span>
                    <ButtonContainer>
                        <Button label="Confirmar" onClick={handleDeleteUser}/>
                        <Button label="Cancelar" variant="danger" onClick={() => onClose()} />
                    </ButtonContainer> 
            </DivContainer>
    
    )
}