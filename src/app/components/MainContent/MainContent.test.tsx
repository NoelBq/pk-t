import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MainContent } from '../MainContent';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { mockPokemonResponse } from '@/app/components/MainContent/__mocks__/pockemonResponse';
import '@testing-library/jest-dom'

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
    useSearchParams: jest.fn(),
    usePathname: jest.fn(),
}));

describe('MainContent', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        (useRouter as jest.Mock).mockReturnValue({
            push: jest.fn(),
        });
        (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
        (usePathname as jest.Mock).mockReturnValue('/path');
    });

    it('renders the SearchBar and CardGallery', () => {
        render(<MainContent pokemonResponse={mockPokemonResponse} />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        const pokemonName = mockPokemonResponse.results[0]?.name;
    });

    it('updates the search query when the user types in the search bar', () => {
        render(<MainContent pokemonResponse={mockPokemonResponse} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'Pikachu' } });

        expect(input).toHaveValue('Pikachu');
    });

    it('filters Pokemon based on search query', async () => {
        render(<MainContent pokemonResponse={mockPokemonResponse} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'bulb' } });

        await waitFor(() => {
            expect(screen.getByText('bulbasaur')).toBeInTheDocument();
        });
    });
});
