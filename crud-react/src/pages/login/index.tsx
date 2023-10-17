import Image from "next/image";
import { useState } from "react";
import { LoginContainer } from "./styles";
import { Input } from "@/components/Input";

interface LoginProps {
  email?: string;
  password?: string;
}

export default function Login() {
  const [user, setUser] = useState<LoginProps>({});

  function handleLogin(e: any) {
    e.preventDefault();
    setUser({
      email: e.target.email.value,
      password: e.target.password.value,
    });

    console.log(user);
  }

  return (
    <LoginContainer>
      <Image
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        alt="laptop em cima de uma mesa"
        width={700}
        height={200}
      />
      <form onSubmit={handleLogin}>
        <h1>Fazer Login</h1>

        <Input label="E-mail" id="email" type="email" />
        <Input label="Senha" id="password" type="password" width={300} />

        <button>Login</button>
      </form>
    </LoginContainer>
  );
}
