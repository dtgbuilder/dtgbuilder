// src/app/layout.tsx
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Stack } from "@mui/material";
import { Header } from "@/component/layout/Header";
import { Footer } from "@/component/layout/Footer";
import { brandColors } from "@/component/color/brandColors";
import { AppThemeProvider } from "@/component/ThemeProvider";
import { siteUrl } from "@/app/robots";


const roboto = Roboto({
    variable: '--font-roboto',
    subsets: [ 'latin' ],
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "DTG BUILDER LLC",
        template: "%s | DTG BUILDER LLC"
    },
    description: "Terrain Specialist"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <body
                className={ `${roboto.variable}` }
                style={{ padding: 0, margin: 0, color: brandColors.offBlack }}
            >
                <AppThemeProvider>
                        <Header />
                        <Stack margin="0 auto" px={ 2 } width="100%">
                            { children }
                        </Stack>
                        <Footer />
                </AppThemeProvider>
            </body>
        </html>
    );
}
