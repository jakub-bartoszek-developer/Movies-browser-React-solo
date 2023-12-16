import { useEffect, useRef } from "react";
import { Container } from "../../components/Container/styled";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";

import { PopularMovies } from "./PopularMovies/PopularMovies";
import { SearchedMovies } from "./SearchedMovies/SearchedMovies";
import { useDispatch } from "react-redux";
import { setCategory } from "../../utils/redux/searchSlice";

export const Movies = () => {
 const [searchParams, setSearchParams] = useSearchParams();
 const dispatch = useDispatch();

 useEffect(() => {
  window.scrollTo(0, 0);
  dispatch(setCategory("movie"));
 }, []);

 return (
  <Container>
   {searchParams.get("search") ? <SearchedMovies /> : <PopularMovies />}
  </Container>
 );
};
