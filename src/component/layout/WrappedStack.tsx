"use client";

import Stack from "@mui/material/Stack";
import {
    FC,
    PropsWithChildren,
    useMemo,
    Children,
} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface WrappedStackProps extends PropsWithChildren {
    itemsPerRow?: number;
}

export const WrappedStack: FC<WrappedStackProps> = ({
                                                        children,
                                                        itemsPerRow = 4,
                                                    }) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    const rows = useMemo(() => {
        const arr = Children.toArray(children);
        const out: React.ReactNode[][] = [];
        for (let i = 0; i < arr.length; i += itemsPerRow) {
            out.push(arr.slice(i, i + itemsPerRow));
        }
        return out;
    }, [children, itemsPerRow]);

    if (isSmall) {
        return (
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="flex-start"
                alignItems="stretch"
                rowGap={2}
                columnGap={2}
                maxWidth="100%"
                sx={{ "& > *": { flexShrink: 0 } }}
            >
                {Children.toArray(children)}
            </Stack>
        );
    }

    return (
        <Stack direction="column" rowGap={4} maxWidth="100%">
            {rows.map((row, idx) => (
                <Stack
                    key={idx}
                    direction="row"
                    flexWrap="nowrap"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    columnGap={3}
                    sx={{ "& > *": { flexShrink: 0 } }}
                >
                    {row}
                </Stack>
            ))}
        </Stack>
    );
};
