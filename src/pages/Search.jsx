import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'

const Search = () => {
    let [search, setSearch] = useState('')
    let movies = useSelector(store => store.movieStore.movies)
    let [filteredResult, setFilteredResult] = useState([])
    let [length, setLength] = useState(6)

    useEffect(() => {
        let result = movies.filter(movie => movie.title.toLowerCase().match(search.toLowerCase()))
        setFilteredResult(result)

    }, [search])
    return (
        <div className='m-auto'>
            <input type='search' onChange={e => setSearch(e.target.value)} className='broder rounded-md border-stone-800 w-1/2 pt-1/2 mt-3 ' placeholder='Search Here...'/>
            <div className="result">{search}
                <div className="flex flex-wrap justify-evenly">
                    {
                        filteredResult.length > 0 &&
                        filteredResult?.slice(0, length).map(movie => {
                            return <Card key={movie.id} movie={movie} />
                        })
                    }
                </div>
            </div>{

                length < filteredResult.length &&
                <button className='bg-blue-500 px-4 py-2 mx-auto' onClick={() => {
                    setLength(length + 3)
                }}>See More</button>
            }
        </div>
    )
}

export default Search