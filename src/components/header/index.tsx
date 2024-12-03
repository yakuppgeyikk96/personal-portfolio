import Greeting from "./greeting";
import HeaderActions from "./header-actions";
import SocialLinks from "./social-links";
import ScrollIndicator from "./scroll-indicator";
import PersonalIntro from "./personal-intro";
import GeometricShapes from "./geometric-shapes";

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center" id="home">
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 pt-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-3xl">
            <Greeting />

            <PersonalIntro />

            <HeaderActions />
            <SocialLinks />
          </div>
          <div className="hidden md:block h-[500px]">
            <GeometricShapes />
          </div>
        </div>

        <ScrollIndicator />
      </div>
    </header>
  );
};

export default Header;
