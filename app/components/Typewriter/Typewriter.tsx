"use client";

import { useState, useEffect } from "react";
import styles from "./Typewriter.module.css";

const texts = ["Développeur"];

export default function Typewriter() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setDisplayText(currentText.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentText.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className={styles.typewriter}>
      Je suis un <span className={styles.highlight}>{displayText}</span>
      <span className={styles.cursor}>|</span>
    </div>
  );
}
