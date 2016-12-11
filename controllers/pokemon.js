var exports = module.exports = {};

exports.POKEMON_LIST = {};

var HEIGHT = 700;
var WIDTH = 1000;

exports.pokemon = function(idNum,numPokemon) {
	var self = {
		x:Math.random() * 1000,
		y:Math.random() * 700,
		width:80,
		height:80,
		id : idNum,
		num : numPokemon,
	};
	
	console.log("Create");
	exports.POKEMON_LIST[self.id] = self;
	return self;
	
}
exports.checkIfClicked = function(x,y){
	for(var i in exports.POKEMON_LIST){
		var pokemon = exports.POKEMON_LIST[i];
		
		if((x > pokemon.x) && (x < pokemon.x + pokemon.width) && (y > pokemon.y) && (y < pokemon.y + pokemon.height)){
			pokemon.x = -100;
			pokemon.y = -100;
			return [true, pokemon.num];
		}
	}
	return [false, 0];
}

exports.deletePokemon = function(){
	exports.POKEMON_LIST = [];
}

exports.getPokemonList = function() {
     return exports.POKEMON_LIST;
}

exports.updatePokemon = function(){
	
	var pack = [];
	for(var i in exports.POKEMON_LIST){ console.log(i);
		var pokemon = exports.POKEMON_LIST[i];

			pack.push({
				x:pokemon.x,
				y:pokemon.y,
				width:pokemon.width,
				height:pokemon.height,
				id:pokemon.id,
				num:pokemon.num
			});	
	}
	return pack;
}


