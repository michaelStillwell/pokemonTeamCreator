const axios = require('axios');

const baseURL = 'http://pokeapi.salestock.net/api/v2';
let base = [];
let poke = [];

axios
    .get(`${baseURL}/pokemon?limit=151`)
    .then(response => {
        for ( let x = 0; x < 151; x++ ) {
            poke.push(response.data.results[x].name);
        }
        // console.log(poke)
    })
    .catch(console.log);

module.exports = {
    poke
}