/* eslint-disable @typescript-eslint/no-explicit-any */
import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

function toTitleCase(value: string) {
    return value.replace(/\b\w/g, (char) => char.toUpperCase());
}

async function run() {
    const result = await cloudinary.search
        .expression("folder:dtgbuilder")
        .sort_by("public_id", "asc")
        .max_results(100)
        .execute();

    const images = result.resources
        .filter((r: any) => r.resource_type === "image")
        .sort((a: any, b: any) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
        .map((r: any) => {
            const filename = r.public_id.split("/").pop() ?? "";

            const alt = toTitleCase(
                filename
                    .replace(/_[a-z0-9]+$/i, "")
                    .replace(/\.[^.]+$/, "")
                    .replace(/[-_]/g, " ")
                    .trim()
            );

            return {
                src: r.public_id,
                alt,
                width: r.width,
                height: r.height
            };
        });

    const file = `export const galleryImages = ${JSON.stringify(images, null, 4)};\n`;

    fs.mkdirSync("src/data", { recursive: true });
    fs.writeFileSync("src/data/galleryImages.ts", file);

    console.log("galleryImages.ts generated");
}

run();