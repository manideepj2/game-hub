import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";

interface GmaeHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GmaeHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
