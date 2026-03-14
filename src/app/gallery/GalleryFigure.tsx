// src/component/gallery/GalleryFigure.tsx
"use client";

import { Stack, Typography } from "@mui/material";
import { CldImage } from "next-cloudinary";
import { brandColors } from "@/component/color/brandColors";

export const COLUMN_MAX_WIDTH = 720;
const LANDSCAPE_MAX_WIDTH = 720;
const PORTRAIT_MAX_WIDTH = 560;

const capitalize = (str: string) => str[ 0 ].toUpperCase() + str.slice(1);

type GalleryFigureProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export function GalleryFigure({
    src,
    alt,
    width,
    height
}: GalleryFigureProps) {
    const isPortrait = height > width;

    return (
        <Stack
            component="figure"
            borderRadius={ 1 }
            bgcolor={ brandColors.offWhite }
            sx={ {
                boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
                width: "100%",
                maxWidth: isPortrait
                    ? PORTRAIT_MAX_WIDTH
                    : LANDSCAPE_MAX_WIDTH,
                margin: "0 auto",
                gap: 1
            } }
        >
            <Typography
                component="figcaption"
                px={ 1 }
                pt={ 1 }
                sx={ {
                    textAlign: "left",
                    color: brandColors.offBlack
                } }
            >
                { capitalize(alt) }
            </Typography>

            <CldImage
                src={ src }
                alt={ alt }
                width={ width }
                height={ height }
                sizes={
                    isPortrait
                        ? `(max-width: ${COLUMN_MAX_WIDTH}px) 60vw, ${PORTRAIT_MAX_WIDTH}px`
                        : `(max-width: ${COLUMN_MAX_WIDTH}px) 100vw, ${LANDSCAPE_MAX_WIDTH}px`
                }
                style={ {
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderBottomLeftRadius: 2,
                    borderBottomRightRadius: 2
                } }
            />
        </Stack>
    );
}
