import {
  Container,
  ContainerList,
  EmptyContainer,
  SearchInput,
} from "./styles";

interface Pokemon {
  id: number;
  name: string;
}

interface PokemonListProps {
  listPokemon: Pokemon[];
  onSelectPokemon: (value: string) => void;
  filterPokemon: (value: string) => void;
}

function pokemonNameUpperCase(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function PokemonList({
  listPokemon,
  onSelectPokemon,
  filterPokemon,
}: PokemonListProps) {
  return (
    <Container>
      <EmptyContainer>
        <div></div>
      </EmptyContainer>
      <ContainerList>
        <SearchInput
          type="text"
          placeholder="Search"
          onChange={(e) =>
            filterPokemon(e.target.value.toLowerCase().toString())
          }
        />
        {listPokemon.map((pokemon) => (
          <button
            key={pokemon.name}
            onClick={() => onSelectPokemon(pokemon.name)}
          >
            {pokemon.id + " - " + pokemonNameUpperCase(pokemon.name)}
          </button>
        ))}
      </ContainerList>
    </Container>
  );
}
