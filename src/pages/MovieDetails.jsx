import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieDetailsCard from "../components/MovieDetailsCard";

const MovieDetails = () => {
    let { id } = useParams();
    let [movie, setMovie] = useState({});

    let [loading, setLoading] = useState(true);

    let movies =useSelector(store=>store.movieStore.movies)            //for fetching data from local storage

    // const url = `https://imdb-top-100-movies1.p.rapidapi.com/${id}`;
    // const options = {
    //     method: "GET",
    //     headers: {
    //         'X-RapidAPI-Key': 'd97322fcaamsh2df82ffe1cd99adp16d68fjsn9ae3723d0810',
    //         'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
    //     },
    // };

    useEffect(() => {
        setMovie(movies.find(item=>item.id==id))                //for fetching data from local storage
       setLoading(false);


    //     fetch(url, options)
    //         .then((response) => response.json())
    //         .then((result) => {
    //             setLoading(false);
    //             setMovie(result);
    //         })
    //         .catch((error) => console.error(error));
    //
 }, []);

    return (
        <>
            {
                loading ?
                    <div>Movie Loading...</div>
                    :
                    movie?
                        <MovieDetailsCard movie={movie} />
                        :
                        <div className="bg-slate-300 py-3 px-4  m-5 border rounded-md">
                            Movie Not found
                        </div>
            }
        </>
    );
};

export default MovieDetails;
