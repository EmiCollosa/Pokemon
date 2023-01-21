import React from "react";
import { Link } from "react-router-dom";
import imgType from "../../Access/Ayudas/imgType";
import "./Card.css";

export default function Card({ id, name, img, types }) {
  return (
    <div>
      <div className="card">
        <div className="face front">
          <div className={types[0].name}>
            {img !== true ? (
              <img src={img} alt="image" />
            ) : (
              <img
                src="https://www.pngmart.com/files/2/Pokeball-PNG-Photos.png"
                alt=""
              />
            )}
            <h3>{name}</h3>
          </div>
        </div>
        <div className="face back">
          <div className="type-container">
            <h1>{name}</h1>
            <h2>Type</h2>
            <div className="img-types">
              {types?.map((type) => {
                return <img src={imgType[type?.name]} />;
              })}
            </div>
            <Link to={"/detail:" + id}>
              <p>Details</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}