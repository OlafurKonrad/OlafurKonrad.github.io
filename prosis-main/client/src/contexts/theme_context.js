import { createContext } from "react";
import { Theme } from "../styles/theme.js";

export const ThemeContext = createContext({
    theme: Theme.dark,
    toggleTheme: () => {},
});
