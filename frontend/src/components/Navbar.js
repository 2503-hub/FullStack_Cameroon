import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, ChevronDown } from "lucide-react"; // Added Lucide Icons
import LanguageSwitcher from "../components/LanguageSwitcher";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cultureDropdown, setCultureDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setCultureDropdown(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""} ${isHomePage ? "is-home" : "is-other"}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>CameroonWeb</Link>
        </div>

        {/* Mobile menu uses 'open' class to slide in */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>{t("nav.home")}</Link></li>
          <li><Link to="/history" onClick={closeMenu}>{t("nav.history")}</Link></li>
          
          <li 
          className={`dropdown ${cultureDropdown ? "active" : ""}`}
          onMouseEnter={() => window.innerWidth > 768 && setCultureDropdown(true)}
          onMouseLeave={() => window.innerWidth > 768 && setCultureDropdown(false)}>
            
             <div className="dropdown-wrapper">
              <Link to="/culture" className="dropdown-title" onClick={closeMenu}>
              {t("nav.culture")}
              </Link>
              
               <span 
               className="arrow-wrapper" 
               onClick={(e) => {
                 e.preventDefault();
                 setCultureDropdown(!cultureDropdown);
                }}
>
      <ChevronDown size={16} className={`arrow ${cultureDropdown ? "rotated" : ""}`} />
    </span>
  </div>

  <ul className={`dropdown-menu ${cultureDropdown ? "show" : ""}`}>
    <li><Link to="/culture/attire" onClick={closeMenu}>{t("nav.attire")}</Link></li>
    <li><Link to="/culture/food" onClick={closeMenu}>{t("nav.food")}</Link></li>
    <li><Link to="/culture/language" onClick={closeMenu}>{t("nav.language")}</Link></li>
    <li><Link to="/culture/dances" onClick={closeMenu}>{t("nav.dances")}</Link></li>
  </ul>
</li>

          <li><Link to="/explore" onClick={closeMenu}>{t("nav.explore")}</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>{t("nav.contact")}</Link></li>
        </ul>

        <div className="nav-actions">
          <LanguageSwitcher />
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;