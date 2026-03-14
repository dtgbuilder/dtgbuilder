import type { MetadataRoute } from "next";

// // source of truth for SEO purposes
const siteHost = "www.dtgbuilder.com";
const siteProtocol = "https";
export const siteUrl = `${siteProtocol}://${siteHost}`;

export const dynamic = "force-static";

export default async function robots(): Promise<MetadataRoute.Robots> {

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/"
            }
        ],
        sitemap: siteUrl + "/sitemap.xml"
    };
}