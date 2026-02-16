import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Attire = () => {
  const { t } = useTranslation();
  const sectionsRef = useRef([]);

  const attires = [
    { key: "toghu", image: "/assets/toghu.jpg" },
    { key: "sanja", image: "/assets/sanja.webp" },
    { key: "ndop", image: "/assets/ndop.jpg" },
    { key: "obom", image: "/assets/obom.jpg" },
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
    <div className="attire-page">
      <h1 className="page-title">{t("attirePage.title")}</h1>

      {attires.map((attire, index) => (
        <article
          key={attire.key}
          ref={el => (sectionsRef.current[index] = el)}
          className={`attire-article ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          <div className="attire-image">
            <img
              src={attire.image}
              alt={t(`attirePage.${attire.key}.name`)}
            />
          </div>

          <div className="attire-content">
            <h2>{t(`attirePage.${attire.key}.name`)}</h2>
            <p>{t(`attirePage.${attire.key}.description`)}</p>
          </div>
        </article>
      ))}

      <style>{`
        .attire-page {
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

        .attire-article {
          display: flex;
          align-items: center;
          gap: 3rem;
          margin-bottom: 5rem;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }

        .attire-article.show {
          opacity: 1;
          transform: translateY(0);
        }

        .attire-article.reverse {
          flex-direction: row-reverse;
        }

        .attire-image {
          flex: 1;
          overflow: hidden;
          border-radius: 18px;
        }

        .attire-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .attire-image img:hover {
          transform: scale(1.08);
        }

        .attire-content {
          flex: 1;
        }

        .attire-content h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #1f1f1f;
        }

        .attire-content p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #555;
        }

        @media (max-width: 900px) {
          .attire-article,
          .attire-article.reverse {
            flex-direction: column;
          }

          .attire-image img {
            height: 300px;
          }
        }

        @media (max-width: 500px) {
          .page-title {
            font-size: 2rem;
          }

          .attire-content h2 {
            font-size: 1.6rem;
          }

          .attire-content p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Attire;
