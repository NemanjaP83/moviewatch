import React, {useEffect, useState} from 'react'

const MovieDetails = ({ match }) => {
    
    const url_details = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`

    const [state, setState] = useState([])
    const [genres, setGenres] = useState({})

    useEffect(() => {
        fetch(url_details)
            .then(response => response.json())
            .then(data => {
                setState(data)
                console.log(data);
                setGenres(data.genres)
            })  
    }, [])
    
    return (
        <div className="movie-overview">
            {state.backdrop_path ? 
                <div>
                    <img
                    src={`https://image.tmdb.org/t/p/original${state.backdrop_path}`}
                    alt={`${state.title} - Poster`}
                />
                </div>       
                :
                <div className='background'></div>
            }
            <div className='movie-overlay'>
                <div className="more-info">
                    <h2><i className="fas fa-film"></i> Overview</h2>
                {Object.keys(genres).map((key, value) => {
                    return (
                        <div key={key} className='genre'>
                            <span className='genre-title'><i className="fas fa-circle"></i>{ genres[key].name }</span>
                        </div>
                        )
                    })}
                    <h2 className='info-purple'>{state.title}</h2>
                    <h4>{ state.tagline }</h4>
                    <p>{state.overview}</p>
                    <span className=''><i className="fas fa-clock"></i>Duration: { state.runtime } min</span>
                    <span className=''><i className="fas fa-star"></i>Rating: { state.vote_average }</span>
                </div>
                
            </div>
        </div>
    )
}

export default MovieDetails
