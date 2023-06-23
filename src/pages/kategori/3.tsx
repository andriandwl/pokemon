import Navigation from "@/components/Navigation";
import PokemonThumb from "@/components/PokemonThumb";
import SearchBar from "@/components/SearchBar";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

const Kategori3: React.FC = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword: string) {
    // setSearchParams({ keyword });
  }

  const [search, setSearch] = React.useState<string>(keyword || "");

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    async function createPokemonObject(results: any[]) {
      for (const pokemon of results) {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      }

      setAllPokemons((currentList) =>
        [...currentList].sort((a, b) => a.id - b.id)
      );
    }

    createPokemonObject(data.results);
  };

  const onKeywordChangeHandler = (search: string) => {
    setSearch(search);
    changeSearchParams(search);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const filterPoke = React.useMemo(
    () => allPokemons?.filter((poke) => poke.types[0].type.name === "grass"),
    [allPokemons]
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
};

export default Kategori3;
