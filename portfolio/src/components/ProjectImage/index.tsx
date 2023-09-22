/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.css";

interface ProjectImageProps {
  img: string;
  alt: string;
}

export function ProjectImage(props: ProjectImageProps) {
  return (
      <img className={styles.projectImg} src={props.img} alt={props.alt} />
  );
}
