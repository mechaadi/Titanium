import React ,{useContext, useReducer}from 'react'
import {albumContext} from './FetchAlbums';

export default function ContextDemo() {
    const album = useContext(albumContext);

    const initialState = 0

    const reducer = (state, action) => {
        switch(action){
            case 'ADD':
                return state + 1;
            case 'SUBTRACT':
                return state - 1;
            case 'RESET':
                return initialState;
            default:
                return state;

        }
    }

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
         {album}
         <h1>{count}</h1>
         <button onClick={()=>dispatch('ADD')}>ADD</button>
         <button onClick={()=>dispatch('SUBTRACT')}>SUBTRACT</button>
         <button onClick={()=>dispatch('RESET')}>RESET</button>
        </div>
    )
}
