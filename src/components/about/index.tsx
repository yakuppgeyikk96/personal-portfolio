import { Briefcase, Code2, Coffee, GraduationCap } from "lucide-react";
import AboutCard from "./about-card";
import TechStack from "./tech-stack";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const aboutCards = [
    {
      icon: Code2,
      title: t("about.cards.developer.title"),
      description: t("about.cards.developer.description"),
    },
    {
      icon: Briefcase,
      title: t("about.cards.experience.title"),
      description: t("about.cards.experience.description"),
    },
    {
      icon: GraduationCap,
      title: t("about.cards.learning.title"),
      description: t("about.cards.learning.description"),
    },
    {
      icon: Coffee,
      title: t("about.cards.problemSolving.title"),
      description: t("about.cards.problemSolving.description"),
    },
  ];

  return (
    <section className="py-20 relative" id="about">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/0 via-dark-800/50 to-dark-800/0" />

      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("about.title")}
          </h2>
          <p className="text-gray-400 text-lg">{t("about.description")}</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {aboutCards.map((card, index) => (
            <AboutCard key={index} {...card} />
          ))}
        </div>

        {/* Tech stacks */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-white mb-8 text-center">
            {t("about.techStack.title")}
          </h3>
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default About;
