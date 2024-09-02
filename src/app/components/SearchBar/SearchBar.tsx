import React from 'react';
import { Typography, TextField, Box, Stack, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/legacy/image';
import { Navigation } from '../Navigation';

interface Props {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    notFound: boolean;
    error: Error | undefined;
    handlePreviousPage: () => void;
    handleNextPage: () => void;
    handleClear: () => void;
    disabledArrowBack: boolean;
    disabledArrowForward: boolean;
}

export function SearchBar({
    searchQuery,
    setSearchQuery,
    notFound,
    error,
    handlePreviousPage,
    handleNextPage,
    disabledArrowBack,
    disabledArrowForward,
}: Props) {

    return (
        <Stack
            sx={{
                background: 'linear-gradient(135deg, #FCD303 0%, #FFA600 100%)',
                borderRadius: '16px',
                padding: '24px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '300px',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            }}
            direction="row"
            alignItems="center"
            spacing={2}
        >
            <Box
                sx={{
                    width: { xs: '100%', sm: '400px' },
                    height: { xs: '200px', sm: '300px' },
                    position: 'relative',
                }}
            >
                {notFound || error ? (
                    <Stack
                        direction="column"
                        alignItems="center"
                        spacing={2}
                    >
                        <Image
                            src="/sadPoke.png"
                            alt="No Pokémon Found"
                            width={240}
                            height={240}
                        />
                        <Typography variant="h6">
                            Oops! {error ? 'Something went wrong' : 'Pokémon not found.'}
                        </Typography>
                    </Stack>
                ) : (
                    <Image
                        src="/pikachu.png"
                        alt="Pikachu"
                        layout="fill"
                        objectFit="contain"
                    />
                )}

            </Box>

            <Stack direction="column" spacing={
                { xs: 0, sm: 0, md: 1 }
            } sx={{ flex: 1, width: '100%', mb: 1 }}>
                <Typography
                    sx={{
                        color: '#ffff',
                        fontWeight: 'bold',
                        fontSize: { xs: '24px', sm: '40px' },
                        textAlign: { xs: 'center', md: 'left' },
                        marginBottom: '0px',
                    }}
                >
                    Poke Search
                </Typography>
                <Typography variant="subtitle1" sx={{
                    color: '#ffff',
                    textAlign: { xs: 'center', md: 'left' },
                }}>
                    Search your favorite Pokemon
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                    <TextField
                        variant="outlined"
                        placeholder="Search Pokémon"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),

                                sx: {
                                    height: '48px',
                                    backgroundColor: 'white',
                                    borderRadius: '8px',
                                    '& fieldset': { border: 'none' },
                                }
                            }
                        }}

                        sx={{ flex: 1 }}
                    />
                </Stack>
            </Stack>
            <Navigation
                disabledArrowBack={disabledArrowBack}
                disabledArrowForward={disabledArrowForward}
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
            />
        </Stack>
    );
};
