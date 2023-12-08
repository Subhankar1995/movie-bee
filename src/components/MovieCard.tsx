import { Link } from "react-router-dom"
import { IMovieInfo } from "../interfaces/IMovies"

interface IMovieCardProps {
  movieDetails: IMovieInfo
}

export const MovieCard = ({ movieDetails } : IMovieCardProps) => {
  return (
    <div className="flex flex-col h-[50rem] shadow-md border border-gray-50 dark:border-none dark:bg-gray-800 max-w-sm rounded-md">
      <Link className="h-3/4 cursor-pointer" to={`/movies/${movieDetails.id}`}>
        <img className="rounded-t-md" src={'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path} alt="" />
      </Link>
      <div className="h-1/4 flex flex-col justify-start gap-2 mx-4 mt-3 mb-10"> 
        <Link to={`/movies/${movieDetails.id}`} className="text-2xl font-bold dark:text-white cursor-pointer">{movieDetails.original_title}</Link>
        <p className="overflow-hidden text-ellipsis line-clamp-6 mt-1 text-gray-600 dark:text-gray-300 text-sm">{movieDetails.overview}</p>
      </div>
    </div>
  )
}
