import { AuthGuard } from "@/components/AuthGuard";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { User } from "@/contexts/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Users() {
  const [userList, setUserList] = useState<User[]>()

  useEffect(() => {
    axios.get<User[]>("http://localhost:3333/usuarios").then(
      (response) => setUserList(response.data)
    )

  }, [])

  console.log(userList)

  return (
    <>
    <AuthGuard>
      <Header label="Usuários" />
      <Menu />
      {userList?.map((user) => {
        return (
          <Card />
        )
      })}
    </AuthGuard>
    </>
  );
}
