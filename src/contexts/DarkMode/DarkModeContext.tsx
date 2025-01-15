import { createContext, useContext, useState } from "react";
import { TDarkModeContext, TContextTheme } from "./types";

const DarkModeContext = createContext<TDarkModeContext>({
  theme: "light",
  toggleTheme: () => undefined,
});

const DarkModeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<TContextTheme>("light");

  const toggleTheme = () =>
    setTheme((prev) => {
      if (prev === "light") return "dark";
      return "light";
    });
  return (
    <DarkModeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;

export const useDarkModeContext = () => {
  const { theme, toggleTheme } = useContext(DarkModeContext);
  return { theme, toggleTheme };
};
