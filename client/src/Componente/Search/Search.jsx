import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {getPokemonsByDb  } from "../../Actions/Actions.js";
import "./Search.css";
const SearchBar = () => {
	const [search, setSearch] = useState('');

	let dispatch = useDispatch();

	const onInputSubmit = (e) => {
		e.preventDefault();
		dispatch(getPokemonsByDb(search))
		setSearch('')
	}

	const onInputChange = (e) => {
		e.preventDefault();
		setSearch(e.target.value)
	}
	
	return (
    <div className='container-search'>
			<form onSubmit={onInputSubmit}>
				<input className='search' type='text' placeholder='Search...' onChange={onInputChange} value={search}/>
				<input className='search-button' type='submit' value='search'/>
			</form>
	</div>
  )
}

export default SearchBar



// export default function Search({setPokeCurrent}) {

//   const dispatch = useDispatch();
//   const pokeFilter = useSelector(state => state.pokemonsFilter)
//   const [inputValue, setInputValue] = useState("");


//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };
//   const handleClick = () =>{
//     dispatch(getPokemonName(inputValue))
//     setInputValue("");
// }
// useEffect(() => {
//     setPokeCurrent(pokeFilter)
// }, [pokeFilter, setPokeCurrent])  //atentos al pokeFilter

// return (
// <div className='container-search'>
//     <input
//         className='search'
//         placeholder="Search your pokemon"
//         type="text"
//         value = {inputValue}              //el value se va actualizando
//         onChange = {handleInputChange} 
//     />
//     <button className='search-button'
//      type='button' onClick={handleClick} >
//       <img className="searchImg"  src="https://img1.ak.crunchyroll.com/i/spire2/7ed10be2e715ca5ba2bd35ffe47af7261527581611_full.png"
//        alt="" /></button>
// </div>
// )
// }
