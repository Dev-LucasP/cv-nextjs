"use client";

import { Icons } from "../Icons";
import styles from "./ProjectsSection.module.css";

interface Project {
  icon: () => React.ReactElement;
  title: string;
  description: string;
  category: string;
  link: string;
}

const projects: Project[] = [
  {
    icon: Icons.Code,
    title: "LensJudge",
    description:
      "Code Java pour un système de jugement de compétitions de programmation. Permet l'exécution et l'évaluation de solutions soumises par les participants.",
    category: "DÉVELOPPEMENT",
    link: "https://github.com/Dev-LucasP/LENSJudge",
  },
  {
    icon: Icons.Code,
    title: "Pokédex",
    description:
      "Application Python interactive du Pokédex. Recherche et consultation des informations sur les Pokémon avec une interface moderne.",
    category: "DÉVELOPPEMENT",
    link: "https://github.com/Dev-LucasP/Pokedex",
  },
  {
    icon: Icons.Code,
    title: "Site Événementiel",
    description: "Site web pour un événements.",
    category: "DÉVELOPPEMENT WEB",
    link: "https://github.com/Dev-LucasP/Site-Evenementiel",
  },
  {
    icon: Icons.Gamepad,
    title: "Démineur",
    description:
      "Implémentation en javafx du jeu du démineur. Interface intuitive pour une expérience de jeu optimale.",
    category: "APPLICATION DESKTOP",
    link: "https://github.com/Dev-LucasP/Demineur",
  },
  {
    icon: Icons.Code,
    title: "Gestionnaire de recettes",
    description:
      "Server PHP utilisant Laravel pour la gestion de recettes de cuisine. Permet la création, modification et partage de recettes culinaires.",
    category: "DÉVELOPPEMENT WEB",
    link: "https://github.com/Dev-LucasP/Gestionnaire-De-Recettes",
  },
  {
    icon: Icons.Laptop,
    title: "LensJudge Net",
    description:
      "Setup server de LensJudge. Plateforme en ligne pour les compétitions de programmation avec interface moderne.",
    category: "AUTRES",
    link: "https://github.com/Dev-LucasP/LensJudge-Net",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>Projets Personnels</span>
        </h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectIcon}>
                <project.icon />
              </div>
              <span className={styles.projectCategory}>{project.category}</span>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                Voir plus →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
