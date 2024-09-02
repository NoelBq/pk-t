
import axios from "axios";
import { MainContent } from "./components/MainContent";
import { env } from "@/env";

export default async function Home() {
  // this is an optimistic default response in case the request fails.
  const defaultPokemonResponse: PokemonResponse = {
    count: 0,
    next: '',
    previous: '',
    results: []
  };

  let data: PokemonResponse;

  try {
    const response = await axios.get<PokemonResponse>(`${env.NEXT_PUBLIC_API_URL}/pokemon?limit=10000&offset=0`);
    data = response.data;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    data = defaultPokemonResponse;
  }

  return (
    <main>
      <MainContent pokemonResponse={data} />
    </main>
  );
}
