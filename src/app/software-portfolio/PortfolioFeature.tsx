import Stack from "@mui/material/Stack";

export function PortfolioFeature({
    url,
    title,
    description
}:
{
    url: string;
    title: string;
    description: string;
}) {
    return (
        <Stack
            sx={ {
                width: "100%",
                maxWidth: "700px",
                margin: "0 auto"
            } }
        > 
            { url }
            { title }
            { description }
        </Stack>       
    )
}