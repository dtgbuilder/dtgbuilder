"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import { mainTheme } from "@/component/theme";

export function AppThemeProvider({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
                {children}
        </ThemeProvider>
    );
}