interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
