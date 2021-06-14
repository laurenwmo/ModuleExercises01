function randomFromArray(astronauts){
   let index = Math.floor(Math.random()*astronauts.length);
   return astronauts[index];
}

//TODO: Export the randomFromArray function.

module.exports = randomFromArray;