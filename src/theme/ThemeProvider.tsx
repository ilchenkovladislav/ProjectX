import { ReactNode, useState } from "react";
import { STORAGE_KEY_THEME, Theme, ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
    children: ReactNode;
}

const defaultTheme = localStorage.getItem(STORAGE_KEY_THEME) as Theme || Theme.LIGHT;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    );
};
