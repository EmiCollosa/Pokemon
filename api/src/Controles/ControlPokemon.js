const { Pokemon, Type } = require("../db.js");
const axios = require("axios");
const {
  getPokemonsApi,
  getPokemonsDb,
  getBothPokemons,
  findPokemonDb,
  findPokemonApi,
} = require("../Utils/Utils.js");


const getPokemons = async (req, res) => {

  const { filter, type, attack } = req.query;
  try {
    const pokemons = await getBothPokemons();

    
    if (filter) {
      if (filter === "asc") {
       
        return res.json(
          pokemons.sort((a, b) => {
            let aux;
            a.name.toUpperCase() < b.name.toUpperCase()
              ? (aux = -1)
              : a.name.toUpperCase() > b.name.toUpperCase()
              ? (aux = 1)
              : (aux = 0);
            return aux;
          })
        );
      }

      return res.json(
        
        pokemons.sort((a, b) => {
          let aux;
          b.name.toUpperCase() < a.name.toUpperCase()
            ? (aux = -1)
            : b.name.toUpperCase() > a.name.toUpperCase()
            ? (aux = 1)
            : (aux = 0);
          return aux;
        })
      );
    }

    
    if (attack) {
      if (attack === "asc") {
        
        console.log("FILTRANDO ATTACK  ASCENDING", pokemons.sort((a, b) => a.attack - b.attack))
        return res.json(pokemons.sort((a, b) => a.attack - b.attack));
      }
      console.log("FILTRANDO ATTACK  DESCENDING", pokemons.sort((a, b) => a.attack + b.attack))
      
      return res.json(pokemons.sort((a, b) =>  b.attack - a.attack));
    }

    
    if (type) {
    
      return res.json(
        pokemons.filter((p) => {
          return p.id.length === 36
            ? p.types.some((t) => t.name === type)
            : p.types.includes(type);
        })
      );
    }

    res.json(pokemons);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
};

// GET /pokemons/api
const getPokemonsByApi = async (req, res) => {
  try {
    return res.json(await getPokemonsApi());
  } catch (error) {
    res.status(404).send(error);
  }
};
// GET /pokemons/db
const getPokemonsByDb = async (req, res) => {
  try {
    return res.json(await getPokemonsDb());
  } catch (error) {
    res.status(404).send(error);
  }
};

// GET /pokemons/:id or name
const getPokemonByIdName = async (req, res) => {
  const { id } = req.params;

  try {
    // SEARCHING ON DATABASE
    const pokemonDb = await findPokemonDb(id);
    if (pokemonDb) return res.json(pokemonDb);

    // SEARCHING ON API
    const pokemonApi = await findPokemonApi(id);
    if (pokemonApi) return res.json(pokemonApi);
    throw new Error();
  } catch (error) {
    res.status(404).send("Not Found");
  }
};

// POST /pokemons
const createPokemon = async (req, res) => {
  const { name, hp, attack, defense, speed, height, weight, image, types } =
    req.body;
  console.log(req.body);
  try {
    if (
      !name ||
      !hp ||
      !attack ||
      !defense ||
      !speed ||
      !height ||
      !weight ||
      !types.length
    ) {
      throw new Error("Some parameters are missing");
    }

    const poke = await Pokemon.create({
      name: name.toLowerCase(),
      hp: parseInt(hp),
      attack: parseInt(attack),
      defense: parseInt(defense),
      speed: parseInt(speed),
      height: parseInt(height),
      weight: parseInt(weight),
    });

    const typesDb = await Type.findAll({ where: { name: types } });
    poke.addType(typesDb);

    return res.json(poke);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPokemons,
  getPokemonsByApi,
  getPokemonsByDb,
  getPokemonByIdName,
  createPokemon,
};