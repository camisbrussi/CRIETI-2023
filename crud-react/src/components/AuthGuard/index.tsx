// components/AuthGuard.tsx
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/contexts/AuthContext";

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const { user, getLogged } = useContext(AuthContext);

  useEffect(() => {
    if (user) return;
    async function getUser() {
      getLogged();
    }

    getUser();

    if (!user) {
        router.push("/login");
    }
  }, [getLogged, user]);


  return <>{children}</>;
}