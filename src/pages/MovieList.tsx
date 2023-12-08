import { MovieCard } from "../components";
import LoaderCard from "../components/LoaderCard";
import { useFetchMovieData } from "../hooks/useFetch";
import { useState, useRef, useCallback, useEffect } from "react";

interface MovieListProps {
  urlEndPoint: string;
}

const MovieList = ({ urlEndPoint }: MovieListProps) => {
  const dummyLoaderList = [1,2,3];
  
  useEffect(() => {
    window.scrollTo(0,0);
  },[urlEndPoint]);
  
  const { data: movieData, hasNextPage, loadingData, fetchNextSetOfData } = useFetchMovieData(urlEndPoint);
  
  const lastElementObserver = useRef<IntersectionObserver>();
  const lasElementRef = useCallback((node: HTMLDivElement) => {
    if(loadingData) return;
    if(!hasNextPage) return;
    if(lastElementObserver.current) lastElementObserver.current.disconnect();
    lastElementObserver.current = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        console.log("found element")
        fetchNextSetOfData();
      }
    })
    if(node) {
      lastElementObserver.current.observe(node);
    }
    }, [loadingData, hasNextPage]
  );

  return (
    <main className="max-w-7xl m-auto pb-10">
      <div className="flex flex-wrap justify-center gap-7 mt-8">
        {movieData?.map((movie, index) => {
          return (
            <div ref={movieData.length === index+1 ? lasElementRef : undefined} className={`p-0 m-0 ${movie.id}`} key={urlEndPoint + movie.id}>
              <MovieCard movieDetails={movie}></MovieCard>
            </div>
          );
        })}
        {dummyLoaderList?.map((listItem, index) => <LoaderCard key={index}/>)}
      </div>
    </main>
  );
};

export default MovieList;
