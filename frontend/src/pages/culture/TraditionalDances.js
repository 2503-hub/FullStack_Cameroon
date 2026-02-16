import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Dances = () => {
  const { t } = useTranslation();
  const sectionsRef = useRef([]);

  const dances = [
    { key: "bikutsi", image: "/assets/bikutsi.jpg" },
    { key: "ambass", image: "/assets/ambass.jpg" },
    { key: "ben", image: "/assets/ben.jpg" },
    { key: "assiko", image: "/assets/assiko.jpg" },
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
    <div className="dance-page">
      <h1 className="page-title">{t("dancePage.title")}</h1>

      {dances.map((dance, index) => (
        <article
          key={dance.key}
          ref={el => (sectionsRef.current[index] = el)}
          className={`dance-article ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          <div className="dance-image">
            <img src={dance.image} alt={t(`dancePage.${dance.key}.name`)} />
          </div>

          <div className="dance-content">
            <h2>{t(`dancePage.${dance.key}.name`)}</h2>
            <p>{t(`dancePage.${dance.key}.description`)}</p>
          </div>
        </article>
      ))}

      <style>{`
        .dance-page {
          padding: 4rem 6%;
          background: #f8f9fa;
          min-height: 100vh;
        }

        .page-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 4rem;
          color: #2a2a2a;
        }

        .dance-article {
          display: flex;
          align-items: center;
          gap: 3rem;
          margin-bottom: 5rem;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }

        .dance-article.show {
          opacity: 1;
          transform: translateY(0);
        }

        .dance-article.reverse {
          flex-direction: row-reverse;
        }

        .dance-image {
          flex: 1;
          overflow: hidden;
          border-radius: 18px;
        }

        .dance-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .dance-image img:hover {
          transform: scale(1.08);
        }

        .dance-content {
          flex: 1;
        }

        .dance-content h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #1f1f1f;
        }

        .dance-content p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #555;
        }

        @media (max-width: 900px) {
          .dance-article,
          .dance-article.reverse {
            flex-direction: column;
          }

          .dance-image img {
            height: 300px;
          }
        }

        @media (max-width: 500px) {
          .page-title {
            font-size: 2rem;
          }

          .dance-content h2 {
            font-size: 1.6rem;
          }

          .dance-content p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Dances;
