import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/History.css"

const figures = [
  {
    key: "eto",
    image:"/assets/sam.jpg",
    text: "Samuel Eto'o is a retired Cameroonian footballer widely regarded as one of the greatest African..."
  },
  {
    key: "ahidjo",
    image:"/assets/ahidjo.webp",   
  },
  {
    key: "fruNdi",
    image:"/assets/fru.webp",
      
  },
  {
    key: "umNyobe",
    image:"/assets/um.webp",
  },
  {
    key: "mangaBell",
    image:"/assets/manga.jpg",
  },
];

const History = () => {
  const { t } = useTranslation();

  return (
    <div className="history-page">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="history-title"
      >
        {t("history.title")}
      </motion.h1>

      {figures.map((figure, index) => (
        <motion.article
          key={figure.key}
          className={`history-article ${
            index % 2 === 0 ? "normal" : "reverse"
          }`}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <img
            src={figure.image}
            alt={t(`history.figures.${figure.key}.name`)}
          />

          <div className="article-text">
            <h2>{t(`history.figures.${figure.key}.name`)}</h2>
            <p>{t(`history.figures.${figure.key}.text`)}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default History;