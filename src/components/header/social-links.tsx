import GithubIcon from "../../assets/icons/github-icon";
import LinkedinIcon from "../../assets/icons/linkedin-icon";

export default function SocialLinks() {
  const email = "yakuppgeyik@gmail.com";

  return (
    <div className="flex items-center justify-center md:justify-start space-x-6">
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <GithubIcon />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <LinkedinIcon />
      </a>
      <div className="h-8 w-[1px] bg-gray-700" />
      <a
        href="mailto:email@example.com"
        className="text-gray-400 hover:text-white transition-colors"
      >
        {email}
      </a>
    </div>
  );
}
