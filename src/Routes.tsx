import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { MovieDetails, MovieList, PageNotFround, SearchResult } from "./pages";
import RootLayout from "./layouts/RootLayout";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>} errorElement={<PageNotFround />}>
        <Route path="" element={<MovieList urlEndPoint="/now_playing" />}/>
        <Route path="movies/popular"  element={<MovieList urlEndPoint="/popular" />}/>
        <Route path="movies/top" element={<MovieList urlEndPoint="/top_rated" />} />
        <Route path="movies/upcoming" element={<MovieList urlEndPoint="/upcoming" />} />
        <Route path="movies/search" element={<SearchResult />} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Route>
    )
)