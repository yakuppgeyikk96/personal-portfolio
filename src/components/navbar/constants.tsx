import { INavItem } from "./types";

import { Home, User, Code, Mail } from "lucide-react";

export const MENU_ITEMS: INavItem[] = [
  { name: "nav.home", icon: Home, href: "home" },
  { name: "nav.about", icon: User, href: "about" },
  { name: "nav.projects", icon: Code, href: "projects" },
  { name: "nav.contact", icon: Mail, href: "contact" },
];
