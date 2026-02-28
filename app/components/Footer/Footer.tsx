import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.text}>
          Créé par{" "}
          <a
            href="https://github.com/Dev-LucasP"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Lucas Perez
          </a>{" "}
        </span>
      </div>
    </footer>
  );
}
