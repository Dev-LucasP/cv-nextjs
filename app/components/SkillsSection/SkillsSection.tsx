import styles from "./SkillsSection.module.css";

const CodeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const DatabaseIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const ToolIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const LayersIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Langages",
    skills: [
      { name: "TypeScript", icon: CodeIcon },
      { name: "JavaScript", icon: CodeIcon },
      { name: "Python", icon: CodeIcon },
      { name: "Java", icon: CodeIcon },
    ],
  },
  {
    title: "Frameworks & Librairies",
    skills: [
      { name: "Laravel", icon: LayersIcon },
      { name: "Spring", icon: LayersIcon },
      { name: "Angular", icon: LayersIcon },
      { name: "Selenium", icon: LayersIcon },
    ],
  },
  {
    title: "Outils & Environnement",
    skills: [
      { name: "Git", icon: ToolIcon },
      { name: "Docker", icon: ToolIcon },
      { name: "GitLab", icon: ToolIcon },
      { name: "Postman", icon: ToolIcon },
    ],
  },
  {
    title: "Bases de données",
    skills: [
      { name: "PostgreSQL", icon: DatabaseIcon },
      { name: "MongoDB", icon: DatabaseIcon },
      { name: "MySQL", icon: DatabaseIcon },
      { name: "SQLite", icon: DatabaseIcon },
    ],
  },
  {
    title: "IDE",
    skills: [
      { name: "IntelliJ IDEA", icon: CodeIcon },
      { name: "PyCharm", icon: CodeIcon },
      { name: "Android Studio", icon: CodeIcon },
      { name: "VS Code", icon: CodeIcon },
    ],
  },
  {
    title: "Autres",
    skills: [
      { name: "Linux", icon: ToolIcon },
      { name: "Windows", icon: ToolIcon },
      { name: "Markdown", icon: CodeIcon },
      { name: "CSS", icon: CodeIcon },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>Compétences</span>
        </h2>

        <div className={styles.intro}>
          <div className={styles.introContent}>
            <h3 className={styles.subtitle}>Mes compétences</h3>
            <p className={styles.description}>
              Maîtrise des langages de programmation tels que Java, PHP et
              Python. Solide expérience en développement web et conception
              d&apos;applications. Passionné par l&apos;apprentissage de
              nouvelles technologies et l&apos;amélioration continue.
            </p>
          </div>
        </div>

        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.grid}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className={styles.skillCard}>
                  <skill.icon className={styles.skillIcon} />
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
