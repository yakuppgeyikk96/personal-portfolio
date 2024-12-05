import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { MENU_ITEMS } from "./constants";
import { scrollToSection } from "../../utils/scroll";
import { useActiveSection } from "../../hooks/use-active-section";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const { t } = useLanguage();
  const activeSection = useActiveSection();

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
      <div className="relative px-2 pt-2 pb-3 space-y-1 bg-dark-800/95 backdrop-blur-sm">
        {MENU_ITEMS.map((item) => {
          const IconComponent = item.icon;
          return (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={handleClick(item.href)}
              className={`flex items-center text-gray-400 hover:text-white hover:bg-dark-800 px-3 py-2 rounded-md text-base font-medium space-x-2 ${
                activeSection === item.href ? "text-white bg-dark-800" : ""
              }`}
            >
              <IconComponent size={20} />
              <span>{t(item.name)}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
