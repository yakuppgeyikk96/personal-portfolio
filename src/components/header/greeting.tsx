import { useLanguage } from "../../context/LanguageContext";

export default function Greeting() {
  const { t } = useLanguage();

  return (
    <div className="text-gray-400 text-lg font-medium mb-4 flex items-center space-x-2 justify-center md:justify-start">
      <div className="h-[1px] w-8 bg-gradient-to-r from-indigo-400 to-purple-500" />
      <span>{t("header.greeting")}</span>
    </div>
  );
}
