import useData from "./useData";

export interface Platform {
    id:number;
    name:string;
    slug:string;
}

const usePlatform = () => {
    useData<Platform>('/platforms/lists/parents');
    const{data, error, isLoading}=useData<Platform>('/platforms/lists/parents');
    
    return { data, error, isLoading };
}

export default usePlatform;