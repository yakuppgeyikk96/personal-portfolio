import React from "react";
import NavItem from "./nav-item";
import { Menu, X } from "lucide-react";
import { MENU_ITEMS } from "./constants";
import LanguageSwitcher from "./language-switcher";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed z-50">
      {/* Gradient background with blur effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-800 via-dark-900 to-dark-800 backdrop-blur-md shadow-lg" />

      {/* Main navbar content */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {MENU_ITEMS.map((item) => (
                <NavItem key={item.href} item={item} />
              ))}
            </div>
          </div>

          <div className="hidden md:block absolute right-8">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto flex items-center space-x-2">
            {/* Mobile language switcher */}
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
