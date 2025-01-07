"use client";

export function useScroll() {
  const scrollToSection = (e, id) => {
    e?.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return {
    scrollToSection,
    scrollToTop,
  };
}
