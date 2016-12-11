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

exports.getName = function(num){
	var name ="";
	switch (num) {
    case 1:
        name = "Bulbasaur";
        break;
    case 2:
       name = "Ivysaur";
        break;
    case 3:
       name = "Venusaur";
        break;
    case 4:
        name = "Charmander";
        break;
    case 5:
        name = "Charmeleon";
        break;
    case 6:
        name = "Charizard";
        break;
	case 7:
        name = "Squirtle";
		break;
	case 8:
        name = "Wartortle";
		break;
	case 9:
        name = "Blastoise";
		break;
	case 10:
        name = "Caterpie";
		break;
	case 11:
        name = "Metapod";
		break;
	case 12:
        name = "Butterfree";
		break;
	case 13:
        name = "Weedle";
		break;
	case 14:
        name = "Kakuna";
		break;
	case 15:
        name = "Beedrill";
		break;
	case 16:
        name = "Pidgey";
		break;
	case 17:
        name = "Pidgeotto";
		break;
	case 18:
        name = "Pidgeot";
		break;
	case 19:
        name = "Rattata";
		break;
	case 20:
        name = "Raticate";
		break;
	case 21:
        name = "Spearow";
		break;
	case 22:
        name = "Fearow";
		break;
	case 23:
        name = "Ekans";
		break;
	case 24:
        name = "Arbok";
		break;
	case 25:
        name = "Pikachu";
		break;
	case 26:
        name = "Raichu";
		break;
	case 27:
        name = "Sandshrew";
		break;
	case 28:
        name = "Sandslash";
		break;
	case 29:
        name = "NidoranF";
		break;
	case 30:
        name = "Nidorina";
		break;
	case 31:
        name = "Nidoqueen";
		break;
	case 32:
        name = "NidoranM";
		break;
	case 33:
        name = "Nidorino";
		break;
	case 34:
        name = "Nidoking";
		break;
	case 35:
        name = "Clefairy";
		break;
	case 36:
        name = "Clefable";
		break;
	case 37:
        name = "Vulpix";
		break;
	case 38:
        name = "Ninetales";
		break;
	case 39:
        name = "Jigglypuff";
		break;
	case 40:
        name = "Wigglytuff";
		break;
	case 41:
        name = "Zubat";
		break;
	case 42:
        name = "Golbat";
		break;
	case 43:
        name = "Oddish";
		break;
	case 44:
        name = "Gloom";
		break;
	case 45:
        name = "Vileplume";
		break;
	case 46:
        name = "Paras";
		break;
	case 47:
        name = "Parasect";
		break;
	case 48:
        name = "Venonat";
		break;
	case 49:
        name = "Venomoth";
		break;
	case 50:
        name = "Diglett";
		break;
	case 51:
        name = "Dugtrio";
		break;
	case 52:
        name = "Meowth";
		break;
	case 53:
        name = "Persian";
		break;
	case 54:
        name = "Psyduck";
		break;
	case 55:
        name = "Golduck";
		break;
	case 56:
        name = "Mankey";
		break;
	case 57:
        name = "Primeape";
		break;
	case 58:
        name = "Growlithe";
		break;
	case 59:
        name = "Arcanine";
		break;
	case 60:
        name = "Poliwag";
		break;
	case 61:
        name = "Poliwhirl";
		break;
	case 62:
        name = "Poliwrath";
		break;
	case 63:
        name = "Abra";
		break;
	case 64:
        name = "Kadabra";
		break;
	case 65:
        name = "Alakazam";
		break;
	case 66:
        name = "Machop";
		break;
	case 67:
        name = "Machoke";
		break;
	case 68:
        name = "Machamp";
		break;
	case 69:
        name = "Bellsprout";
		break;
	case 70:
        name = "Weepinbell";
		break;
	case 71:
        name = "Victreebel";
		break;
	case 72:
        name = "Tentacool";
		break;
	case 73:
        name = "Tentacruel";
		break;
	case 74:
        name = "Geodude";
		break;
	case 75:
        name = "Graveler";
		break;
	case 76:
        name = "Golem";
		break;
	case 77:
        name = "Ponyta";
		break;
	case 78:
        name = "Rapidash";
		break;
	case 79:
        name = "Slowpoke";
		break;
	case 80:
        name = "Slowbro";
		break;
	case 81:
        name = "Magnemite";
		break;
	case 82:
        name = "Magneton";
		break;
	case 83:
        name = "Farfetch'd";
		break;
	case 84:
        name = "Doduo";
		break;
	case 85:
        name = "Dodrio";
		break;
	case 86:
        name = "Seel";
		break;
	case 87:
        name = "Dewgong";
		break;
	case 88:
        name = "Grimer";
		break;
	case 89:
        name = "Muk";
		break;
	case 90:
        name = "Shellder";
		break;
	case 91:
        name = "Cloyster";
		break;
	case 92:
        name = "Gastly";
		break;
	case 93:
        name = "Haunter";
		break;
	case 94:
        name = "Gengar";
		break;
	case 95:
        name = "Onix";
		break;
	case 96:
        name = "Drowzee";
		break;
	case 97:
        name = "Hypno";
		break;
	case 98:
        name = "Krabby";
		break;
	case 99:
        name = "Kingler";
		break;
	case 100:
        name = "Voltorb";
		break;
	case 101:
        name = "Electrode";
		break;
	case 102:
        name = "Exeggcute";
		break;
	case 103:
        name = "Exeggutor";
		break;
	case 104:
        name = "Cubone";
		break;
	case 105:
        name = "Marowak";
		break;
	case 106:
        name = "Hitmonlee";
		break;
	case 107:
        name = "Hitmonchan";
		break;
	case 108:
        name = "Lickitung";
		break;
	case 109:
        name = "Koffing";
		break;
	case 110:
        name = "Weezing";
		break;
	case 111:
        name = "Rhyhorn";
		break;
	case 112:
        name = "Rhydon";
		break;
	case 113:
        name = "Chansey";
		break;
	case 114:
        name = "Tangela";
		break;
	case 115:
        name = "Kangaskhan";
		break;
	case 116:
        name = "Horsea";
		break;
	case 117:
        name = "Seadra";
		break;
	case 118:
        name = "Goldeen";
		break;
	case 119:
        name = "Seaking";
		break;
	case 120:
        name = "Staryu";
		break;
	case 121:
        name = "Starmie";
		break;
	case 122:
        name = "Mr. Mime";
		break;
	case 123:
        name = "Scyther";
		break;
	case 124:
        name = "Jynx";
		break;
	case 125:
        name = "Electabuzz";
		break;
	case 126:
        name = "Magmar";
		break;
	case 127:
        name = "Pinsir";
		break;
	case 128:
        name = "Tauros";
		break;
	case 129:
        name = "Magikarp";
		break;
	case 130:
        name = "Gyarados";
		break;
	case 131:
        name = "Lapras";
		break;
	case 132:
        name = "Ditto";
		break;
	case 133:
        name = "Eevee";
		break;
	case 134:
        name = "Vaporeon";
		break;
	case 135:
        name = "Jolteon";
		break;
	case 136:
        name = "Flareon";
		break;
	case 137:
        name = "Porygon";
		break;
	case 138:
        name = "Omanyte";
		break;
	case 139:
        name = "Omastar";
		break;
	case 140:
        name = "Kabuto";
		break;
	case 141:
        name = "Kabutops";
		break;
	case 142:
        name = "Aerodactyl";
		break;
	case 143:
        name = "Snorlax";
		break;
	case 144:
        name = "Articuno";
		break;
	case 145:
        name = "Zapdos";
		break;
	case 146:
        name = "Moltres";
		break;
	case 147:
        name = "Dratini";
		break;
	case 148:
        name = "Dragonair";
		break;
	case 149:
        name = "Dragonite";
		break;
	case 150:
        name = "Mewtwo";
		break;
	case 151:
        name = "Mew";
		break;
	}
	return name;
}


