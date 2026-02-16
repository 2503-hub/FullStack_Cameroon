import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/Culture.css"

const cultures = [
  { key: "attire", image: "/assets/toghu.jpg" },
  { key: "music", image: "/assets/assiko.jpg" },
  { key: "cuisine", image: "/assets/eru.jpg" },
  { key: "language", image: "/assets/flag.jpg" },
  { key: "customs", image: "/assets/dance-culture.png" },
];

const Culture = () => {
  const { t } = useTranslation();

  return (
    <div className="culture-page">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="culture-title"
      >
        {t("culture.title")}
      </motion.h1>

      {cultures.map((item, index) => (
        <motion.article
          key={item.key}
          className={`culture-article ${
            index % 2 === 0 ? "normal" : "reverse"
          }`}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <motion.img
            src={item.image}
            alt={t(`culture.items.${item.key}.title`)}
            loading="lazy"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          <div className="article-text">
            <h2>{t(`culture.items.${item.key}.title`)}</h2>
            <p>{t(`culture.items.${item.key}.text`)}</p>
          </div>
        </motion.article>
      ))}

      {/* Inline CSS */}
      <style>{`
        
      `}</style>
    </div>
  );
};

export default Culture;
