import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import '@testing-library/jest-dom'

const mockProps = {
    searchQuery: '',
    setSearchQuery: jest.fn(),
    notFound: false,
    error: undefined,
    handlePreviousPage: jest.fn(),
    handleNextPage: jest.fn(),
    handleClear: jest.fn(),
    disabledArrowBack: false,
    disabledArrowForward: false,
};

describe('SearchBar', () => {
    test('renders without crashing', () => {
        render(<SearchBar {...mockProps} />);
        expect(screen.getByText(/Poke Search/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Search Pokémon/i)).toBeInTheDocument();
    });

    test('renders "no Pokémon found" message when notFound is true', () => {
        render(<SearchBar {...mockProps} notFound={true} />);

        expect(screen.getByAltText(/No Pokémon Found/i)).toBeInTheDocument();
        expect(screen.getByText(/Pokémon not found./i)).toBeInTheDocument();
    });

    test('renders error message when error is provided', () => {
        render(<SearchBar {...mockProps} error={new Error('Test Error')} />);

        expect(screen.getByAltText(/No Pokémon Found/i)).toBeInTheDocument();
        expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    });
});
