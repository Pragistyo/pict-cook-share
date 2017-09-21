const axios = require('axios')

var instance = axios.create({
  baseURL: `https://community-food2fork.p.mashape.com/search?key=3f0eb392931eb697ef53ea1cf86478f8&q=${keyword}`,
  headers: {
    'X-Mashape-Key': 'ft6JTtlfammshF6NyVGY4XGOwdxnp1VENsbjsnlbs3PxWiJZdd',
    'Accept': 'application/json'
  }
});

module.exports = {
  instance
}