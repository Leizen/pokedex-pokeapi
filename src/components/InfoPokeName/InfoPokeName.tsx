import { PokeName } from "./styles";

interface InfoPokeNameProps {
  name: string;
}

export function InfoPokeName({ name }: InfoPokeNameProps) {
  return (
    <PokeName>
      <div>
        <div>
          <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
        </div>
      </div>
    </PokeName>
  );
}
