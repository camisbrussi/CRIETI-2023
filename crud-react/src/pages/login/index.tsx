import Image from "next/image";
import { useContext, useState } from "react";
import { LoginContainer } from "./styles";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { AuthContext } from "@/contexts/AuthContext";

const newLoginValidationSchema = zod.object({
  email: zod
    .string()
    .min(1, "Informe o seu e-mail")
    .email("Informe um e-mail válido"),
  password: zod
    .string()
    .min(6, "Mínimo 6 caracteres")
    .max(50, "Máximo de 50 caracteres"),
});

type Login = zod.infer<typeof newLoginValidationSchema>;

export default function Login() {
  const [error, setError] = useState("");

  const { signIn } = useContext(AuthContext);

  const router = useRouter();

  const methods = useForm<Login>({
    resolver: zodResolver(newLoginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, formState } = methods;

  async function handleLogin(data: Login) {
    try {
      await signIn(data);

      router.push("/");
    } catch (e) {
      setError("Login e/ou senha incorretos");
    }
  }

  const { errors } = formState;

  return (
    <LoginContainer>
      <Image
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        alt="laptop em cima de uma mesa"
        width={700}
        height={200}
      />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleLogin)}>
          <h1>Fazer Login</h1>

          <Input
            label="E-mail"
            id="email"
            type="email"
            error={errors?.email?.message}
            data-cy="login-email"
          />
          <Input
            label="Senha"
            id="password"
            type="password"
            error={errors?.password?.message}
            data-cy="login-password"
          />

          <Button label="Entrar" />
          <span>{error}</span>
        </form>
      </FormProvider>
    </LoginContainer>
  );
}
