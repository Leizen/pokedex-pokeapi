import { Container } from "./styles";

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
