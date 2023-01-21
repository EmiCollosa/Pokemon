import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemonsByDb } from '../../Actions/Actions';
import './Clean.css'
export default function Clean () {
    const pikaFilter = useSelector(state=>state.pokemonsFilter);
    const dispatch =useDispatch ();
    return(
        <div>
            {(pikaFilter.length > 0 || !Array.isArray(pikaFilter))&&
            <div className='cleanContainer'>
            <button className='cleanFilter' onClick={() => dispatch (getPokemonsByDb())}>Clean</button>
        </div>
}
</div>
    )
}