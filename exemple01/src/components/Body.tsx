import React from "react";
import styles from "./body.module.css";

function Body() {
  return (
    <main className={styles.main}>
      <h2 className={styles.h2}>Bem-vindo à Página Inicial</h2>
      <p className={styles.p}>
        Este é o conteúdo principal da página inicial do meu site.
      </p>
    </main>
  );
}

export default Body;
