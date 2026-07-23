"use client";
//
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
    FC,
    useState
} from "react";
import { Stack, Typography, IconButton, Box } from "@mui/material";
import { StyledLink } from "@/component/link/StyledLink";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/gallery", text: "Gallery" },
    { href: "/software-portfolio", text: "Software Portfolio" }
];

export const Header : FC = () => {

    const [ open, setOpen ] = useState<boolean>(false);

    const pathname = usePathname();

    return (
        <Stack
            component="header"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            position="sticky"
            top={ 0 }
            left={ 0 }
            height={ 60 }
            width="100%"
            sx={ {
                backgroundColor: "white",
                zIndex: 999
            } }
        >
            <Stack
                direction="row"
                alignItems="center"
                gap={0}
                px={2}
                component={NextLink}
                href="/"
                sx={{
                    textDecoration: "none",
                    color: "inherit",
                }}
            >
                {
                    // <Box
                    //     sx={{
                    //         fontSize: 60,
                    //         lineHeight: 0,
                    //         display: "inline-flex",
                    //         alignItems: "center",
                    //     }}
                    // >
                    //     <Box
                    //         component="img"
                    //         src="/icon.png"
                    //         alt="icon"
                    //         sx={{
                    //             padding: "8px",
                    //             height: "1em",   // scales with fontSize
                    //             width: "auto",
                    //             display: "block"
                    //         }}
                    //     />
                    // </Box>
                }

                <Box sx={{ display: "flex", alignItems: "center", lineHeight: 1 }}>
                    <Typography
                        fontWeight={600}
                    >
                        DTG BUILDER
                    </Typography>
                </Box>
            </Stack>

            <Stack
                direction="row"
                px={ 2 }
                gap={ 3 }
                display={ { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" } }
            >
                { links.map((link, idx) => (
                    <StyledLink
                        key={ idx }
                        href={ link.href }
                        text={ link.text }
                        invertColors={ pathname === link.href }
                    />
                )) }

            </Stack>
            <Stack
                display={ { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" } }
                px={ 2 }

            >
                {
                    open ?
                        <IconButton
                            onClick={ () => setOpen(!open) }
                        >
                            <CloseIcon />
                        </IconButton> :
                        <IconButton
                            onClick={ () => setOpen(!open) }
                        >
                            <MenuIcon />
                        </IconButton>
                }
                {
                    open ?
                        <Stack
                            gap={ 2 }
                            position="fixed"
                            top={ 60 }
                            right={ 0 }
                            p={ 2 }
                            pb={ 4 }
                            width="100svw"
                            alignItems="end"
                            borderRadius={ 1 }
                            sx={ {
                                background: "white"
                            } }
                        >
                            { links.map((link, idx) => (
                                <Box
                                    key={ idx }
                                    onClick={ () => setOpen(false) }
                                >
                                    <StyledLink
                                        href={ link.href }
                                        text={ link.text }
                                        invertColors={ pathname === link.href }
                                    />
                                </Box>
                            )) }
                        </Stack> :
                        null
                }
            </Stack>
        </Stack>
    )
}