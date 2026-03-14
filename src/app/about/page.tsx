import {
    Stack,
    Typography
} from "@mui/material";
import { InlineLink } from "@/component/link/InlineLink";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Learn about DTG Builder LLC and the services offered in Western North Carolina.",
    alternates: {
        canonical: "/about"
    }
};

export default function About() {
    return (
        <Stack
            sx={ {
                width: "100%",
                maxWidth: "720px",
                margin: "0 auto"
            } }
        >
            <Typography
                variant="h1"
                my={ 8 }
            >
                About
            </Typography>
            <Stack
                gap={ 3 }
            >
                <Stack
                    gap={ 1 }
                >
                    <Typography>
                        Most of my projects use natural stone and wood to create visually striking outdoor spaces built in places where machines cannot reach.
                    </Typography>
                    <Typography>
                        My approach is simple: work with the land, keep the footprint light, and build things that look like they belong.
                    </Typography>
                    <Typography>
                        I am especially interested in terrain challenges, access problems, drainage solutions, and low-impact landscape installs where water, stone, slope, and native vegetation need to work together.
                    </Typography>
                </Stack>
                <Stack
                    gap={ 1 }
                >
                    <Typography>
                        Check out the <InlineLink href="/gallery" text="gallery" /> to see recent work.
                    </Typography>
                    <Typography>
                        Dylan Green
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}
