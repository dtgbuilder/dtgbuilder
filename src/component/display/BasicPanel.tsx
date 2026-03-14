// src/component/display/BasicPanel.tsx
import { ReactNode } from "react";
import {
    Box,
    Stack,
    Typography,
    SxProps,
    Theme
} from "@mui/material";
import { brandColors } from "@/component/color/brandColors";
import { StyledLink } from "@/component/link/StyledLink";

type ActionLink = {
    href: string;
    text: string;
    newTab?: boolean;
};

type Props = {
    eyebrow?: ReactNode;
    title?: ReactNode;
    body?: ReactNode;
    actions?: ActionLink[];
    sx?: SxProps<Theme>;
};

export function BasicPanel({
    eyebrow,
    title,
    body,
    actions,
    sx
}: Props) {
    return (
        <Box
            component="section"
            p={ { sm: 4, xs: 2 } }
            borderRadius={ 1 }
            bgcolor={ brandColors.offWhite }
            sx={ {
                boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
                ...sx
            } }
        >
            <Stack gap={ 2 }>
                {eyebrow && (
                    typeof eyebrow === "string" ? (
                        <Typography
                            sx={ {
                                color: brandColors.medium,
                                textTransform: "uppercase"
                            } }
                            fontSize={ 16 }
                            fontWeight={ 600 }
                            lineHeight="100%"
                        >
                            {eyebrow}
                        </Typography>
                    ) : eyebrow
                )}

                {title && (
                    typeof title === "string" ? (
                        <Typography variant="h4">
                            {title}
                        </Typography>
                    ) : title
                )}

                {body && (
                    typeof body === "string" ? (
                        <Typography variant="body1">
                            {body}
                        </Typography>
                    ) : body
                )}

                {!!actions?.length && (
                    <Stack
                        direction="row"
                        gap={ 2 }
                        pt={ 2 }
                        flexWrap="wrap"
                    >
                        {actions.map((action) => (
                            <StyledLink
                                key={ `${action.href}-${action.text}` }
                                href={ action.href }
                                text={ action.text }
                                invertColors
                                newTab={ action.newTab ?? false }
                            />
                        ))}
                    </Stack>
                )}
            </Stack>
        </Box>
    );
}