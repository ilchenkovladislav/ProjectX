import { Suspense } from "react";
import "./styles/index.scss";
import { Routes, Route, Link } from "react-router-dom";
import { MainAsync as Main } from "./pages/Main/Main.async";
import { AboutAsync as About } from "./pages/About/About.async";
import { useTheme } from "./theme/useTheme";
import classNames from "classnames";

export function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", theme)}>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <button onClick={() => toggleTheme(theme)}>Сменить тему</button>
            <Suspense fallback={"loading..."}>
                <Routes>
                    <Route element={<Main />} path="/" />
                    <Route element={<About />} path="about" />
                </Routes>
            </Suspense>
        </div>
    );
}
