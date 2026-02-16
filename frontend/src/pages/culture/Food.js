import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Food = () => {
  const { t } = useTranslation();
  const sectionsRef = useRef([]);

  const foods = [
    { key: "ekwang", image: "/assets/ekwang.jpg" },
    { key: "eru", image: "/assets/eru.jpg" },
    { key: "mbongo", image: "/assets/mbongo.jpg" },
    { key: "kondre", image: "/assets/kondre.jpg" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="food-page">
      <h1 className="page-title">{t("foodPage.title")}</h1>

      {foods.map((food, index) => (
        <article
          key={food.key}
          ref={el => (sectionsRef.current[index] = el)}
          className={`food-article ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          <div className="food-image">
            <img src={food.image} alt={t(`foodPage.${food.key}.name`)} />
          </div>

          <div className="food-content">
            <h2>{t(`foodPage.${food.key}.name`)}</h2>
            <p>{t(`foodPage.${food.key}.description`)}</p>
          </div>
        </article>
      ))}

      <style>{`
        /* CSS unchanged – same as your version */
        .food-page {
          padding: 4rem 6%;
          background: #fafafa;
          min-height: 100vh;
        }
        .page-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 4rem;
          color: #2c2c2c;
        }
        .food-article {
          display: flex;
          align-items: center;
          gap: 3rem;
          margin-bottom: 5rem;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }
        .food-article.show {
          opacity: 1;
          transform: translateY(0);
        }
        .food-article.reverse {
          flex-direction: row-reverse;
        }
        .food-image {
          flex: 1;
          overflow: hidden;
          border-radius: 18px;
        }
        .food-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .food-image img:hover {
          transform: scale(1.08);
        }
        .food-content {
          flex: 1;
        }
        .food-content h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .food-content p {
          line-height: 1.8;
        }
        @media (max-width: 900px) {
          .food-article {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Food;
