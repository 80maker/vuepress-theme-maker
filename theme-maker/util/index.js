export function getCssVar(key) {
  return window.getComputedStyle(document.documentElement).getPropertyValue(key);
}