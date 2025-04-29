
export const useSmoothScroll = () => {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Prevent default anchor behavior
      window.history.pushState({}, "", `#${elementId}`);
      
      // Smooth scroll to the element
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return { scrollToSection };
};
