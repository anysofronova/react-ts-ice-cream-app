import styles from "./Footer.module.scss";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
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

export default Footer;
