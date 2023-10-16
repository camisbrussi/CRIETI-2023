/* eslint-disable @next/next/no-img-element */
import styles from './index.module.css'

export function Profile() {
  return (
    <div>
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/camisbrussi.png"
          alt="Foto de Camila Sbrussi"
        />
        <h1 className={styles.name}>Camila Sbrussi</h1>
      </div>
      <h2>Especialização</h2>
      <span>
        Software Engineer | Frontend | Javascript | Typescript | React | CSS |
        HTML
      </span>
    </div>
  );
}