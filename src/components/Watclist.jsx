import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard'

const Watclist = () => {
    const { watchlist } = useContext(GlobalContext)
    return (
        <div className='section'>
            <div className="movie-page">
                <div className="container">
                    <div className="header">
                        <h1 className="heading">
                            My Watchlist
                        </h1>
                        <span className="count-pill">
                            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
                        </span>
                    </div>
                    <div className="movie-grid">
                    {watchlist.map((movie) => {
                        return (<MovieCard movie={movie} key={movie.id} type='watchlist'/>)
                    })}
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Watclist

