export const MovieCard = ({ movieDetails } : any) => {
  return (
    <div className="flex flex-col shadow-md border border-gray-50 dark:border-none dark:bg-gray-800 max-w-sm rounded-md">
      <img className="max-w-sm rounded-t-md" src={'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path} alt="" />
      <div className="flex flex-col justify-start gap-2 mx-4 mt-2 mb-10"> 
        <h2 className="text-2xl font-bold dark:text-white">{movieDetails.original_title}</h2>
        <p className="overflow-hidden text-ellipsis line-clamp-6 text-gray-600 dark:text-gray-300 text-sm">{movieDetails.overview}</p>
      </div>
    </div>
  )
}
