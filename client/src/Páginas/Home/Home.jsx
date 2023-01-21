import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemonsByDb } from '../../Actions/Actions.js';
import NavBar from '../../Componente/NavBar/NavBar.jsx';
import Pokedex from '../../Componente/PokeDex/PokeDex.jsx';
import Loading from '../Loading/Loading.jsx'
import './Home.css'

export default function Home() {
    const dispatch = useDispatch();
    const totalPoke = useSelector((state) => state.pokemonsTotal);
  
    useEffect(() => {
      dispatch(getPokemonsByDb());
    }, [dispatch]);

    return (
        <div className='Background'>
            <NavBar/>
            {totalPoke.length > 0 ? <Pokedex totalPoke={totalPoke}/> : <Loading/>}
        </div>
    )
    }