import React, { useEffect, useState, useCallback, useRef } from "react";
import Navigation from "./Navigation";
import { useSearchParams } from "next/navigation";
import PokemonThumb from "./PokemonThumb";
import SearchBar from "./SearchBar";

interface Pokemon {
  id: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
}

export default function Main() {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [loadMore, setLoadMore] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");

  const [search, setSearch] = useState(keyword || "");

  const getAllPokemons = useCallback(async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    async function createPokemonObject(results: any[]) {
      const pokemonPromises = results.map(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        return data;
      });
      const pokemonData = await Promise.all(pokemonPromises);
      setAllPokemons((currentList) => [...currentList, ...pokemonData]);
    }

    createPokemonObject(data.results);
  }, [loadMore]);

  const onKeywordChangeHandler = (search: string) => {
    setSearch(search);
  };

  const getAllPokemonRef = useRef(getAllPokemons);

  useEffect(() => {
    getAllPokemonRef.current();
  }, []);

  const filterPoke = React.useMemo(
    () =>
      allPokemons?.filter((poke) => {
        return poke.name.toLowerCase().includes(search.toLowerCase());
      }),
    [allPokemons, search]
  );

  return (
    <div className="app-contaner">
      <Navigation />
      <div className="pokemon-container">
        <SearchBar keyword={search} keywordChange={onKeywordChangeHandler} />
        <div className="all-container gap-2">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {filterPoke.map((pokemonStats, index) => (
              <PokemonThumb
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
              />
            ))}
          </div>
          <button className="load-more" onClick={() => getAllPokemons()}>
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}
