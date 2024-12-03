import { useLanguage } from "../../context/LanguageContext";
import { MENU_ITEMS } from "./constants";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const { t } = useLanguage();

  return (
    <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
      <div className="relative px-2 pt-2 pb-3 space-y-1">
        {MENU_ITEMS.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center text-gray-400 hover:text-white hover:bg-dark-800 px-3 py-2 rounded-md text-base font-medium space-x-2"
            onClick={() => setIsOpen(false)}
          >
            {item.icon}
            <span>{t(item.name)}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
