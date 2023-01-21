import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPokemonByIdName } from "../../Actions/Actions.js";
import Details from "../../Componente/Details/Details.jsx";
import { Link } from "react-router-dom";
import "./PokemonDetail.css";
import Loading from "../Loading/Loading.jsx";

export default function PokemonDetail() {
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPokemonByIdName(id.slice(1, id.length)));
  }, [dispatch]);

  useEffect(() => {
    console.log(pokemonDetail);
  }, [pokemonDetail]);

  const { sprite, life, types, name, height, attack, defense, speed, weight } =
    pokemonDetail;

    return (
      <div className="container-pokemon-detail">
        <div className="nav">
          <Link to={"/home"}>
            <img
              height={"30px"}
              src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39092/preview.png"
              alt=""
            />
            <a>Return to home</a>
          </Link>
        </div>
        {Object.values(pokemonDetail).length ? (
        <Details
          name={name}
          sprite={sprite}
          life={life}
          types={types}
          height={height}
          attack={attack}
          defense={defense}
          speed={speed}
          weight={weight}
          id={id}
        ></Details>
      ) : (
        <Loading />
      )}
    </div>
  );
}
