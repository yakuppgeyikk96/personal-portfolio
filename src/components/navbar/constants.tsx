import { INavItem } from "./types";

import { Home, User, Code, Mail } from "lucide-react";

export const MENU_ITEMS: INavItem[] = [
  { name: "nav.home", icon: <Home size={20} />, href: "#home" },
  { name: "nav.about", icon: <User size={20} />, href: "#about" },
  { name: "nav.projects", icon: <Code size={20} />, href: "#projects" },
  { name: "nav.contact", icon: <Mail size={20} />, href: "#contact" },
];
