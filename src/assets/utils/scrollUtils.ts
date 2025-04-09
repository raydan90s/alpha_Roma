export const scrollToHashOnLoad = () => {
  if (window.location.hash) {
    const id = window.location.hash.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

export const scrollToHash = (hash: string) => {
  const elementId = hash;
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const handleScrollToTop = () => {
  window.scrollTo(0, 0); // Esto llevará el scroll a la parte superior de la página
};