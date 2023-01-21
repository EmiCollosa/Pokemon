import React from "react";
import { useEffect } from "react";
import imgTypes from "../../Access/Ayudas/imgType.js";
import "./details.css";

export default function Details(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <div className="detail-container">
      <div className="card-container">
        <div className="detail-card">
          <h2>{props.name}</h2>
        </div>
        <div className="info-container">
          <div class="basic-info">
            <div className="hover-box hw-container">
              <h2>Height: {Number((props.height * 0.1).toFixed(2))}m</h2>
            </div>

            <div className="hover-box hw-container">
              <h2>Weight: {Number((props.weight * 0.1).toFixed(2))}kg</h2>
            </div>
          </div>

          <div class="hover-box id-container">
            <h2>Id: {props.id.slice(1, props.id.length)}</h2>
          </div>

          <div class="hover-box specific-info">
            <p>
              <b>Life: {props.life}</b>
            </p>
            <p>
              <b>Attack: {props.attack}</b>
            </p>
            <p>
              <b>Defense: {props.defense}</b>
            </p>
            <p>
              <b>Speed: {props.speed}</b>
            </p>
          </div>

          <div class="hover-box types-container">
            <h2>Type</h2>
            {props.types[0] &&
              props.types.map((t) => {
                return (
                  <p>
                    <img src={imgTypes[t.name]} />
                    <b>{t.name}</b>
                  </p>
                );
              })}
          </div>
        </div>
      </div>
      <div className="img-container">
        <img className=" hover-box sprite" src={props.sprite} alt="" />
      </div>
    </div>
  );
}