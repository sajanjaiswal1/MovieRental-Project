import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  let cart_items = useSelector(store => store.cartStore.cart_items)
  let num = cart_items.length

  // let userInfo = useSelector(store => store.userInfoStore)
  // let isLoggedIn = userInfo.isLoggedIn

  let dispatch = useDispatch()
let {isLoggedIn} = useSelector(store=>store.userInfoStore)
const handleLogout = () =>{
dispatch({type:"LOGOUT"})
}
  return (
    <>
      <nav>
        <div className="flex justify-between items-center mx-auto max-w-screen-2xl p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3"
          >
            <img
              src="logo.png"
              className="h-8"
              alt="movie king Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap hover:underline">
              Movie King
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            {
              isLoggedIn?
              <span
                className="text-md  text-white bg-stone-900 border rounded-md px-4 py-1 hover:transform transition-all hover:scale-110"
              onClick={handleLogout} >
                Logout
              </span>
              :
              <Link
                to="login"
                className="text-md  text-white bg-stone-900 border rounded-md px-4 py-1 hover:transform transition-all hover:scale-110"
              >
                Login
              </Link>
            }

            <div className="relative   hover:transform transition-all hover:scale-110">

              <Link
                to={"cart"}
                alt="Go to cart"
              >
                <span className="absolute -mt-1 ms-0.5  text-white font-semibold bg-stone-800 border rounded-full px-1 text-xs">{num > 0 && num}</span>
                <svg className="w-8 h-8 text-gray-800 hover:text-gray-700 hover:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-200 border rounded-md">
        <div className="max-w-screen-xl p-3">
          <ul className="flex flex-row items-center font-medium">
            <li className="hover:transform transition-all hover:scale-110">
              <Link
                to={"/"}
                className="text-gray-900"
              >
                Home
              </Link>
            </li>
            <li className="pl-4 hover:transform transition-all hover:scale-110">
              <Link
                to="#"
                className="text-gray-900"
              >
                Latest Movies
              </Link>
            </li>
            <li className="pl-4 hover:transform transition-all hover:scale-110">
              <Link
                to="#"
                className="text-gray-900"
              >
                Most Watched
              </Link>
            </li>
            <li className="pl-4 hover:transform transition-all hover:scale-110">
              <Link
                to="#"
                className="text-gray-900"
              >
                Most Rated
              </Link>
            </li>
            <li className="pl-4 hover:transform transition-all hover:scale-110">
              <Link
                to="/search"
                className="text-gray-900"
              >

                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>

              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
