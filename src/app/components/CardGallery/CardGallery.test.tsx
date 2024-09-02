import React from "react";
import { render, screen } from "@testing-library/react";
import { CardGallery } from "./CardGallery";
import '@testing-library/jest-dom'

const mockPokemonList = [
    { name: "Bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "Ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "Venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
];

describe("CardGallery", () => {
    it("renders a list of Pokémon cards", () => {
        render(<CardGallery pokemonList={mockPokemonList} />);

        mockPokemonList.forEach((pokemon) => {
            expect(screen.getByText(pokemon.name)).toBeInTheDocument();
        });
        mockPokemonList.forEach((pokemon) => {
            const id = pokemon.url.split("/").slice(-2, -1)[0];
        });
    });
});
