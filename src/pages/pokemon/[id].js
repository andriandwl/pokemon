import MenuDetail from "@/components/MenuDetail";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function PokemonDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        setPokemon(data);
      } catch (error) {
        alert(error.message);
      }
    };

    if (id) {
      fetchPokemonDetail();
    }
  }, [id]);
  console.log(pokemon);

  if (!pokemon) <div>Loading ......</div>;

  return (
    <div>
      <MenuDetail pokemon={pokemon} id={id} />
    </div>
  );
}
