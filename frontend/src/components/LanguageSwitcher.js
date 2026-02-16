import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const isActive = (lang) => i18n.language.startsWith(lang);

  return (
    <div className="language-switcher">
      <button 
        className={isActive("en") ? "active" : ""} 
        onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button 
      className={isActive("fr") ? "active" : ""} 
      onClick={() => i18n.changeLanguage("fr")}> FR</button>
    </div>
  );
}

export default LanguageSwitcher;