import {Typography} from "@mui/material";

export interface RegisteredProps {
    fontSize?: string | number;
    top?: string | number;
    ml?: number | string;
}

export const Registered = ({
                               fontSize = "0.25em",
                               top = "-2em",
                               ml = 0.5,
                           }: RegisteredProps) => {
    return (
        <Typography
            component="span"
            sx={{
                fontSize,
                fontWeight: "inherit",
                position: "relative",
                top,
                ml,
                color: "inherit",
            }}
        >
            &reg;
        </Typography>
    );
};
