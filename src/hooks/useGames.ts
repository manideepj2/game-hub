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

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const { data, error, isLoading } = useData<Game>(
    "/games", //endpoint
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } }, //optional params
    [selectedGenre?.id, selectedPlatform?.id] //dependencies for useEffect
  );

  return { data, error, isLoading };
};

export default useGames;
