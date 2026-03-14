import {FC} from "react";
import {Stack, Typography} from "@mui/material";
import { InlineLink } from "../link/InlineLink";

export const Footer : FC = () => {
    return (
        <Stack
            px={ 2 }
            pb={ 2 }
            mt={ 40 }
            component="footer"
            alignItems="center"
        >
            <Typography
                fontSize="10px"
            >
                I am also a web & software engineer. See my <InlineLink newTab fontSize={ 10 } href="https://github.com/dtgbuilder" text="GitHub" /> for more info.
            </Typography>
            <Typography
                fontSize="10px"
            >
                &copy; 2026 DTG BUILDER LLC. All rights reserved.
            </Typography>
        </Stack>
    )
}