
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t } = useTranslation();

  // Example data for historical figures (moved inside component so `t` is available)
  const historyFiguresData = t("home.history.figures", {
  returnObjects: true,
});

const historicalFigures = historyFiguresData.map((figure, index) => ({
  id: index + 1,
  name: figure.name,
  description: figure.description,
  img: [
    "/assets/samuel.jpg",
    "/assets/Ahidjo.webp",
    "/assets/fru.webp",
    "/assets/um.webp",
    "/assets/manga.jpg",
  ][index],
}));

  // diverse cultural aspects of Cameroon
  const cultureItems = [
    {
      id: 1,
      title: t("home.culture.items.0.title"),
      img: "/assets/dance-culture.png",
      description: t("home.culture.items.0.description"),
    },
    {
      id: 2,
      title: t("home.culture.items.1.title"),
      img: "/assets/food.jpg",
      description: t("home.culture.items.1.description"),
    },
    {
      id: 3,
      title: t("home.culture.items.2.title"),
      img: "/assets/flag.jpg",
      description: t("home.culture.items.2.description"),
    },
    {
      id: 4,
      title: t("home.culture.items.3.title"),
      img: "/assets/ngondo.jpg",
      description: t("home.culture.items.3.description"),
    },
  ];

  // Variety of different landscapes and tourist attractions
  const exploreItems = [
    {
      id: 1,
      title: t("home.explore.items.0.title"),
      img: "/assets/kola.jpg",
      description: t("home.explore.items.0.description"),
    },
    {
      id: 2,
      title: t("home.explore.items.1.title"),
      img: "/assets/Tison.jpg",
      description: t("home.explore.items.1.description"),
    },
    {
      id: 3,
      title: t("home.explore.items.2.title"),
      img: "/assets/rhumsiki.jpg",
      description: t("home.explore.items.2.description"),
    },
    {
      id: 4,
      title: t("home.explore.items.3.title"),
      img: "/assets/mount.jpg",
      description: t("home.explore.items.3.description"),
    },
  ];

  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <div className="hero-container">
        <video className="hero-video" autoPlay loop muted>
          <source src="/video/vid_a.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
           {t("home.hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {t("home.hero.subtitle")}
          </motion.p>
        </div>
      </div>

      {/* HISTORY SECTION */}
      <motion.section
        className="section history-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>{t("home.history.title")}</h2>
        <p>{t("home.history.subtitle")}</p>
        <div className="cards-container">
          {historicalFigures.map((figure) => (
            <motion.div
              key={figure.id}
              className="history-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: figure.id * 0.2 }}
            >
              <img src={figure.img} alt={figure.name} className="card-img" />
              <div className="card-content">
                <h3>{figure.name}</h3>
                <p>
                  {figure.description}{" "}
                  <Link to="/history" className="read-more">
                   {t("home.history.readMore")}
                  </Link>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CULTURE SECTION */}
     <motion.section
      className="section culture-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>{t("home.culture.title")}</h2>
      <p>{t("home.culture.subtitle")}</p>
      <div className="cards-container">
        {cultureItems.map((item) => (
          <motion.div
            key={item.id}
            className="culture-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: item.id * 0.2 }}
          >
            <img src={item.img} alt={item.title} className="card-img" />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>
                {item.description}{" "}
                <Link to="/culture" className="read-more">
                  {t("home.culture.readMore")}
                </Link>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>

      {/* EXPLORE SECTION */}
     <motion.section
  className="section explore-section" // Changed this
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <h2>{t("home.explore.title")}</h2>
  <p className="explore-subtitle">{t("home.explore.subtitle")}</p>
  <div className="cards-container">
    {exploreItems.map((item) => (
      <motion.div
        key={item.id}
        className="explore-card" // Unique class for explore cards
        /* ... animations ... */
      >
        <img src={item.img} alt={item.title} className="card-img" />
        <div className="card-content">
          <h3>{item.title}</h3>
          <p>
            {item.description}{" "}
            <Link to="/explore" className="explore-read-more">
              {t("home.explore.readMore")}
            </Link>
          </p>
        </div>
      </motion.div>
        ))}
      </div>
    </motion.section>

        {/* Newsletter Section */}
        <motion.section
        className="section newsletter-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
>
  <div className="newsletter-container">
    <h2>{t("home.newsletter.title")}</h2>
    <p>{t("home.newsletter.subtitle")}</p>

    <form
      className="newsletter-form"
      onSubmit={async (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();

        if (!email) {
          alert("Please enter your email");
          return;
        }

        try {
          const response = await fetch("http://localhost:4000/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          });

          const data = await response.json();

          if (response.ok) {
            alert(data.message); // "Subscribed successfully!"
            e.target.email.value = "";
          } else {
            alert(data.message); // "Email already subscribed"
          }
        } catch (err) {
          console.error("Error subscribing:", err);
          alert("Server error. Please try again later.");
        }
      }}
    >
      <input
        type="email"
        name="email"
        placeholder={t("home.newsletter.placeholder")}
        required
      />
      <button type="submit">{t("home.newsletter.button")}</button>
    </form>
  </div>
</motion.section>

    </div>
  );
};

export default Home;