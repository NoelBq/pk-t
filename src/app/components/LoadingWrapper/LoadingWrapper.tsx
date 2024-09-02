import { Container, LinearProgress, Stack } from '@mui/material';
import React from 'react';


interface Props {
    children: React.ReactNode;
    loading?: boolean;
}

export function LoadingWrapper({ children, loading }: Props) {

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {loading ? (
                <Stack
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '80vh',
                    }}
                >
                    <Container maxWidth="xs">
                        <LinearProgress />
                    </Container>
                </Stack>
            ) : (
                children
            )}
        </>
    );
}
