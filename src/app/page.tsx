// src/app/page.tsx
import { Stack, Typography } from "@mui/material";
import { BasicPanel } from "@/component/display/BasicPanel";

export default function Home() {
    return (
        <Stack
            sx={ {
                width: "100%",
                maxWidth: "900px",
                margin: "0 auto",
                py: 6
            } }
            gap={ 3 }
        >
            <BasicPanel
                eyebrow="DTG BUILDER LLC"
                title="Terrain Specialist"
                body={
                    <Stack gap={ 2 }>
                        <Typography>
                            I specialize in outdoor work that other crews avoid:
                            steep ground, odd geometry, difficult access, and
                            walk-in only sites.
                        </Typography>
                        <Typography>
                            Most of my projects use natural stone and wood to
                            create visually striking outdoor spaces built in
                            places where machines cannot reach.
                        </Typography>
                    </Stack>
                }
                actions={ [
                    {
                        href: "/about",
                        text: "About"
                    },
                    {
                        href: "/gallery",
                        text: "Gallery"
                    }
                ] }
            />
        </Stack>
    );
}