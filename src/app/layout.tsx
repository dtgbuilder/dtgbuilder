// src/app/layout.tsx
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Stack } from "@mui/material";
import { Header } from "@/component/layout/Header";
import { Footer } from "@/component/layout/Footer";
import { brandColors } from "@/component/color/brandColors";
import { AppThemeProvider } from "@/component/ThemeProvider";


const roboto = Roboto({
    variable: '--font-roboto',
    subsets: [ 'latin' ],
});

export const metadata: Metadata = {
    title: "Fox Hollow Conservancy",
    description: "Conserve. Protect. Restore.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
        <body
            className={ `${roboto.variable}` }
            style={{ padding: 0, margin: 0, color: brandColors.offBlack }}
        >
        <AppThemeProvider>
                <Header />
                <Stack margin="0 auto" px={ 2 }>
                    { children }
                </Stack>
                <Footer />
        </AppThemeProvider>
        </body>
        </html>
    );
}
