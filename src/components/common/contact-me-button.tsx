// components/common/contact-me-button.tsx
import React from "react";
import { Mail } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { scrollToSection } from "../../utils/scroll";

const ContactMeButton: React.FC = () => {
  const { t } = useLanguage();

  const handleClick = () => {
    scrollToSection("contact");
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center space-x-2"
    >
      <Mail className="w-5 h-5" />
      <span>{t("common.contactMe")}</span>
    </button>
  );
};

export default ContactMeButton;
