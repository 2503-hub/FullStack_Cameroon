import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/Explore.css";

const Explore = () => {
  const { t } = useTranslation();

  // Define keys and images. Text and Titles will come from the JSON files.
  const destinationKeys = [
    { key: "mountCameroon", image: "/assets/mount.jpg" },
    { key: "gorgesKola", image: "/assets/kola.jpg" },
    { key: "lakeTison", image: "/assets/Tison.jpg" },
    { key: "ekomNkam", image: "/assets/ekom.jpg" },
    { key: "rhumsiki", image: "/assets/rhumsiki.jpg" },
  ];

  return (
    <div className="explore-page">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="explore-title"
      >
        {t("destinationsPage.title")}
      </motion.h1>

      {destinationKeys.map((item, index) => (
        <motion.article
          key={item.key}
          className={`explore-article ${
            index % 2 === 0 ? "normal" : "reverse"
          }`}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <motion.img
            src={item.image}
            alt={t(`destinationsPage.${item.key}.title`)}
            loading="lazy"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          <div className="article-text">
            <h2>{t(`destinationsPage.${item.key}.title`)}</h2>
            {/* Split text by \n to preserve paragraphs from the JSON */}
            {t(`destinationsPage.${item.key}.text`).split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
};
export default Explore;