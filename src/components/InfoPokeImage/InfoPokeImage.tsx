import { Container } from "./styles";
import squirtle from "./assets/squirtle.svg";

interface InfoPokeImageProps {
  sprites: {
    front_default: string;
  };
}

export function InfoPokeImage({ sprites }: InfoPokeImageProps) {
  return (
    <Container>
      <img src={sprites.front_default} alt="Pokemon" />
    </Container>
  );
}
