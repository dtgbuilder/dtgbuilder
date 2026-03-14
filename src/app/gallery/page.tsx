"use client";
import { Stack, Typography } from "@mui/material";
import { CldImage } from "next-cloudinary";
import { galleryImages as images } from "@/data/galleryImages";
import { brandColors } from "@/component/color/brandColors";
import { Metadata } from "next";

const COLUMN_MAX_WIDTH = 720;
const LANDSCAPE_MAX_WIDTH = 720;
const PORTRAIT_MAX_WIDTH = 560;

const capitalize = (str: string) => { return str[ 0 ].toUpperCase() + str.slice(1) };

export const metadata: Metadata = {
    title: "Gallery",
    description: "View gallery photos of carpentry and landscaping work by DTG Builder.",
    alternates: {
        canonical: "/gallery"
    }
};

export default function Page() {
    return (
        <Stack
            sx={ {
                width: "100%",
                maxWidth: COLUMN_MAX_WIDTH,
                margin: "0 auto"
            } }
        >
            <Typography
                variant="h1"
                my={ 8 }
            >
                Gallery
            </Typography>

            <Stack sx={ { width: "100%", gap: 8 } }>
                {images.map((image, index) => {
                    const isPortrait = image.height > image.width;

                    return (
                        <Stack
                            key={ index }
                            component="section"
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
                                px={ 2 }
                                pt={ 1 }
                                sx={ {
                                    textAlign: "left",
                                    color: brandColors.offBlack
                                } }
                            >
                                { capitalize(image.alt) }
                            </Typography>
                            <CldImage
                                src={ image.src }
                                alt={ image.alt }
                                width={ image.width }
                                height={ image.height }
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
                })}
            </Stack>
        </Stack>
    );
}