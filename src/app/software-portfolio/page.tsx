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
        url: "www.acmology.com",
        title: "Acmology",
        description: "A web application for managing and tracking academic research papers."
    }
];

export default function Page() {
    return (
        <Stack
            sx={ {
                width: "100%",
                maxWidth: "700px",
                margin: "0 auto"
            } }
        >
            <Typography
                variant="h1"
                component="h1"
                my={ 8 }
            >
                Software Portfolio
            </Typography>

            <Stack sx={ { width: "100%", gap: 8 } }>
                {entries.map((entry, index) => (
                    <PortfolioFeature
                        key={ index }
                        url={ entry.url }
                        title={ entry.title }
                        description={ entry.description }
                    />
                ))}
            </Stack>
        </Stack>
    );
}
