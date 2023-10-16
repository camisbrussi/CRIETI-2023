/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react';
import styles from "./index.module.css";

interface ButtonProps {
  onClick: () => void;
  title: string;
  icon?: ReactNode;
}
export function Button(props: ButtonProps) {
  return (
      <button className={styles.button}  onClick={props.onClick}>
        {props.title}
        {props.icon}
      </button>
  );
}
