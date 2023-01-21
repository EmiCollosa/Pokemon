import React from "react";
import { useEffect, useState } from "react";
import Cards from '../Cards/Cards';
import Clean from '../Clean/Clean';
import SearchBar from '../Search/Search.jsx';
import TypesPokemons from '../TypesPokemons/typePokemon';
import Pagination from '../Pagination/Pagination';
import Sort from '../Sort/Sort';
import NotFound from '../notFound/notFound.jsx';

export default function Pokedex({ totalPoke }) {
    const cards = 12;
    const [pokeCurrent, setPokeCurrent] = useState(totalPoke); //lo cargo
  
    useEffect(() => {
      setPokeCurrent([...totalPoke]);
    }, [totalPoke]);
  
    useEffect(() => {
      setPokeCurrent([...totalPoke].slice(0, cards)); //copia del totalPoke
    }, [totalPoke]);
  
    return (
      <div>
        <SearchBar setPokeCurrent={setPokeCurrent} />
        <TypesPokemons setPokeCurrent={setPokeCurrent} />
  
        <Sort
          totalPoke={totalPoke}
          pokeCurrent={pokeCurrent}
          setPokeCurrent={setPokeCurrent}
        />
  
        <Clean />
        {pokeCurrent.length > 0 ||
        (pokeCurrent.name !== undefined && pokeCurrent.name !== "AxiosError") ? (
          <Cards pokeCurrent={pokeCurrent} />
        ) : (
          <NotFound />
        )}
  
        <Pagination totalPoke={totalPoke} setPokeCurrent={setPokeCurrent} />
      </div>
    );
  }