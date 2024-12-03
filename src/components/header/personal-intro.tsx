import { useLanguage } from "../../context/LanguageContext";

export default function PersonalIntro() {
  const { t } = useLanguage();

  const name = "Yakup Geyik";
  const title = t("header.title");
  const description = t("header.description");

  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center md:text-left">
        {name}
        <span className="block text-xl md:text-2xl font-normal text-gray-400 mt-4">
          {title}
        </span>
      </h1>

      <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed text-center md:text-left">
        {description}
      </p>
    </>
  );
}
