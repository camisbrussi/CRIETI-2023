import { AuthGuard } from "@/components/AuthGuard";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Card, CardInfo } from "@/components/Card";
import { Menu } from "@/components/Menu";
import { User } from "@/contexts/AuthContext";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { UserContainer, ContentContainer, ModalContainer } from "./styles";
import { UserForm } from "./components/UserForm";

export default function Users() {
  const [userList, setUserList] = useState<User[]>();
  const [isModalCreateUserOpen, setIsModalCreateUserOpen] = useState(false);
  const [isModalEditUserOpen, setIsModalEditUserOpen] = useState(false);
  const [user, setUser] = useState<User>();

  const customModalStyles = {
    content: {
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  useEffect(() => {
    axios
      .get<User[]>("http://localhost:3333/usuarios")
      .then((response) => setUserList(response.data));
  }, []);

  function openModalCreateUser() {
    console.log("acessou");

    setIsModalCreateUserOpen(true);
    console.log("acessou", isModalCreateUserOpen);
  }

  function closeModalCreateUser() {
    setIsModalCreateUserOpen(false);
  }

  function openModalEditUser(userEdit: User) {
    setUser(userEdit);
    setIsModalEditUserOpen(true);
  }

  function closeModalEditUser() {
    setIsModalEditUserOpen(false);
  }

  const modalCreateUser = useMemo(() => {
    <ModalContainer isOpen={isModalCreateUserOpen} style={customModalStyles}>
      <h1>Criar usuário</h1>
      <UserForm onClose={closeModalCreateUser} />
    </ModalContainer>;
  }, [isModalCreateUserOpen]);

  const modalEditUser = useMemo(() => {
    <ModalContainer isOpen={isModalEditUserOpen} style={customModalStyles}>
      <h1>Editar usuário</h1>
      <UserForm onClose={closeModalEditUser} userData={user} />
    </ModalContainer>;
  }, [isModalEditUserOpen]);

  return (
    <>
      <AuthGuard>
        <Header label="Usuários" />
        <UserContainer>
          <Menu />
          <ContentContainer>
            <Button label="Criar usuário" onClick={openModalCreateUser} />
            {userList?.map((user) => {
              return (
                <Card key={user.id} openModal={() => openModalEditUser(user)}>
                  <CardInfo title="ID" data={user.id} />
                  <CardInfo title="Nome" data={user.nome} />
                  <CardInfo title="E-mail" data={user.email} />
                </Card>
              );
            })}
          </ContentContainer>
        </UserContainer>
      </AuthGuard>
      {modalCreateUser}
      {modalEditUser}
    </>
  );
}
