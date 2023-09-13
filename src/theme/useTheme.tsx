import { useContext } from "react";
import { STORAGE_KEY_THEME, Theme, ThemeContext } from "./ThemeContext";

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme(theme: Theme) {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(STORAGE_KEY_THEME, newTheme);
    }

    return { theme, toggleTheme };
};
