// src/component/display/HomeEvent.tsx
import { Box, Stack, Typography, SxProps, Theme } from "@mui/material";
import { brandColors } from "@/component/color/brandColors";
import { StyledLink } from "@/component/link/StyledLink";
import { ReactNode } from "react";

type Props = {
    dateLabel?: string;
    title?: ReactNode;
    subtitle?: ReactNode;
    href?: string;        // primary CTA link
    rsvpHref?: string;    // optional secondary link
    sx?: SxProps<Theme>;
    ctaText?: string;     // text for primary CTA
    newTab?: boolean;
};

export function BasicComponent({
                              dateLabel,
                              title,
                              subtitle,
                              href,
                              rsvpHref,
                              sx,
                              ctaText,
                              newTab=false
                          }: Props) {
    return (
        <Box
            component="section"
            p={4}
            borderRadius={1}
            bgcolor={brandColors.offWhite}
            sx={{ boxShadow: "0px 2px 8px rgba(0,0,0,0.08)", flex: 1, ...sx }}
        >
            <Stack direction={{ sm: "column", md: "row" }}>
                <Stack gap={2} sx={{ flex: 1, minWidth: 0 }}>
                    <Stack gap={2}>
                        {dateLabel && (
                            <Typography
                                sx={{ color: brandColors.medium, textTransform: "uppercase" }}
                                fontSize={16}
                                fontWeight={600}
                                lineHeight="100%"
                            >
                                {dateLabel}
                            </Typography>
                        )}

                        {title &&
                            (typeof title === "string" ? (
                                <Typography variant="h4">{title}</Typography>
                            ) : (
                                title
                            ))}

                        {subtitle &&
                            (typeof subtitle === "string" ? (
                                <Typography variant="subtitle1">{subtitle}</Typography>
                            ) : (
                                subtitle
                            ))}

                        <Stack direction="row" gap={2} pt={2}>
                            {href && (
                                <StyledLink
                                    href={href}
                                    text={ctaText ?? "Event details"}
                                    invertColors
                                    newTab={ newTab }
                                />
                            )}
                            {
                                rsvpHref &&
                                <StyledLink
                                    href={rsvpHref}
                                    text="RSVP"
                                    invertColors
                                    newTab={ true }
                                />
                            }
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}

