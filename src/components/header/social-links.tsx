import { Github, Linkedin } from "lucide-react";

export default function SocialLinks() {
  const email = "yakuppgeyik@gmail.com";

  return (
    <div className="flex items-center justify-center md:justify-start space-x-6">
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Github size={24} />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Linkedin size={24} />
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
