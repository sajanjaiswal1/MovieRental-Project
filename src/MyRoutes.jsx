import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Layouts from './components/Layouts'
import Homepage from './components/Homepage'
import MovieDetails from './pages/MovieDetails'
import { useSelector } from 'react-redux'
import Cart from './pages/Cart'
import Search from './pages/Search'
import Login from './pages/Login'

const MyRoutes = () => {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path ='/' element={<Layouts/>}>
            <Route index element={<Homepage/>}/>
            <Route path='movie/:id' element={<MovieDetails/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='login' element={<Login/>}/>

            </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default MyRoutes