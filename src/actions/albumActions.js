import {FETCH_ALBUMS} from './types';

export const fetchAlbums = () => dispatch => {
    console.log('Albums Action')
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res=>res.json())
    .then(alb=>dispatch({
        type: FETCH_ALBUMS,
        payload: alb
    }));
 
}


