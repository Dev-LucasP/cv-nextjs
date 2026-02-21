import styles from "./SkillsSection.module.css";
import {
  FaJs,
  FaPython,
  FaJava,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGitlab,
  FaDocker,
  FaDatabase,
  FaCode,
  FaLinux,
  FaWindows,
  FaMarkdown,
} from "react-icons/fa";
import {
  SiTypescript,
  SiLaravel,
  SiAngular,
  SiBootstrap,
  SiSelenium,
  SiSpring,
  SiPostman,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiNeo4J,
  SiIntellijidea,
  SiPycharm,
  SiAndroidstudio,
  SiPhpstorm,
  SiEclipseide,
  SiApachejmeter,
  SiApache,
  SiGradle,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

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
      { name: "HTML", icon: FaHtml5 },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaJs },
      { name: "Python", icon: FaPython },
      { name: "PHP", icon: FaPhp },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Frameworks & Librairies",
    skills: [
      { name: "Laravel", icon: SiLaravel },
      { name: "Angular", icon: SiAngular },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Selenium", icon: SiSelenium },
      { name: "Spring", icon: SiSpring },
      { name: "React Native", icon: TbBrandReactNative },
    ],
  },
  {
    title: "Outils & Environnement",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitLab", icon: FaGitlab },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: FaDocker },
      { name: "Gradle", icon: SiGradle },
      { name: "Linux", icon: FaLinux },
    ],
  },
  {
    title: "Bases de données",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiSqlite },
      { name: "Neo4j", icon: SiNeo4J },
    ],
  },
  {
    title: "IDE",
    skills: [
      { name: "IntelliJ IDEA", icon: SiIntellijidea },
      { name: "PyCharm", icon: SiPycharm },
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "PHPStorm", icon: SiPhpstorm },
      { name: "Eclipse", icon: SiEclipseide },
      { name: "VS Code", icon: FaCode },
    ],
  },
  {
    title: "Autres",
    skills: [
      { name: "Linux", icon: FaLinux },
      { name: "Windows", icon: FaWindows },
      { name: "Markdown", icon: FaMarkdown },
      { name: "CSS", icon: FaCss3Alt },
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
