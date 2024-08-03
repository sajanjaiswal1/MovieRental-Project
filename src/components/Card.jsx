import React from "react";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  //image, title, genre, rating, year, description
  return (
    <>
      <div className="mt-4 w-full max-w-80 bg-gray-200 border rounded-lg">
        <Link to="#">
          <img className="p-3 rounded-t-lg " src={movie.image} />
        </Link>
        <div className="px-5 pb-5">
          <Link to="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
          </Link>
          <div className="flex items-start flex-col mt-2.5 mb-5 font-semibold">
            <div className="flex items-center space-x-1">
              Genre: {movie.genre.join(", ")}
            </div>
            <div className="flex items-center space-x-1">
              Rating: {movie.rating}
            </div>
            {/* <div className="flex items-center space-x-1 rtl:space-x-reverse">Year: {movie.year}</div> */}
            <div className="flex items-center space-x-1 text-left">
              Discription: {movie.description}
            </div>
            
          </div>
          <div className="flex items-center justify-between bottom-0">
            <span className="text-2xl font-bold text-gray-900 ">
              Released Year {movie.year}
            </span>
            <Link
              to={`/movie/${movie.id}`}
              className="text-md  text-white hover:bg-stone-700 bg-stone-900 border rounded-md p-2 hover:transform transition-all hover:scale-110"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

