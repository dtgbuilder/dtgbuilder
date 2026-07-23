import { Stack, Typography } from "@mui/material";
import { Metadata } from "next";
import { PortfolioFeature } from "./PortfolioFeature";

export const metadata: Metadata = {
    title: "Software Portfolio",
    description: "Portfolio of Software and Web Development Projects",
    alternates: {
        canonical: "/software-portfolio"
    }
};

const entries = [
    {
        url: "https://www.acmology.com",
        title: "ACMOLOGY",
        description: "The big one."
    }
];

export default function Page() {
    return (
        <Stack
            sx={{
                width: "100%",
                maxWidth: "800px",
                margin: "0 auto"
            }}
        >
            <Typography
                variant="h1"
                component="h1"
                my={ 8 }
            >
                Software Portfolio
            </Typography>

            <Stack
                sx={{
                    width: "100%",
                    gap: 4
                }}
            >
                {entries.map((entry) => (
                    <PortfolioFeature
                        key={ entry.url }
                        url={ entry.url }
                        title={ entry.title }
                        description={ entry.description }
                    />
                ))}
            </Stack>
        </Stack>
    );
}