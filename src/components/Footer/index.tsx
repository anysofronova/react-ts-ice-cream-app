import { BsGithub } from "react-icons/bs";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/anysofronova"
        target={"_blank"}
        rel="noreferrer"
      >
        <BsGithub /> @anysofronova
      </a>
      <p>{new Date().getFullYear()}</p>
    </footer>
  );
};
