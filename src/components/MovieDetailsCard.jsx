import { Datepicker } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../assets/Redux/cartAction";
import Swal from "sweetalert2";

const MovieDetailsCard = ({ movie }) => {


    let today = new Date()
    let yy = today.getFullYear()
    let mm = (today.getMonth()+1).toString().padStart(2,'0')
    let dd = today.getDate().toString().padStart(2,'0')

    let date_str =yy + "-"+ mm + "-" + dd

    let [date, setDate] = useState(date_str);
    let [days, setDays] = useState(1);
    
    let dispatch = useDispatch();
    let cart_items = useSelector(store=>store.cartStore.cart_items)
  

    const handleAddToCart = e =>{
        e.preventDefault()
        let itemExists = cart_items.find(item=>item.id===movie.id)

    if(itemExists){
        Swal.fire('Warning' ,'Movie already in cart', 'error')
    }else{

        dispatch(addToCart({
                ...movie,                                           // this should  be placed here in fisrt
                cart_id: Date.now(),
                date: date,
                no_of_day: days,
                // movie = movie?\
               
            }
        ))
    }
    }
    return (
        <>
            <div className="p-3 border rounded-t-md mt-4 text-3xl font-bold bg-gradient-to-t from-white via-red-300 to-slate-300">Rent This Movie</div>
            <div className="flex justify-between mt-0 mb-4 bg-gray-200 border border-gray-200 rounded-b-lg">
                <Link to="#">
                    <img
                        className="rounded-l-md h-100 w-full h-full"
                        src={movie.image}
                        alt={movie.title}
                    />
                </Link>
                <div className="px-5 font-semibold">
                    <div className="flex items-start flex-col mt-2.5 mb-5 ">
                        <h5 className="text-3xl font-bold text-gray-900 mb-5">
                            {movie.title}
                        </h5>
                        <div className="flex items-start flex-col pl-5">
                        <div className="text-gray-700">Rank On IMDB: {movie.rank}</div>
                            <div className="text-gray-700">Genre: {movie.genre.join(", ")}</div>
                            <div className="text-gray-700">Rating: {movie.rating}</div>
                            <div className="text-gray-700">Released Year: {movie.year}</div>
                            {/* <div className="text-gray-700 text-left">Director: {movie.director}</div>
                            <div className="text-gray-700 text-left">Writers: {movie.writers}</div> */}
                            <div className="text-gray-700 text-left">Description: {movie.description}</div>
                            {/* <div className="text-gray-700 flex justify-start">Watch trailer: {movie.trailer}
                            {/* <iframe src={movie.trailer_embed_link}/>
                            </div> */}
                        </div>
                    </div>


                    <div className="flex justify-between mb-3">                               
                        <label className="">Date:
                        <input type="date" className="h-9 w-auto border border-none rounded-md bg-gradient-to-r from-white via-slate-250 to-slate-300" placeholder="Select date" 
                        onChange={e=>setDate(e.target.value)}
                       min={date} 
                       value={date} 
                       required/>
                        </label>

                        <div className="">
                        <label for="quantity-input">No. of Days: </label>
                        <input type="number" min="1" max="50" placeholder="1" className="h-9 w-16 border-none rounded-md bg-gradient-to-r from-white via-slate-250 to-slate-300 required"
                        onChange={e=>setDays(e.target.value)}
                        />
                        </div>

                        <button
                            className="text-md text-white hover:bg-stone-700 bg-stone-900 border rounded-md py-2 px-3" onClick={handleAddToCart}>
                            Rent Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetailsCard;
