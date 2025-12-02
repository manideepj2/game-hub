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
    id:number;
    name:string;
    slug:string;
}

 const useGames = (selectedGenre :Genre|null) => {
  const{data,error, isLoading}=useData<Game>('/games',{params:{genres:selectedGenre?.id}},[selectedGenre?.id]);

  return { data, error, isLoading };
};

export default useGames;