import { useEffect, useState, useRef } from "react"
import { IMovieDataResponse, IMovieInfo } from "../interfaces/IMovies";

export const useFetchMovieData = (urlEndpoint : string, page: number): IMovieDataResponse => {
    const [data, setData] = useState<IMovieInfo[]>([]);
    const [hasNextPage, setHasNextPage] = useState<boolean>(false);
    const [loadingData, setLoadingData] = useState<boolean>(true);
    const prevUrlEndPoint = useRef<string>();
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzM5ZmFhMGM1MjljOTJiZjc3ZGJiOGZiMzY5M2FkOSIsInN1YiI6IjY1NjJiNTM5N2RmZGE2NTkzMDRiODAwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YTDSpzb62UNEq6p2XPaWGEZKg-9FPbH3wGpZZzOqawc` 
        }
    };
    
    useEffect(() => {
        console.log("Inside useEffect 2")
        setData([]);
    },[urlEndpoint])

    useEffect(() => {
        async function fetchMoviesData(urlEndPoint:string) {
            if(prevUrlEndPoint.current !== urlEndPoint && page !== 1) {
                return;
            }
            const responseData = await fetch(`https://api.themoviedb.org/3/movie/${urlEndPoint}?&page=${page}`, options);
            prevUrlEndPoint.current = urlEndPoint;
            const moveData: any = await responseData.json();
            if(moveData.total_pages) {
                if(moveData.total_pages > page) {
                    setHasNextPage(true);
                } else {
                    setHasNextPage(false);
                }
            }
            if(moveData.results?.length) {
                setData((data) => [...data, ...moveData.results]);
                setLoadingData(false);
            }
        }
        console.log("Inside useEffect 3")
        fetchMoviesData(urlEndpoint);
        
    },[urlEndpoint, page])

    return { data, hasNextPage, loadingData };
}