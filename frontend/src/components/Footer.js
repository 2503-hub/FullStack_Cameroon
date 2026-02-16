
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        backgroundImage: "url('/assets/footer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="footer-overlay">
        <div className="footer-content">
          {/* About */}
          <div className="footer-section">
            <h3>Cameroon Heritage</h3>
            <p>
              Discover Cameroon's rich history, cultures, and cities through
              stories, visuals, and experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <h3>Explore</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/culture">Culture</Link></li>
              <li><Link to="/explore">Explore</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

         {/* Contact */}
        <div className="footer-section">
        <h3>Contact</h3>
         <ul className="contact-list">
         <li>
          <a href="mailto:leloundoumariette@gmail.com">
            <i className="fas fa-envelope"></i> Email</a>
             </li>
              <li>
                 <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                 <i className="fab fa-linkedin"></i> LinkedIn</a>
                 </li>
                 <li>
                  <a href="tel:+237699999999">
                     <i className="fas fa-phone"></i> +237 699 999 999
                     </a>
                     </li>
                     </ul>
                     </div>
                     </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Cameroon Heritage. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
