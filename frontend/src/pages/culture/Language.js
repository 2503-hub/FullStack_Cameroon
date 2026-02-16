import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Languages = () => {
  const { t } = useTranslation();
  const sectionsRef = useRef([]);

  const languages = [
    { key: "ewondo", image: "/assets/ewondo.png" },
    { key: "duala", image: "/assets/duala.png" },
    { key: "fulfulde", image: "/assets/fulde.png" },
    { key: "bassa", image: "/assets/bassa.png" },
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
    <div className="language-page">
      <h1 className="page-title">{t("languagePage.title")}</h1>

      {languages.map((lang, index) => (
        <article
          key={lang.key}
          ref={el => (sectionsRef.current[index] = el)}
          className={`language-article ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          <div className="language-image">
            <img
              src={lang.image}
              alt={t(`languagePage.${lang.key}.name`)}
            />
          </div>

          <div className="language-content">
            <h2>{t(`languagePage.${lang.key}.name`)}</h2>
            <p>{t(`languagePage.${lang.key}.description`)}</p>
          </div>
        </article>
      ))}

      <style>{`
        .language-page {
          padding: 4rem 6%;
          background: #f9fafb;
          min-height: 100vh;
        }

        .page-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 4rem;
          color: #2a2a2a;
        }

        .language-article {
          display: flex;
          align-items: center;
          gap: 3rem;
          margin-bottom: 5rem;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }

        .language-article.show {
          opacity: 1;
          transform: translateY(0);
        }

        .language-article.reverse {
          flex-direction: row-reverse;
        }

        .language-image {
          flex: 1;
          overflow: hidden;
          border-radius: 18px;
        }

        .language-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .language-image img:hover {
          transform: scale(1.08);
        }

        .language-content {
          flex: 1;
        }

        .language-content h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #1f1f1f;
        }

        .language-content p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #555;
        }

        @media (max-width: 900px) {
          .language-article,
          .language-article.reverse {
            flex-direction: column;
          }

          .language-image img {
            height: 300px;
          }
        }

        @media (max-width: 500px) {
          .page-title {
            font-size: 2rem;
          }

          .language-content h2 {
            font-size: 1.6rem;
          }

          .language-content p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Languages;
