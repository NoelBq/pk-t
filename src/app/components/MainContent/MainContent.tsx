'use client';
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import type { Pokemon, PokemonResponse } from "@/app/types/pokemon";
import { CardGallery } from "@/app/components/CardGallery/CardGallery";
import { SearchBar } from "@/app/components/SearchBar";
import { LoadingWrapper } from "../LoadingWrapper/LoadingWrapper";

interface MainContentProps {
    pokemonResponse: PokemonResponse;
}

export function MainContent({ pokemonResponse }: MainContentProps) {
    const router = useRouter();

    const [limit, setLimit] = useState(30);
    const [offset, setOffset] = useState(0);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const page = searchParams?.get('page');
    const q = searchParams?.get('q');

    const currentPage = parseInt(page ?? '1');
    const itemsPerPage = 30;
    const [searchQuery, setSearchQuery] = useState(q ?? "");

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    useEffect(() => {
        if (q) {
            setSearchQuery(q);
        }
    }, [q]);

    useEffect(() => {
        setLimit(itemsPerPage);
        setOffset((currentPage - 1) * itemsPerPage);
    }, [currentPage, itemsPerPage]);

    useEffect(() => {
        const filteredPokemons = pokemonResponse.results.filter(pokemon => pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()));
        const paginatedPokemons = filteredPokemons.slice(offset, offset + limit);
        setPokemonList(paginatedPokemons);
    }, [searchQuery, offset, limit, pokemonResponse.results]);

    const updateUrl = (query: string, page: number) => {
        router.push(`${pathname}?q=${query}&page=${page}`);
    };

    const handleNextPage = () => {
        if (pokemonList.length === limit) {
            updateUrl(searchQuery, currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            updateUrl(searchQuery, currentPage - 1);
        }
    };

    return (
        <LoadingWrapper loading={!pokemonResponse}>
            <SearchBar
                disabledArrowBack={currentPage <= 1}
                disabledArrowForward={pokemonList.length < limit}
                handleClear={() => setSearchQuery('')}
                error={!!pokemonResponse?.results?.length ? undefined : new Error('No results found')}
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
                notFound={!!searchQuery.length && pokemonList.length === 0}
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
            />
            <CardGallery pokemonList={pokemonList} />
        </LoadingWrapper>
    );
}
