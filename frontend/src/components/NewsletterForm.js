import { useState } from "react";
import { useTranslation } from "react-i18next";

const NewsletterForm = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage(t("newsletter.emptyEmail"));
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:4000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message); // backend message
        setEmail("");
      } else {
        setMessage(data.message); // backend error
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage(t("newsletter.serverError"));
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <input
        type="email"
        placeholder={t("newsletter.placeholder")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ width: "70%", padding: "10px", marginRight: "10px" }}
      />

      <button type="submit" disabled={loading} style={{ padding: "10px 20px" }}>
        {loading ? t("newsletter.submitting") : t("newsletter.subscribe")}
      </button>

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </form>
  );
};

export default NewsletterForm;
