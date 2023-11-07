import { FormProvider, useForm } from "react-hook-form";
import { ButtonContainer, DivContainer } from "./styles";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-toastify";
import { User } from "@/contexts/AuthContext";
import { useEffect } from "react";

const newUserValidationSchema = zod
  .object({
    nome: zod.string().min(1, "Informe um nome válido"),
    email: zod.string().email("Informe um e-mail válido"),
    senha: zod.string().min(6, "Sua senha deve conter 6 caracteres"),
    confirmar_senha: zod.string().min(6, "Sua senha deve conter 6 caracteres"),
  })
  .refine((data) => data.senha === data.confirmar_senha, {
    message: "As senhas devem ser iguais",
    path: ["confirmar_senha"],
  });

type UserData = zod.infer<typeof newUserValidationSchema>;

interface UserFormProps {
  onClose: Function;
  userData?: User;
}

export function UserForm({ onClose, userData }: UserFormProps) {
  const methods = useForm<UserData>({
    resolver: zodResolver(newUserValidationSchema),
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
      confirmar_senha: "",
    },
  });

  const { handleSubmit, formState, setValue } = methods;

  useEffect(() => {
    if (userData) {
      setValue("nome", userData.nome);
      setValue("email", userData.email);
    }
  }, []);

  const { errors } = formState;

  async function handleCreateUser(data: UserData) {
    try {
      await axios.post("http://localhost:3333/usuarios", {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
      });

      toast.success("Usuário cadastrado com sucesso");
      onClose();
    } catch (error) {
      toast.error("Erro ao criar usuário");
    }
  }

  return (
    <FormProvider {...methods}>
      <DivContainer>
        <form onSubmit={handleSubmit(handleCreateUser)}>
          <Input label="Nome" id="nome" error={errors.nome?.message} />
          <Input label="E-mail" id="email" error={errors.email?.message} />
          <Input
            label="Senha"
            id="senha"
            type="password"
            error={errors.senha?.message}
          />
          <Input
            label="Confirmar Senha"
            id="confirmar_senha"
            type="password"
            error={errors.confirmar_senha?.message}
          />
          <ButtonContainer>
            <Button label="Enviar Dados" />
            <Button
              label="Cancelar"
              variant="danger"
              onClick={() => onClose()}
            />
          </ButtonContainer>
        </form>
      </DivContainer>
    </FormProvider>
  );
}
