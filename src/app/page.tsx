// src/app/page.tsx
import { Stack, Typography } from "@mui/material";
import { BasicPanel } from "@/component/display/BasicPanel";

export default function Home() {
    return (
        <Stack
            sx={ {
                width: "100%",
                maxWidth: "900px",
                margin: "0 auto"
            } }
        >
            <Typography
                variant="h1"
                fontSize={ { sm: 96, xs: 72 } }
                my={ 8 }
            >
                DTG BUILDER
            </Typography>
            <Stack
                gap={ 8 }
            >
                <BasicPanel
                    eyebrow="Carpentry & Landscaping"
                    title="Terrain Specialist"
                    body={
                        <Stack gap={ 2 }>
                            <Typography>
                                Serving Western North Carolina, Cullowhee, Cashiers, Highlands, Sylva, Balsam, and surrounding areas.
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
            
        </Stack>
    );
}