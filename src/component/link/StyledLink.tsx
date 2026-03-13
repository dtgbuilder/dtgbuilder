"use client";

import { FC } from "react";
import {
    Link
} from "@mui/material";
import NextLink from "next/link";
import { brandColors } from "@/component/color/brandColors";

export const StyledLink : FC<{
    href: string;
    text: string;
    fontSize?: number;
    newTab?: boolean;
    invertColors?: boolean;
}> = ({
    href,
    text,
    fontSize=20,
    newTab=false,
    invertColors
}) => {

    return (
        <Link
            href={ href }
            component={ NextLink }
            target={ newTab ? "_blank" : "_self" }
            rel={newTab ? "noopener noreferrer" : undefined}
            sx={ {
                fontFamily: "Roboto, monospace",
                fontSize,
                color: invertColors ? "white" : brandColors.primary,
                background: invertColors ? brandColors.primary : "white",
                textDecoration: "none",
                textAlign: "center",
                display: "inline-block",
                padding: "6px 16px",
                borderRadius: "3.6rem",
                border: invertColors ? "white solid 1px" : "none",
                "&: hover": {
                    background: invertColors ? "white" : brandColors.primary,
                    color: invertColors ? brandColors.primary : "white",
                    border: invertColors ? `${brandColors.primary} solid 1px` : "none"
                }
            } }
        >
            { text }
        </Link>
    )
}