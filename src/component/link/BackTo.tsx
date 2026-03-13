import { FC } from "react";
import {Link, Typography} from "@mui/material";
import NextLink from "next/link";
import { brandColors } from "@/component/color/brandColors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const BackTo: FC<{
    href: string;
    text: string;
    fontSize?: number;
    newTab?: boolean;
}> = ({ href, text, fontSize = 16, newTab = false }) => {
    return (
        <Link
            href={href}
            component={NextLink}
            target={newTab ? "_blank" : "_self"}
            rel={newTab ? "noopener noreferrer" : undefined}
            sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                fontFamily: "Roboto, monospace",
                fontSize: fontSize,
                lineHeight: 1.25,
                color: brandColors.dark,
                textDecoration: "underline",
                textDecorationColor: brandColors.dark,
                "&:hover": {
                    color: brandColors.medium,
                    textDecorationColor: brandColors.medium
                }
            }}
        >
            <ArrowBackIcon
                sx={{
                    // fontSize: "1.1em",
                    flex: "0 0 auto"
                }}
            />
            <Typography
                fontSize="inherit"
            >
                {text}
            </Typography>
        </Link>
    );
};
