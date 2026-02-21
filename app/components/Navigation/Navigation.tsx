"use client";

import { useState } from "react";
import Link from "next/link";
import { Icons } from "../Icons";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Link href="#MoiSection" className={styles.navLink}>
              <span>Lucas PEREZ</span>
            </Link>
          </div>

          <div className={styles.desktopLinks}>
            <Link href="#experience" className={styles.navLink}>
              Expériences
            </Link>
            <Link href="#skills" className={styles.navLink}>
              Compétences
            </Link>
            <Link href="#projects" className={styles.navLink}>
              Projets
            </Link>
            <Link href="#contact" className={styles.navLink}>
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.menuButton}
            aria-label="Menu"
          >
            {isOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
          <div className={styles.mobileLinks}>
            <Link
              href="#experience"
              onClick={() => setIsOpen(false)}
              className={styles.mobileLink}
            >
              Expériences
            </Link>
            <Link
              href="#skills"
              onClick={() => setIsOpen(false)}
              className={styles.mobileLink}
            >
              Compétences
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className={styles.mobileLink}
            >
              Projets
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={styles.mobileLink}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
