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

interface PortfolioEntry {
    title: string;
    description?: string;
    websiteUrl?: string;
    repositoryUrl?: string;
    date: string;
}

const entries: PortfolioEntry[] = [
    {
        date: "2024 - Present",
        websiteUrl: "https://www.acmology.com",
        title: "ACMOLOGY",
        description: "This project has been my primary focus for the past 2+ years. The link will take you to the marketing site, but the bulk of the work is in the signup and account management services and the web application itself. It implements a microservices architecture using TypeScript and Next.js, and is built on AWS. I would love to talk more about this project, and even give a walkthrough of the application functionality."
    },
    {
        date: "2025 - Present",
        websiteUrl: "https://foxhollowconservacy.org",
        title: "Fox Hollow Conservancy",
        description: "This is a low budget website I built for a local nonprofit. The coolest thing about this website is the Stripe integration for donations. It is a static site deployed on Cloudflare Pages and uses a concise Cloudflare edge function to ensure that Stripe customers are recognized based on their email, rather than creating a new customer for each donation. Besides the domain name registration, it costs nothing to host. It also uses Google Calendar as a rudimentary CMS, which was interesting to set up. We are planning to do another round of work expanding this website very soon."
    },
    {
        date: "2025 - Present",
        websiteUrl: "https://dtgbuilder.com",
        title: "DTG Builder",
        description: "This is the website you are currently on. I started building it when I was considering starting my own local business. I haven't had the time to finish it. It uses Cloudinary for image hosting and optimization and is deployed on Cloudflare Pages. I may take it in a completely different direction in the future, including changing the domain name."
    },
    {
        date: "Jan 2024",
        websiteUrl: "https://dylangreencoding.github.io/tabletop",
        repositoryUrl: "https://github.com/dylangreencoding/tabletop",
        title: "Tabletop",
        description: "This is a simple React application I threw together to commemorate my final project for coding bootcamp (unimaginatively named Capstone, see below). If you visit the site, be sure to check out the interactive grid. The video on this site demonstrates some of the functionality of the original project, and the grid is a stripped down version of the original grid. At the time, I thought monospace text was cool :)."
    },
    {
        date: "Oct 2023",
        repositoryUrl: "https://github.com/dylangreencoding/capstone-client",
        title: "Capstone (front end)",
        description: "This is the frontend of my final project for my coding bootcamp. It is a React application that uses a REST API to communicate with the supporting Express server. It employed a sparse array along with a hashmap to generate the interactive grid. This is an old project, and I would not recommend using this code as a reference for best practices. It was my first time using React, and I was still learning the ropes. Even so, I am still proud of what I accomplished here. It has a brief README."
    },
    {
        date: "Oct 2023",
        repositoryUrl: "https://github.com/dylangreencoding/capstone-server",
        title: "Capstone (back end)",
        description: "This is the backend of my final project for my coding bootcamp. It is a Node.js application that uses Express to provide a REST API for the frontend. It implements JWT authentication for user login and registration, and was built on a NoSQL database called HarperDB. It also uses Socket.IO to provide real-time board-sharing and chat functionality. Unlike most of my other projects which all use TypeScript, this project was built using JavaScript. It was my first time using Node.js and Express, and I learned a lot from this project. Both the frontend and backend of this project were formerly deployed on Heroku, but I took them down to avoid the monthly expense. It has a brief README."
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
                <Typography
                    variant="body1"
                    sx={{
                        px: 3,
                        fontSize: "1.125rem",
                        lineHeight: 1.7
                    }}
                >
                    Hi, my name is Dylan Green. I am a software engineer, web developer, and
                    product builder. Here are a few projects that best represent my work.
                </Typography>
                {entries.map((entry) => (
                    <PortfolioFeature
                        key={ entry.websiteUrl ?? entry.repositoryUrl ?? entry.title }
                        title={ entry.title }
                        websiteUrl={ entry.websiteUrl }
                        repositoryUrl={ entry.repositoryUrl }
                        description={ entry.description }
                        date={ entry.date }
                    />
                ))}
            </Stack>
        </Stack>
    );
}