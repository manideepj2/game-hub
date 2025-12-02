import type { GameQuery } from "../App";
import useData from "./useData";
import type { Genre } from "./useGeneres";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = useData<Game>(
    "/games", //endpoint
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    }, //optional params
    [gameQuery] //dependencies for useEffect
  );

  return { data, error, isLoading };
};

export default useGames;
