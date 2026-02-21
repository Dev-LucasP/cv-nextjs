import { Icons } from "../Icons";
import styles from "./Experience.module.css";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    role: "Alternance - Testing & Automatisation",
    company: "Worldline",
    period: "Septembre 2025 - Aujourd'hui",
    description: [
      "Développement et maintenance de scripts de tests automatisés.",
      "Collaboration avec les équipes de test et de développement (en anglais).",
      "Intégration des tests dans des pipelines d'intégration continue et de pipelines parallèles.",
      "Réalisation de tests d'accessibilité.",
      "Mise en place de Docker dans le projet.",
      "Migration du projet de Selenium à Playwright.",
    ],
  },
  {
    role: "Stage - Testing & Automatisation",
    company: "Worldline",
    period: "Avril - Juillet 2025",
    description: [
      "Automatisation de tests avec Robot Framework pour diverses banques.",
      "Développement de scripts de tests automatisés.",
      "Collaboration avec les développeurs et les équipes de test.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>Expériences</span>
        </h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceCard}>
              <div className={styles.header}>
                <h3 className={styles.role}>{exp.role}</h3>
                <div className={styles.company}>{exp.company}</div>
                <div className={styles.period}>{exp.period}</div>
              </div>
              <div className={styles.description}>
                <ul className={styles.descriptionList}>
                  {exp.description.map((item, idx) => (
                    <li key={idx} className={styles.descriptionItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
