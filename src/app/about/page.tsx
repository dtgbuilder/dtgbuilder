import {
    Stack,
    Typography
} from "@mui/material";
import {InlineLink} from "@/component/link/InlineLink";
import {Registered} from "@/component/brand/Registered";

export default function About() {
    return (
        <Stack
            sx={ {
                width: "100%",
                maxWidth: "700px",
                margin: "0 auto"
            } }
        >
            <Typography
                variant="h1"
                fontSize="24px"
                my={ 4 }
            >
                About
            </Typography>
            <Stack
                gap={ 3 }
            >
                <Stack
                    alignItems="center"
                    gap={ 1 }
                >
                    <Typography
                        variant="h5"
                        align="center"
                    >
                        DTG BUILDER LLC
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                    >
                        A nice guy
                    </Typography>
                    <Typography
                        align="center"
                    >
                        March 15, 2025
                    </Typography>
                </Stack>
                <Stack>
                    <Typography>
                        howdy
                    </Typography>
                </Stack>
                <Stack
                    alignItems="center"
                    gap={ 1 }
                >
                    <Typography
                        variant="h5"
                        align="center"
                    >
                        Some cool quote
                        <Registered
                            fontSize = "0.4em"
                            top = "-1em"
                            ml ={0.3}
                        />
                    </Typography>
                </Stack>
                <Stack
                    gap={ 1 }
                >
                    <Typography>
                        Hey there!
                    </Typography>
                    <Typography>
                        Check out out the <InlineLink href="/gallery" text="gallery" /> for some cool stuff.
                    </Typography>
                    <Typography>
                        Dylan Green
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}
