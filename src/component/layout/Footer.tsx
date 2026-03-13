import {FC} from "react";
import {Stack, Typography} from "@mui/material";

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
                &copy; 2026 DTG BUILDER LLC. All rights reserved.
            </Typography>
        </Stack>
    )
}