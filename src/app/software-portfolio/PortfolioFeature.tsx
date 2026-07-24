import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface PortfolioFeatureProps {
    date: string;
    title: string;
    websiteUrl?: string;
    repositoryUrl?: string;
    description?: string;
}

export function PortfolioFeature({
    date,
    title,
    websiteUrl,
    repositoryUrl,
    description
}: PortfolioFeatureProps) {
    return (
        <Box
            sx={{
                p: 3,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2
            }}
        >
            <Stack gap={ 2 }>
                <Stack gap={ 0.25 }>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                    >
                        { date }
                    </Typography>

                    <Typography variant="h6">
                        { title }
                    </Typography>
                </Stack>

                { description && (
                    <Typography
                        variant="body1"
                    >
                        { description }
                    </Typography>
                ) }

                <Stack
                    direction="row"
                    gap={ 2 }
                    flexWrap="wrap"
                >
                    {websiteUrl && (
                        <Typography
                            component={ Link }
                            href={ websiteUrl }
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="body2"
                            sx={{
                                fontSize: "18px",
                                fontWeight: 700,
                                color: "primary.main",
                                textDecoration: "none",
                                "&:hover": {
                                    textDecoration: "underline"
                                }
                            }}
                        >
                            View website
                        </Typography>
                    )}

                    {repositoryUrl && (
                        <Typography
                            component={ Link }
                            href={ repositoryUrl }
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="body2"
                            sx={{
                                fontSize: "18px",
                                fontWeight: 700,
                                color: "primary.main",
                                textDecoration: "none",
                                "&:hover": {
                                    textDecoration: "underline"
                                }
                            }}
                        >
                            View GitHub repository
                        </Typography>
                    )}
                </Stack>
            </Stack>
        </Box>
    );
}