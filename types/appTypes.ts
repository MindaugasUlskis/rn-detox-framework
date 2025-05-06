export const navigationLabels = [
  "Home",
  "Webview",
  "Login",
  "Forms",
  "Swipe",
  "Drag",
] as const;
export type NavigationTabLabel = (typeof navigationLabels)[number];
