import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  image?: string;
  githubLink?: string;
  liveLink?: string;
  status: "completed" | "in-progress";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techs,
  image,
  githubLink,
  liveLink,
  status,
}) => {
  const { t } = useLanguage();

  return (
    <div className="group relative bg-dark-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-dark-700/50 hover:border-purple-500/30 transition-all duration-500">
      {/* Üst gradient efekti */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Proje görseli */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Link overlay */}
        <div className="absolute inset-0 bg-dark-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-dark-800/80 text-white hover:bg-purple-500/80 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-dark-800/80 text-white hover:bg-purple-500/80 transition-colors duration-300"
            >
              <ExternalLink size={24} />
            </a>
          )}
        </div>
      </div>

      {/* İçerik */}
      <div className="p-6">
        {/* Title ve Status yan yana */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              status === "completed"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
            }`}
          >
            {status === "completed"
              ? t("projects.status.completed")
              : t("projects.status.inProgress")}
          </span>
        </div>

        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>

        {/* Teknolojiler */}
        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-dark-700/50 text-gray-300 border border-dark-600/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
