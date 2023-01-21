import React from 'react'
import {Link} from 'react-router-dom';
import Form from '../../Componente/Form/Form'
import "./PokemonCreate.css";

export default function PokemonCreate() {
    return (
    <div>
        <div className='nav'>
            <img height={'30px'}
             src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-house-icon-png-image_695726.jpg" />
            <Link to={'/home'}>
            
            <a>Return to home</a>
            </Link>
        </div>
        <Form/>
    </div>
    
    )
}
