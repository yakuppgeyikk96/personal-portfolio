import { useLanguage } from "../../context/LanguageContext";
import { INavItem } from "./types";

interface INavItemProps {
  item: INavItem;
}

export default function NavItem({ item }: INavItemProps) {
  const { t } = useLanguage();

  return (
    <a
      href={item.href}
      className="group relative flex flex-col items-center text-gray-400 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300"
    >
      <span className="flex items-center space-x-2">
        {item.icon}
        <span>{t(item.name)}</span>
      </span>
      <div className="absolute bottom-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300" />
    </a>
  );
}
