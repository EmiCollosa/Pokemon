const { Type } = require("../db.js")
const axios = require("axios");

const getTypes = async (req, res) => {
  const data = await axios({
    method: "get",
    url: "https://pokeapi.co/api/v2/type",
    headers: { "Accept-Encoding": "null" },
  }).then((response) => response.data.results); 

  const types = data.forEach(async (t) => {
    console.log;
    await Type.findOrCreate({
      where: {
        name: t.name,
      },
    });
  });

  res.json(await Type.findAll());
};

module.exports = {
  getTypes,
};