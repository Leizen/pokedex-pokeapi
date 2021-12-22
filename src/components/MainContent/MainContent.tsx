import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { InfoPokeImage } from "../InfoPokeImage/InfoPokeImage";
import { InfoPokeName } from "../InfoPokeName/InfoPokeName";
import { InfoPokeStatus } from "../InfoPokeStatus/InfoPokeStatus";
import { PokemonList } from "../PokemonList/PokemonList";
import { Container, InfoContainer } from "./styles";

interface PokemonTypes {
  type: {
    name: string;
  };
}

interface PokemonAbilities {
  ability: {
    name: string;
  };
}

interface PokemonListProps {
  id: number;
  name: string;
}

interface PokemonInfoProps {
  name: string;
  sprites: {
    front_default: string;
  };
  types: Array<PokemonTypes>;
  abilities: Array<PokemonAbilities>;
}

export function MainContent() {
  const [pokemonList, setPokemonList] = useState<PokemonListProps[]>([]);
  const [pokemonFullList, setPokemonFullList] = useState<PokemonListProps[]>(
    []
  );
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfoProps>(
    {} as PokemonInfoProps
  );

  useEffect(() => {
    api.get("pokemon?limit=1200").then((response) => {
      const pokeList = response.data.results.map(
        (prevState: PokemonListProps, index: number) => {
          return { ...prevState, id: zeroPad(index + 1, 3) };
        }
      );

      setPokemonList(pokeList);
      setPokemonFullList(pokeList);
    });

    api.get(`pokemon/1`).then((response) => setPokemonInfo(response.data));
  }, []);

  function zeroPad(num: number, places: number) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }

  function handleSelectedPokemon(value: string) {
    api
      .get(`pokemon/${value}`)
      .then((response) => setPokemonInfo(response.data));
  }

  function handleFilteredPokemon(value: string) {
    const filteredPokemon = pokemonFullList.filter(
      (pokemon) =>
        pokemon.name.includes(value) || pokemon.id.toString().includes(value)
    );
    // eslint-disable-next-line no-lone-blocks
    {
      value ? setPokemonList(filteredPokemon) : setPokemonList(pokemonFullList);
    }
  }

  return (
    <>
      <Container>
        {pokemonInfo.name && (
          <>
            <InfoContainer>
              <InfoPokeName name={pokemonInfo.name} />

              <InfoPokeImage sprites={pokemonInfo.sprites} />

              <InfoPokeStatus
                types={pokemonInfo.types}
                abilities={pokemonInfo.abilities}
              />
            </InfoContainer>

            <PokemonList
              listPokemon={pokemonList}
              onSelectPokemon={handleSelectedPokemon}
              filterPokemon={handleFilteredPokemon}
            />
          </>
        )}
      </Container>
    </>
  );
}
