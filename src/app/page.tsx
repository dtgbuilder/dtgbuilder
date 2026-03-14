// src/app/page.tsx
import { Stack, Typography } from "@mui/material";
import { BasicPanel } from "@/component/display/BasicPanel";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
    description: "Carpentry and landscaping services from DTG Builder in Western North Carolina.",
    alternates: {
        canonical: "/"
    }
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={ {
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://www.dtgbuilder.com",
                        name: "DTG Builder LLC",
                        url: "https://www.dtgbuilder.com",
                        description: "Carpentry and landscaping services in Western North Carolina",
                        areaServed: [
                            "Cullowhee NC",
                            "Cashiers NC",
                            "Highlands NC",
                            "Sylva NC"
                        ]
                    })
                } }
            />
            <Stack
                sx={ {
                    width: "100%",
                    maxWidth: "900px",
                    margin: "0 auto"
                } }
            >
                <Typography
                    variant="h1"
                    component="h1"
                    fontSize={ { sm: 96, xs: 72 } }
                    my={ 8 }
                >
                    DTG BUILDER
                </Typography>
                <Stack
                    gap={ 8 }
                >
                    <BasicPanel
                        eyebrow="Carpentry & Landscaping"
                        title="Terrain Specialist"
                        body={
                            <Stack gap={ 2 }>
                                <Typography>
                                    Carpentry, landscaping, and terrain work in Western North Carolina including Cullowhee, Cashiers, Highlands, Sylva, and Balsam.

                                </Typography>
                            </Stack>
                        }
                        actions={ [
                            {
                                href: "/about",
                                text: "About"
                            },
                            {
                                href: "/gallery",
                                text: "Gallery"
                            }
                        ] }
                    />
                </Stack>
                
            </Stack>
        </>
        
    );
}