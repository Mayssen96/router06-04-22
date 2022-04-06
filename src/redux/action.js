import {ADD_MOVIE,DELETE_MOVIE} from './action-type'

export const addMovie = (data) => {
return {
    type : ADD_MOVIE,
    payload : data
}

}
export const deleteMovie = (id) => {
    return {
        type : DELETE_MOVIE,
        payload : id
    }
    
    }