import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";

const Homepage = () => {
  // let [ movies, setMovies] = useState([])
  let [length, setLength] = useState(6);

  let dispatch = useDispatch();

  let movieStore = useSelector((store) => store.movieStore);
  let movies = movieStore.movies;

  // let {movies} = useSelector((store) => store.movieStore);

  const url = "https://imdb-top-100-movies.p.rapidapi.com/";
  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': 'd97322fcaamsh2df82ffe1cd99adp16d68fjsn9ae3723d0810',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    },
  };

  useEffect(() => {
    movieStore?.movies?.length <= 0 &&
      fetch(url, options)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          dispatch({
            type: "LOAD_MOVIES",
            payload: response,
          });
        })
        .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-between">
        {movies.length > 0 &&
          movies.slice(0, length).map((movie) => {
            // console.log(movie);
            // return <li>{movie.title}</li>;
            // return <Card key={movie.id} title={movie.title} description={movie.description} image={movie.image} rating={movie.rating} genre={movie.genre[0]} year={movie.year}/>
            return <Card key={movie.id} movie={movie} />;
          })}
      </div>
      {length < 100 && (
        <button
          className="text-md  text-white hover:bg-stone-700 bg-stone-900 border rounded-md m-3 px-3 py-2"
          onClick={() => {
            setLength(length + 6);
          }}
        >
          Show More
        </button>
      )}
    </>
  );
};

export default Homepage;
