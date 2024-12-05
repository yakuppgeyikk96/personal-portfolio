export interface IProject {
  id: string;
  title: string;
  description: string;
  techs: string[];
  image?: string;
  githubLink?: string;
  liveLink?: string;
  status: "completed" | "in-progress";
}
