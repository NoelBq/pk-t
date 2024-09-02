"use client";
import React from "react";
import { Grid2 } from "@mui/material";
import { CardItem } from "./CardItem";

interface Props {
    pokemonList: Pokemon[] | undefined;
}

const getPokemonId = (url: string) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
};

export function CardGallery({ pokemonList }: Props) {
    return (
        <Grid2 container spacing={2} mt={2}>
            {pokemonList?.map((pokemon) => {
                const id = getPokemonId(pokemon.url);
                return (
                    <Grid2
                        size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                        key={id}>
                        <CardItem
                            id={id}
                            name={pokemon.name}
                        />
                    </Grid2>
                );
            })}
        </Grid2>
    )
}
