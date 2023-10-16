/* eslint-disable @next/next/no-img-element */
import NextLink, { LinkProps as NextLinkProps } from "next/link";

import styles from "./index.module.css";
import { ReactNode } from 'react';

interface LinkProps {
  to: string;
  title: string;
  isExternal?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export function Link(props: LinkProps) {
  return (
    <div className={styles.externalLink}>
      {props.iconLeft && props.iconLeft}
      <NextLink href={props.to} target={(props.isExternal ? "_blank" : "")}>
        {props.title}
      </NextLink>
      {props.iconRight && props.iconRight}
    </div>
  );
}
