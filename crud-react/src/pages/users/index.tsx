import { AuthGuard } from "@/components/AuthGuard";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Card, CardInfo } from "@/components/Card";
import { Menu } from "@/components/Menu";
import { User } from "@/contexts/AuthContext";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { UserContainer, ContentContainer, ModalContainer } from "./styles";
import { UserForm } from "./components/UserForm";
import Loading from "@/components/Loading";
import { DeleteModal } from "./components/DeleteModal";

export default function Users() {
  const [userList, setUserList] = useState<User[]>();
  const [isModalCreateUserOpen, setIsModalCreateUserOpen] = useState(false)
  const [isModalEditUserOpen, setIsModalEditUserOpen] = useState(false)
  const [isModalDeleteUserOpen, setIsModalDeleteUserOpen] = useState(false)
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const customModalStyles = {
    content: {
      position: "absolute" as "absolute",
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };  

  const fetchUser = useCallback(async () => {
    setLoading(true)
    await axios
    .get<User[]>("http://localhost:3333/usuarios")
    .then((response) => setUserList(response.data));
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser]);


  function openModalCreateUser() {
    setIsModalCreateUserOpen(true)
  }

  const closeModalCreateUser = useCallback(async () => {
    setIsModalCreateUserOpen(false)
    await fetchUser()
  },[fetchUser])

  function openModalEditUser(userEdit: User) {
    setUser(userEdit)
    setIsModalEditUserOpen(true)
  }

  const closeModalEditUser = useCallback(async () =>  {
    setIsModalEditUserOpen(false)
    await fetchUser()
  }, [fetchUser])

  function openModalDeleteUser(userDelete: User) {
    setUser(userDelete)
    setIsModalDeleteUserOpen(true)
  }

  const closeModalDeleteUser = useCallback(async () =>  {
    setIsModalDeleteUserOpen(false)
    await fetchUser()
  }, [fetchUser])

  const modalCreateUser = useMemo(()=> {
    
   return( 
    <ModalContainer isOpen={isModalCreateUserOpen} style={customModalStyles}>
        <h1>Criar usuário</h1>
        <UserForm onClose={closeModalCreateUser} />
    </ModalContainer>
   )

  }, [closeModalCreateUser, customModalStyles, isModalCreateUserOpen])

  const modalEditUser = useMemo(()=> {
   return( 
    <ModalContainer isOpen={isModalEditUserOpen} style={customModalStyles}>
      <h1>Editar usuário</h1>
      <UserForm onClose={closeModalEditUser} userData={user} />
    </ModalContainer>
    )

  }, [closeModalEditUser, customModalStyles, isModalEditUserOpen, user])

  const modalDeleteUser = useMemo(()=> {
    return( 
     <ModalContainer isOpen={isModalDeleteUserOpen} style={customModalStyles}>
       <h1>Deletar usuário</h1>

        <DeleteModal onClose={closeModalDeleteUser} userData={user}/>
     </ModalContainer>
     )
 
   }, [closeModalDeleteUser, customModalStyles, isModalDeleteUserOpen, user])
 

  return ( 
    <>
      <AuthGuard>
        <Header label="Usuários" />
        <UserContainer>
          <Menu />
          {loading ? <Loading /> : 
          <ContentContainer>
            <Button label="Criar usuário" onClick={openModalCreateUser} />
            {userList?.map((user) => {
              return (
                <Card 
                  key={user.id} 
                  openModalEdit={() => openModalEditUser(user)}
                  openModalDelete={() => openModalDeleteUser(user)}
                >
                  <CardInfo title="ID" data={user.id} />
                  <CardInfo title="Nome" data={user.nome} />
                  <CardInfo title="E-mail" data={user.email} />
                </Card>
              );
            })}
          </ContentContainer>
          }
          
        </UserContainer>
        
      </AuthGuard>
      {modalCreateUser}
      {modalEditUser}
      {modalDeleteUser}
      
    </>
  );
}
