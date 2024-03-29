const { Pokemon, Type } = require("../db.js");
const axios = require("axios")


const getPokemonsApi = async () => {

  const pokemons = [];

  
  const data = await axios({
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon?limit=40",
    headers: { "Accept-Encoding": "null" },
  }).then((response) => {
    console.log("hola", response.data)
   return response.data.results;
  })
  
  const urls = data.map((d) =>
    axios({
      method: "get",
      url: d.url,
      headers: { "Accept-Encoding": "null" },
    })
  );


  const pokemonsApi = await axios.all(urls).then((pokemon) => {
    pokemon.map((p) => {
      pokemons.push({
        id: p.data.id,
        name: p.data.name.charAt(0).toUpperCase() + p.data.name.slice(1),
        hp: p.data.stats[0].base_stat,
        attack: p.data.stats[1].base_stat,
        defense: p.data.stats[2].base_stat,
        speed: p.data.stats[5].base_stat,
        height: p.data.height,
        weight: p.data.weight,
        image: p.data.sprites.other.dream_world.front_default,
        types: p.data.types.map((e) => e.type.name),
      });
    });
  });

  return pokemons;
};


const getPokemonsDb = async () => {
  const getter = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return getter;
};

const getBothPokemons = async () => {
  const pokemonsApi = await getPokemonsApi();
  const pokemonsDb = await getPokemonsDb();
  const pokemons = pokemonsApi.concat(pokemonsDb);
  return pokemons;
};

const findPokemonDb = async (value) => {
  if (value.length === 36) {
    console.log("Buscando en DB");
    const pokemonDb = await Pokemon.findOne({
      where: {
        id: value,
      },
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return [{ ...pokemonDb._previousDataValues }];
  }

  
  const pokemonDb = await Pokemon.findOne({
    where: {
      name: value,
    },
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  if (pokemonDb) return [{ ...pokemonDb._previousDataValues }];
  return 0;
};

const findPokemonApi = async (value) => {
  const data = await axios({
    method: "get",
    url: `https://pokeapi.co/api/v2/pokemon/${value}`,
    headers: { "Accept-Encoding": "null" },
  }).then((response) => response.data);

  const pokemon = {};
  pokemon["id"] = data.id;
  pokemon["name"] = data.name;
  pokemon["hp"] = data.stats[0].base_stat;
  pokemon["attack"] = data.stats[1].base_stat;
  pokemon["defense"] = data.stats[2].base_stat;
  pokemon["speed"] = data.stats[5].base_stat;
  pokemon["height"] = data.height;
  pokemon["weight"] = data.weight;
  pokemon["image"] = data.sprites.other.dream_world.front_default;
  pokemon["types"] = data.types.map((e) => e.type.name);

  if (data) return [{ ...pokemon }];
  return 0;
};

module.exports = {
  getPokemonsApi,
  getPokemonsDb,
  getBothPokemons,
  findPokemonDb,
  findPokemonApi,
};