import styles from "./indexNoComponets.module.css";

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.h1}>Meu Site</h1>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a className={styles.a} href="/">
                Página Inicial
              </a>
            </li>
            <li>
              <a className={styles.a} href="/sobre">
                Sobre
              </a>
            </li>
            <li>
              <a className={styles.a} href="/contato">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <h2 className={styles.h2}>Bem-vindo à Página Inicial</h2>
        <p className={styles.p}>
          Este é o conteúdo principal da página inicial do meu site.
        </p>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 Meu Site. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
