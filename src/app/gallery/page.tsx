"use client";
import { Stack, Typography } from "@mui/material";
import { CldImage } from "next-cloudinary";
import { galleryImages as images } from "@/data/galleryImages";

export default function Page() {
    return (
        <Stack
            sx={ {
                width: "100%",
                maxWidth: "700px",
                margin: "0 auto"
            } }
        >
            <Typography
                variant="h1"
                fontSize="24px"
                my={ 4 }
            >
                Images
            </Typography>

            <Stack sx={ { width: "100%", maxWidth: 600, gap: 2 } }>
                {images.map((image, index) => (
                    <CldImage
                        key={ index }
                        src={ image.src }
                        alt={ image.alt }
                        width={ image.width }
                        height={ image.height }
                        sizes="(max-width: 600px) 100vw, 600px"
                        style={ {
                            width: "100%",
                            height: "auto"
                        } }
                    />
                ))}
            </Stack>
        </Stack>
    );
}
