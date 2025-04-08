// src/utils/scrollUtils.ts
export const smoothScrollToElement = (elementId: string | null): void => {
  if (!elementId) return;

  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const scrollToHashOnLoad = (): void => {
  const { hash } = window.location;
  if (hash) {
    const id = hash.replace("#", "");
    setTimeout(() => {
      smoothScrollToElement(id);
    }, 100);
  }
};
