"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex size-9 items-center justify-center rounded-md border bg-background text-foreground transition-colors
    hover:bg-accent hover:text-accent-foreground"
            aria-label="Toggle color theme"
        >
            <Sun className="hidden size-4 dark:block" aria-hidden="true" />
            <Moon className="size-4 dark:hidden" aria-hidden="true" />
        </button>
    );
}
