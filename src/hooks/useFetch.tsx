import { useEffect, useState, useRef } from "react"
import { IMovieDataResponse, IMovieInfo } from "../interfaces/IMovies";

export const useFetchMovieData = (urlEndpoint : string): IMovieDataResponse => {
    const [pageToFetch, setPageToFetch] = useState<number>(1);
    const [data, setData] = useState<IMovieInfo[]>([]);
    const [hasNextPage, setHasNextPage] = useState<boolean>(false);
    const [loadingData, setLoadingData] = useState<boolean>(true);
    const previousUrlEndPoint = useRef<string>();
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzM5ZmFhMGM1MjljOTJiZjc3ZGJiOGZiMzY5M2FkOSIsInN1YiI6IjY1NjJiNTM5N2RmZGE2NTkzMDRiODAwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YTDSpzb62UNEq6p2XPaWGEZKg-9FPbH3wGpZZzOqawc` 
        }
    };
    
    useEffect(() => {
        setPageToFetch(1);
        setData([]);
    },[urlEndpoint])
    
    useEffect(() => {
        if(previousUrlEndPoint.current !== urlEndpoint && pageToFetch!==1) {
            return;
        }
        fetchMoviesData(urlEndpoint);
    }, [urlEndpoint,pageToFetch])
    
    async function fetchMoviesData(urlEndPoint:string) {
        const responseData = await fetch(`https://api.themoviedb.org/3/movie/${urlEndPoint}?&page=${pageToFetch}`, options);
        const moveData: any = await responseData.json();
        if(moveData.total_pages) {
            if(moveData.total_pages > pageToFetch) {
                setHasNextPage(true);
            } else {
                setHasNextPage(false);
            }
        }
        if(moveData.results?.length) {
            if(urlEndPoint !== previousUrlEndPoint.current) {
                setData([...moveData.results])
            } else {
                setData((data) => [...data, ...moveData.results]);
            }
            setLoadingData(false);
        }
        previousUrlEndPoint.current = urlEndPoint;
    }

    function fetchNextSetOfData() {
        setPageToFetch(prevPageNumber => prevPageNumber + 1);
    }

    return { data, hasNextPage, loadingData, fetchNextSetOfData };
}

export const useFetchMovieDetails = () => {
    
}