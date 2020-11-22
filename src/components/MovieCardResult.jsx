import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'

const MovieCardResult = ({ movie }) => {

    const { addMovieToWatchlist, watchlist, watched } = useContext(GlobalContext)
    const storedMovie = watchlist.find(clickedMovie => clickedMovie.id === movie.id)
    const storedMovieWatched = watched.find( movieWathed => movieWathed.id === movie.id)
    const isMovieAdded = storedMovie ? true : storedMovieWatched ? true : false
    
    const showMore = (movie) => {
        console.log(movie.overview);
    }

    return (
        <div id='card'>
            <div className="reuslt-card">
                <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title} - Poster`}
                    />
                    ) : (
                        <div className="filler-poster"><span>{movie.title}</span><br/><br/> NO POSTER</div>
                        )}
                </div>
            </div>

            <div className="info">
                    <div className="header">
                        <h3 className="title">{movie.title}</h3>
                        <h4 className="release-date">
                            Release year - {movie.release_date ? movie.release_date.substring(0, 4) : '-'}
                    </h4>
                    {/* <h4>Rating: { movie.vote_average }</h4> */}
                    </div>

                <div className="controls">
                    <button disabled={isMovieAdded} className="btn" onClick={() => addMovieToWatchlist(movie)}>Add to watchlist</button>
                    <Link to={`${movie.id}`}><button className="btn btn-info" onClick={() => showMore(movie)}>More</button></Link>
                </div>

            </div>
        </div>
    )
}

export default MovieCardResult
