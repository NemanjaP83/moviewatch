import React, { useState } from 'react'
import MovieCardResult from '../components/MovieCardResult'

const Add = () => {

    const [query, setQuery] = useState('')
    const [results, setResults] = useState([]);

    const getMovie = (e) => {
        e.preventDefault()
        setQuery(e.target.value)

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setResults(data.results)
                } else {
                    setResults([])
                }
            })
    }

    return (
        <div className="add-page section">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text"
                            value={query}
                            name="search"
                            id="movie"
                            placeholder='Search for a movie'
                            onChange={getMovie}
                        />
                    </div>

                    {results.length > 0 && (
                        <ul className="results">
                            {results.map((movie) => (
                            <li key={movie.id}>
                                <MovieCardResult movie={movie} />
                            </li>
                            ))}
                        </ul>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Add
