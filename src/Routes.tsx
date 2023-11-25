import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { MovieDetails, MovieList, PageNotFround, SearchResult } from "./pages";
import RootLayout from "./layouts/RootLayout";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>} errorElement={<PageNotFround />}>
        <Route path="" element={<MovieList />}/>
        <Route path="movies/popular" element={<MovieList />}/>
        <Route path="movies/top" element={<MovieList />} />
        <Route path="movies/upcoming" element={<MovieList />} />
        <Route path="movies/search" element={<SearchResult />} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Route>
    )
)