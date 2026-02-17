import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/Contact.css"

const Contact = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [unsubscribeEmail, setUnsubscribeEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  // SUBSCRIBE
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    try {
      const response = await fetch("http://localhost:4000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
        setMessage("");
      } else {
        setMessage(data.message); // backend message
      }
    } catch (err) {
      setMessage(t("contact.serverError"));
    }
  };

  // UNSUBSCRIBE
  const handleUnsubscribe = async (e) => {
    e.preventDefault();
    if (!unsubscribeEmail.trim()) return;

    try {
      const response = await fetch("http://localhost:4000/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: unsubscribeEmail.trim() }),
      });

      const data = await response.json();
      alert(data.message); // backend message
      setUnsubscribeEmail("");
    } catch (err) {
      alert(t("contact.serverError"));
    }
  };

  return (
    <div className="contact-page">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>{t("contact.title")}</h1>

        <p className="intro-text">
          {t("contact.intro")}
        </p>

        {/* SUBSCRIBE */}
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="newsletter-form"
          >
            <input
              className="email-box"
              type="email"
              placeholder={t("contact.emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              {t("contact.subscribe")}
            </button>
          </motion.form>
        ) : (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p>{t("contact.successTitle")}</p>
            <span>{t("contact.successSubtitle")}</span>
          </motion.div>
        )}

        {message && <p className="error-message">{message}</p>}

        {/* UNSUBSCRIBE */}
        <motion.div
          className="unsubscribe-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="privacy-note">
            {t("contact.unsubscribePrompt")}
          </p>

          <form onSubmit={handleUnsubscribe} className="newsletter-form">
            <input
              className="email-box"
              type="email"
              placeholder={t("contact.unsubscribePlaceholder")}
              value={unsubscribeEmail}
              onChange={(e) => setUnsubscribeEmail(e.target.value)}
              required
            />
            <button type="submit" className="unsubscribe-btn">
              {t("contact.unsubscribe")}
            </button>
          </form>
        </motion.div>

        <p className="privacy-note">
          {t("contact.privacy")}
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
