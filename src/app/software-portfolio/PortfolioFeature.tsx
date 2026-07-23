import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface PortfolioFeatureProps {
    title: string;
    url: string;
    description?: string;
}

export function PortfolioFeature({
    title,
    url,
    description
}: PortfolioFeatureProps) {
    return (
        <Box
            component={ Link }
            href={ url }
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                display: "block",
                p: 3,
                border: "1px solid",
                borderColor: "divider", // TODO replace with design token
                borderRadius: 2,         // TODO replace with design token
                textDecoration: "none",
                color: "inherit",
                transition: "border-color 0.2s, background-color 0.2s, transform 0.2s",
                cursor: "pointer",
                "&:hover": {
                    bgcolor: "action.hover",
                    borderColor: "text.secondary",
                    transform: "translateY(-1px)"
                }
            }}
        >
            <Stack gap={ 2 }>
                <Stack gap={ 0.5 }>
                    <Typography variant="h6">
                        { title }
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        { url }
                    </Typography>
                </Stack>

                { description && (
                    <Typography
                        variant="body1"
                        color="text.secondary"
                    >
                        { description }
                    </Typography>
                ) }
            </Stack>
        </Box>
    );
}