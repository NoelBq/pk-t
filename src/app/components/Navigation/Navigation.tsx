import React from 'react';
import { Box, IconButton, } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Props {
    disabledArrowBack: boolean;
    disabledArrowForward: boolean;
    handlePreviousPage: () => void;
    handleNextPage: () => void;
}

export function Navigation({
    disabledArrowBack,
    disabledArrowForward,
    handlePreviousPage,
    handleNextPage,
}: Props) {
    return (
        <Box
            sx={{
                alignSelf: 'flex-end',
            }}
            display="flex" alignItems="center">
            <IconButton
                disabled={disabledArrowBack}
                onClick={() => {
                    handlePreviousPage();
                }}
                aria-label="previous page">
                <ChevronLeftIcon
                    sx={{
                        color: '#ffff',
                    }}
                />
            </IconButton>
            <IconButton
                disabled={disabledArrowForward}
                onClick={() => {
                    handleNextPage();
                }}
                sx={{
                    color: '#ffff',
                }}
                aria-label="next page">
                <ChevronRightIcon />
            </IconButton>
        </Box>
    )
}

