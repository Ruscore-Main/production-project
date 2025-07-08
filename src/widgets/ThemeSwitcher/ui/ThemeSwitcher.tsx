import { useTheme } from "app/providers/ThemeProvider";
import React from "react";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
    const { toggleTheme } = useTheme();

    return (
        <button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            TOGGLE
        </button>
    );
};
