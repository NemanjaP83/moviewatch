
export const AppReducer = (state, actions) => {
    switch (actions.type) {
        case 'ADD_MOVIE_TO_WATCHLIST':
            return {
                ...state,
                watchlist: [actions.payload, ...state.watchlist]
            }
        case 'REMOVE_MOVIE_FROM_WATCHLIST':
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== actions.payload )
            }
        case 'ADD_MOVIE_TO_WATCHED':
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== actions.payload.id),
                watched: [actions.payload, ...state.watched]
            }
        case 'MOVE_TO_WATCHLIST': 
            return {
                ...state,
                watched: state.watched.filter(movie => movie.id !== actions.payload.id),
                watchlist: [actions.payload, ...state.watchlist]
            }
        case 'REMOVE_FROM_WATCHED':
            return {
                ...state,
                watched: state.watched.filter(movie => movie.id !== actions.payload),
                // watchlist: [actions.payload, ...state.watchlist]
            }
            
        default:
            return state;
    }
}