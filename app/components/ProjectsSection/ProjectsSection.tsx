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
    icon: Icons.Laptop,
    title: "LensJudge",
    description:
      "Application desktop de gestion de compétitions de programmation. Interface complète pour organiser et suivre les concours.",
    category: "APPLICATION DESKTOP",
    link: "https://github.com/Dev-LucasP/LENSJudge",
  },
  {
    icon: Icons.Code,
    title: "Pokédex",
    description:
      "Application web interactive du Pokédex. Recherche et consultation des informations sur les Pokémon avec une interface moderne.",
    category: "DÉVELOPPEMENT WEB",
    link: "https://github.com/Dev-LucasP/Pokedex",
  },
  {
    icon: Icons.Laptop,
    title: "Site Événementiel",
    description:
      "Site web dédié à la gestion d'événements. Permet la création, la planification et la gestion d'événements variés.",
    category: "APPLICATIONS DESKTOP",
    link: "https://github.com/Dev-LucasP/Site-Evenementiel",
  },
  {
    icon: Icons.Gamepad,
    title: "Démineur",
    description:
      "Implémentation web du jeu classique du démineur. Interface intuitive et responsive pour une expérience de jeu optimale.",
    category: "DÉVELOPPEMENT WEB",
    link: "https://github.com/Dev-LucasP/Demineur",
  },
  {
    icon: Icons.Code,
    title: "Gestionnaire de recettes",
    description:
      "API REST pour la gestion de recettes de cuisine. Permet la création, modification et partage de recettes culinaires.",
    category: "API",
    link: "https://github.com/Dev-LucasP/Gestionnaire-De-Recettes",
  },
  {
    icon: Icons.Code,
    title: "LensJudge Net",
    description:
      "Version web de LensJudge. Plateforme en ligne pour les compétitions de programmation avec interface moderne.",
    category: "DÉVELOPPEMENT WEB",
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
