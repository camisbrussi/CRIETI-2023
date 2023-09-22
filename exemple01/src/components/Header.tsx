import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
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
  );
}

export default Header;
