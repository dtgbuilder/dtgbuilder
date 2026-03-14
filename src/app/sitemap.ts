import type { MetadataRoute } from "next";
// // static PRD domain name for use in SEOs
import { siteUrl } from "@/app/robots";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const config: MetadataRoute.Sitemap = [
        {
            url: siteUrl + "/",
            changeFrequency: "weekly",
            lastModified: new Date(),
            priority: 1
        },
        {
            url: siteUrl + "/about",
            changeFrequency: "weekly",
            lastModified: new Date(),
            priority: 1
        },
        {
            url: siteUrl + "/gallery",
            changeFrequency: "weekly",
            lastModified: new Date(),
            priority: 1
        }
    ];

    return config;
}