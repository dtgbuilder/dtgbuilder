"use client";

import { BasicComponent } from "@/component/display/BasicComponent";
import { Stack, Box, Typography } from "@mui/material";

export default function Home() {


    return (
        <Stack gap={ 6 } width="100%">

            <Box
                paddingTop={ 8 }
            >

                <Stack maxWidth="900px" margin="0 auto" gap={ 8 }>

                    <Stack
                        gap={ 4 }
                    >
                        <Typography variant="h1" fontSize="24px" my={ 2 }>
                            stuff
                        </Typography>
                        <BasicComponent
                                dateLabel={ "dateLabel" }
                                title={ "title" }
                                subtitle={ "subtitle" }
                                href={ `/gallery` }
                                rsvpHref={ "/about" }
                            />

                    </Stack>
                </Stack>
            </Box>
        </Stack>
    );
}