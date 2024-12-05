// hooks/useActiveSection.ts
import { useState, useEffect } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let maxVisibility = 0;
      let mostVisibleSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how much of the section is visible in the viewport
        const visibleHeight =
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visibility = Math.max(0, visibleHeight / windowHeight);

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleSection = section.getAttribute("id") || "";
        }
      });

      // Handle home section when at the top
      if (window.scrollY < 100) {
        mostVisibleSection = "home";
      }

      setActiveSection(mostVisibleSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
};
