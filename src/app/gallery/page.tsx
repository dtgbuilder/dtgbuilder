"use client";
import { Stack, Typography } from "@mui/material";
import { CldImage } from "next-cloudinary";
import { galleryImages as images } from "@/data/galleryImages";
import { brandColors } from "@/component/color/brandColors";

const COLUMN_MAX_WIDTH = 720;
const LANDSCAPE_MAX_WIDTH = 720;
const PORTRAIT_MAX_WIDTH = 560;

export default function Page() {
    return (
        <Stack
            sx={ {
                width: "100%",
                maxWidth: COLUMN_MAX_WIDTH,
                margin: "0 auto",
                px: 2
            } }
        >
            <Typography
                variant="h1"
                fontSize="24px"
                my={ 4 }
            >
                Gallery
            </Typography>

            <Stack sx={ { width: "100%", gap: 3 } }>
                {images.map((image, index) => {
                    const isPortrait = image.height > image.width;

                    return (
                        <Stack
                            key={ index }
                            sx={ {
                                width: "100%",
                                maxWidth: isPortrait
                                    ? PORTRAIT_MAX_WIDTH
                                    : LANDSCAPE_MAX_WIDTH,
                                margin: "0 auto",
                                gap: 1
                            } }
                        >
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
                                    borderRadius: 2
                                } }
                            />

                            <Typography
                                sx={ {
                                    textTransform: "uppercase",
                                    textAlign: "left",
                                    lineHeight: "100%",
                                    fontSize: 14,
                                    color: brandColors.offBlack
                                } }
                            >
                                {image.alt}
                            </Typography>
                        </Stack>
                    );
                })}
            </Stack>
        </Stack>
    );
}