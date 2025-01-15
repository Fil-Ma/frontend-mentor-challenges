export type TContextTheme = "dark" | "light";

export type TDarkModeContext = {
  theme: TContextTheme;
  toggleTheme: VoidFunction;
};
