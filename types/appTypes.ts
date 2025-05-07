export const navigationPages = [
  "home",
  "webview",
  "login",
  "forms",
  "swipe",
  "drag",
] as const;
export type NavigationTabLabel = (typeof navigationPages)[number];
