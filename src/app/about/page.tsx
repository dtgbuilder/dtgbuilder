import {
    Stack,
    Typography
} from "@mui/material";
import { InlineLink } from "@/component/link/InlineLink";

export default function About() {
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
                fontSize="24px"
                my={ 4 }
            >
                About
            </Typography>
            <Stack
                gap={ 3 }
            >
                <Stack
                    alignItems="center"
                    gap={ 1 }
                >
                    <Typography
                        variant="h5"
                        align="center"
                    >
                        DTG BUILDER LLC
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                    >
                        Terrain Specialist
                    </Typography>
                </Stack>
                <Stack
                    gap={ 1 }
                >
                    <Typography>
                        I specialize in outdoor work that other crews avoid: steep ground, odd geometry, difficult access, and walk-in only sites.
                    </Typography>
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
