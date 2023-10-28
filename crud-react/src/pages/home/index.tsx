import { AuthGuard } from "@/components/AuthGuard";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export default function Home() {
  const { user, logout } = useContext(AuthContext)
  return (
    <>
    <AuthGuard>
      <Header label="Home"/>
      <Menu />
    </AuthGuard>
    </>
  );
}
