import GithubIcon from "../../assets/icons/github-icon";
import LinkedinIcon from "../../assets/icons/linkedin-icon";

export default function SocialLinks() {
  const email = "yakuppgeyik@gmail.com";
  const linkedinLink = "https://www.linkedin.com/in/yakupgeyik";
  const githubLink = "https://github.com/yakuppgeyikk96";

  return (
    <div className="flex items-center justify-center md:justify-start space-x-6">
      <a
        href={githubLink}
        target="_blank"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <GithubIcon />
      </a>
      <a
        href={linkedinLink}
        target="_blank"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <LinkedinIcon />
      </a>
      <div className="h-8 w-[1px] bg-gray-700" />
      <a
        href="mailto:yakuppgeyik@gmail.com"
        className="text-gray-400 hover:text-white transition-colors"
      >
        {email}
      </a>
    </div>
  );
}
