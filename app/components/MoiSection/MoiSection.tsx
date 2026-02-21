import Image from "next/image";
import Typewriter from "../Typewriter/Typewriter";
import { Icons } from "../Icons";
import styles from "./MoiSection.module.css";

export default function MoiSection() {
  return (
    <section id="MoiSection" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Bonjour, je suis{" "}
            <span className={styles.highlight}>Lucas Perez</span>
          </h1>

          <Typewriter />

          <p className={styles.description}>
            Je suis passionné par le développement et les solutions innovantes,
            je crée des expériences numériques efficaces et intuitives. Mon
            objectif est d'explorer de nouvelles technologies et d'enrichir mes
            connaissances pour faire une différence dans le monde du
            développement.
          </p>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Icons.GraduationCap />
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Dernier diplôme obtenu</h3>
                <p className={styles.infoText}>BUT Informatique</p>
                <p className={styles.infoSubtext}>2023 - 2026</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Icons.LocationDot />
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Mobilité</h3>
                <p className={styles.infoText}>Région Nord/Pas de Calais</p>
                <p className={styles.infoText}>Région Île de France</p>
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/Dev-LucasP"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <Icons.GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-perez-dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <Icons.LinkedIn />
            </a>
            <a
              href="mailto:lucas.perez59450@gmail.com"
              className={styles.socialLink}
              aria-label="Email"
            >
              <Icons.Mail />
            </a>
          </div>

          <div className={styles.buttonGroup}>
            <a href="#projects">
              <button className={styles.button}>Voir mes projets</button>
            </a>
            <a href="/assets/file/CV-perez-lucas.pdf" download>
              <button className={styles.buttonSecondary}>
                Télécharger mon CV
              </button>
            </a>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/lucas.webp"
              alt="Photo de profil Lucas Perez"
              width={384}
              height={384}
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
