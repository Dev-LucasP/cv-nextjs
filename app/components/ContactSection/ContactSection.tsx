"use client";

import { useState, FormEvent } from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Chargement...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const tel = formData.get("tel")?.toString().trim() || "";
    const objet = formData.get("objet")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    if (!name || !email || !tel || !objet || !message) {
      setStatus("Veuillez remplir tous les champs.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Utiliser l'API EmailJS directement via fetch (pas de dépendance)
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_9x4ugwk",
            template_id: "template_lfkmp4f",
            user_id: "wI4cJgjCEWlafqsgr",
            template_params: {
              name,
              email,
              tel,
              objet,
              message,
            },
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setStatus("✅ Votre message a été envoyé. Merci !");
      form.reset();
    } catch (err) {
      setStatus("❌ Erreur lors de l'envoi");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>Contactez-moi</span>
        </h2>

        <h3 className={styles.subtitle}>Mon profil vous a intéressé ?</h3>

        <p className={styles.description}>
          N&apos;hésitez pas à me contacter en remplissant le formulaire
          ci-dessous
        </p>

        <form id="contact-form" onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="tel" className={styles.label}>
              Téléphone
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="objet" className={styles.label}>
              Objet
            </label>
            <input
              type="text"
              id="objet"
              name="objet"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={styles.textarea}
              required
            />
          </div>

          <button
            type="submit"
            id="submit-button"
            className={styles.button}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
          </button>

          {status && (
            <p id="status" className={styles.status}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
