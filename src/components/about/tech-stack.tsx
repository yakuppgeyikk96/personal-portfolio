import TechItem from "./tech-item";
import ReactIcon from "../../assets/icons/react-icon";
import JavaScriptIcon from "../../assets/icons/javascript-icon";
import TypescriptIcon from "../../assets/icons/typescript-icon";
import NextjsIcon from "../../assets/icons/nextjs-icon";
import ReduxIcon from "../../assets/icons/redux-icon";
import Html5Icon from "../../assets/icons/html5-icon";
import Css3Icon from "../../assets/icons/css3-icon";
import NodejsIcon from "../../assets/icons/nodejs-icon";
import SassIcon from "../../assets/icons/sass-icon";
import TailwindIcon from "../../assets/icons/tailwind-icon";
import GitIcon from "../../assets/icons/git-icon";
import WebpackIcon from "../../assets/icons/webpack-icon";

const TechStack = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <TechItem icon={JavaScriptIcon} name="JavaScript" />
        <TechItem icon={TypescriptIcon} name="TypeScript" />
        <TechItem icon={ReactIcon} name="React" />
        <TechItem icon={NextjsIcon} name="Next.js" />
        <TechItem icon={ReduxIcon} name="Redux" />
        <TechItem icon={GitIcon} name="Git" />
        <TechItem icon={Html5Icon} name="HTML" />
        <TechItem icon={Css3Icon} name="CSS" />
        <TechItem icon={TailwindIcon} name="Tailwind" />
        <TechItem icon={SassIcon} name="SASS" />
        <TechItem icon={NodejsIcon} name="Nodejs" />
        <TechItem icon={WebpackIcon} name="Webpack" />
      </div>
    </div>
  );
};

export default TechStack;
