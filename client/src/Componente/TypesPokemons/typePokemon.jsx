import React, {useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getTypes, filterType} from '../../Actions/Actions.js';
import imgType from '../../Access/Ayudas/imgType';
import './typePokemon.css';

export default function TypesPokemon({ setPokeCurrent }) {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonsTypes);
  const pokeFilter = useSelector((state) => state.pokemonsFilter);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  useEffect(() => {
    setPokeCurrent(pokeFilter);
  }, [pokeFilter, setPokeCurrent]); //atento cambios filter

  return (
    <div className="contayner-types">
      {types.map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => dispatch(filterType(type))}
        >
          <div className="imageType">
            <img height={"50px"} src={imgType[type]} alt={`Type: ${type}`} />
          </div>
          <span>{type}</span>
        </button>
      ))}
    </div>
  );
}