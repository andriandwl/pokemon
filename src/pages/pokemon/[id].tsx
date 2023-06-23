import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MenuDetail from "@/components/MenuDetail";

interface Pokemon {
  // Definisikan tipe objek Pokemon sesuai dengan struktur respons API
  id: number;
  name: string;
  // Tambahkan properti lain yang diperlukan
}

const PokemonDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        if (id) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );
          const data = await response.json();

          setPokemon(data);
        }
      } catch (error: any) {
        alert(error.message);
      }
    };

    fetchPokemonDetail();
  }, [id]);

  if (!pokemon) {
    return <div>Loading ......</div>;
  }

  return (
    <div>
      <MenuDetail pokemon={pokemon} />
    </div>
  );
};

export default PokemonDetailPage;
