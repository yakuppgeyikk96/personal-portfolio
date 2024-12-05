// components/contact/contact-card.tsx
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { ContactCardProps } from "./types";

const ContactCard: React.FC<ContactCardProps> = ({
  icon: IconComponent,
  title,
  value,
  link,
}) => {
  const { t } = useLanguage();

  const content = (
    <div className="flex flex-col items-center p-6 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 hover:border-purple-500/30 transition-all duration-300">
      <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
        <IconComponent className="w-6 h-6 text-purple-400" />
      </div>
      <h3 className="mt-4 font-medium text-gray-200">{t(title)}</h3>
      <p className="mt-2 text-gray-400">{value}</p>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target={link.startsWith("http") ? "_blank" : undefined}
        rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block hover:transform hover:scale-105 transition-transform duration-300"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default ContactCard;
