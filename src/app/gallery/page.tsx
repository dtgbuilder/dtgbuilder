import { Stack, Typography } from "@mui/material";
import { galleryImages as images } from "@/data/galleryImages";
import { Metadata } from "next";
import { GalleryFigure, COLUMN_MAX_WIDTH } from "./GalleryFigure";


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
                component="h1"
                my={ 8 }
            >
                Gallery
            </Typography>

            <Stack sx={ { width: "100%", gap: 8 } }>
                {images.map((image, index) => (
                    <GalleryFigure
                        key={ index }
                        src={ image.src }
                        alt={ image.alt }
                        width={ image.width }
                        height={ image.height }
                    />
                ))}
            </Stack>
        </Stack>
    );
}
