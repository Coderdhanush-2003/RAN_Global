import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    const revealSections = () => {
      const elements = document.querySelectorAll(".reveal");
      const isMobile = window.innerWidth < 768; // Adjust this value as per your mobile breakpoint

      elements.forEach((el) => {
        const topPosition = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold based on whether the device is mobile
        const threshold = isMobile ? windowHeight - 50 : windowHeight - 100; // Use windowHeight for better visibility

        // Check if the element is in the viewport
        if (topPosition < threshold) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", revealSections);
    revealSections(); // Initial check to reveal elements on mount
    return () => window.removeEventListener("scroll", revealSections);
  }, []);
};

export default useScrollReveal;
