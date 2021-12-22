import { Container, TypeList } from "./styles";

interface PokemonAbilities {
  ability: {
    name: string;
  };
}

interface PokemonType {
  type: {
    name: string;
  };
}

interface InfoPokeStatusProps {
  types: Array<PokemonType>;
  abilities: Array<PokemonAbilities>;
}

export function InfoPokeStatus({ types, abilities }: InfoPokeStatusProps) {
  function nameToUpperCase(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  return (
    <>
      <Container>
        <div>
          <div>
            <section>
              <span>Types:</span>
              {types.map((typeName, id) => (
                <TypeList key={id} id={typeName.type.name}>
                  <span>{nameToUpperCase(typeName.type.name)}</span>
                </TypeList>
              ))}
            </section>
            <section>
              <span>Abilities: </span>
              {abilities.map((abilities, id) => (
                <li key={id}>
                  <span>{nameToUpperCase(abilities.ability.name)}</span>
                </li>
              ))}
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
