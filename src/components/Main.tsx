import React, { useEffect, useState } from "react";
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

  // function changeSearchParams(keyword) {
  //   setSearchParams({ keyword });
  // }

  const [search, setSearch] = React.useState(keyword || "");

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results: any[]) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  const onKeywordChangeHandler = (search: string) => {
    setSearch(search);
    // changeSearchParams(search);
  };

  useEffect(() => {
    getAllPokemons();
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
