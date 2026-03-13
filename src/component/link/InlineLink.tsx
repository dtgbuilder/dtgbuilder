import { FC } from "react";
import {
    Link
} from "@mui/material";
import NextLink from "next/link";
import {brandColors} from "@/component/color/brandColors";

export const InlineLink : FC<{
    href: string;
    text: string;
    fontSize?: number;
    newTab?: boolean;
}> = ({
          href,
          text,
          fontSize=20,
          newTab=false
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
                color: brandColors.dark,
                textDecoration: "underline",
                textDecorationColor: brandColors.dark,
                "&: hover": {
                    color: brandColors.medium,
                    textDecorationColor: brandColors.medium,

                }
            } }
        >
            { text }
        </Link>
    )
}