import { useLanguage } from "../../context/LanguageContext";
import { useActiveSection } from "../../hooks/use-active-section";
import { scrollToSection } from "../../utils/scroll";
import { INavItem } from "./types";

interface INavItemProps {
  item: INavItem;
}

const NavItem: React.FC<INavItemProps> = ({ item }) => {
  const { t } = useLanguage();
  const activeSection = useActiveSection();
  const IconComponent = item.icon;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(item.href);
  };

  return (
    <a
      href={`#${item.href}`}
      onClick={handleClick}
      className={`group relative flex flex-col items-center text-gray-400 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 ${
        activeSection === item.href ? "text-white" : ""
      }`}
    >
      <span className="flex items-center space-x-2">
        <IconComponent size={20} /> {/* Icon yerine IconComponent kullandık */}
        <span>{t(item.name)}</span>
      </span>
      <div
        className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 ${
          activeSection === item.href ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  );
};

export default NavItem;
