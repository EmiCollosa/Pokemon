import React from "react";
import {Link} from 'react-router-dom';
import './NavBar.css'
export default function NavBar() {
    return (
        <div className="nav-bar">
            <div className="container">
                <Link to={'/'}>
                    <img className="PikaBusqueda"
                     src="https://png.pngitem.com/pimgs/s/107-1075564_pokeballs-heal-ball-pokemon-hd-png-download.png"
                alt="Pokemonlogo" width='200px' 
                ></img>

                
                 </Link>
                <h1>Proyect Pokemon Api <img className="LogoPi" src="https://www.bungalowsclub.com/info/wp-content/uploads/2016/08/pokemon-4-1200x0.jpg"></img></h1>
                 <Link to={"/create"}>
                 <button name='Create' className='buttoncreador'>Create your pokemon</button>
                 </Link>

                 
            </div>
        </div>
    )
};