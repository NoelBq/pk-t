import { Stack } from '@mui/material';
import { ResponsiveContainer } from '../ResponsiveContainer';
import { type ReactNode } from 'react';

interface Props {
    children: ReactNode;
    noContentPaddingTop?: boolean;
    hasFooter?: boolean;
}

export function MainLayout({
    children,
    noContentPaddingTop,
}: Props) {
    return (
        <Stack sx={{ minHeight: 1 }}>
            <ResponsiveContainer>
                <Stack pt={noContentPaddingTop ? 0 : 2} pb={2}>
                    {children}
                </Stack>
            </ResponsiveContainer>
        </Stack>
    );
}
