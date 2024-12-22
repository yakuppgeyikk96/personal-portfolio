import { useLanguage } from "../../context/LanguageContext";
import ProjectCard from "./project-card";
import { IProject } from "./types";

const Projects = () => {
  const { t } = useLanguage();

  const projects: IProject[] = [
    {
      id: "portfolioProject",
      title: "Portfolio Project",
      description:
        "Kişisel portföy web sitesi projesi. Kendimi tanıtmak ve projelerimi sergilemek için oluşturduğum bir web sitesi.",
      techs: ["React", "TypeScript", "Tailwind CSS"],
      image: "/images/portfolio-project.png",
      githubLink: "https://github.com/yakuppgeyikk96/personal-portfolio",
      status: "completed",
    },
    {
      id: "adminDashboard",
      title: "Admin Dashboard",
      description:
        "Genel kullanım için bir template olarak tasarlanmış, modern ve kullanıcı dostu bir yönetici paneli.",
      techs: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zod",
        "React Hook Form",
      ],
      image: "/images/admin-dashboard-project.png",
      githubLink: "https://github.com/yakuppgeyikk96/admin-dashboard",
      liveLink: "https://admin-dashboard-green-alpha-58.vercel.app/",
      status: "in-progress",
    },
    {
      id: "cygnusWallet",
      title: "Cygnus Wallet",
      description:
        "Superteam TalentOlympics yarışmasında geliştirilen, Solana blockchain tabanlı basit bir kripto cüzdan uygulaması.",
      techs: ["Next.js", "TypeScript", "Shadcn UI", "Tailwind CSS", "Solana"],
      image: "/images/cygnus-project.png",
      githubLink: "https://github.com/yakuppgeyikk96/wallet-ui",
      liveLink: "https://cygnus-wallet.vercel.app/signup",
      status: "in-progress",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="projects">
      {/* Gradient efektleri */}
      <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-gradient-to-r from-purple-500/10 to-transparent" />
      <div className="absolute -right-1/4 top-0 w-1/2 h-full bg-gradient-to-l from-purple-500/10 to-transparent" />

      <div className="container mx-auto px-4 relative">
        {/* Section başlığı */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-gray-400 text-lg">{t("projects.description")}</p>
        </div>

        {/* Proje grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              description={t(`projects.${project.id}.description`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
