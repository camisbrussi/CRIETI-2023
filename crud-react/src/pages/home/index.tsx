import { AuthGuard } from "@/components/AuthGuard";
import { Button } from "@/components/Button";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export default function Home() {
  const { user, logout } = useContext(AuthContext)
  return (
    <>
    <AuthGuard>
      <h1>Home</h1>
      {user?.nome}
      <Button label="Sair" onClick={logout} />
    </AuthGuard>
    </>
  );
}
