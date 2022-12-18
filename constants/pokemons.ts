export type LocalPokemonType = {
    name: string;
    url: string;
    sprite: string | null;
    types: string[];
};

const pokemons: LocalPokemonType[] = [{
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "types": ["grass", "poison"]
}, {
    "name": "ivysaur",
    "url": "https://pokeapi.co/api/v2/pokemon/2/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "types": ["grass", "poison"]
}, {
    "name": "venusaur",
    "url": "https://pokeapi.co/api/v2/pokemon/3/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "types": ["grass", "poison"]
}, {
    "name": "charmander",
    "url": "https://pokeapi.co/api/v2/pokemon/4/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "types": ["fire"]
}, {
    "name": "charmeleon",
    "url": "https://pokeapi.co/api/v2/pokemon/5/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    "types": ["fire"]
}, {
    "name": "charizard",
    "url": "https://pokeapi.co/api/v2/pokemon/6/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "types": ["fire", "flying"]
}, {
    "name": "squirtle",
    "url": "https://pokeapi.co/api/v2/pokemon/7/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "types": ["water"]
}, {
    "name": "wartortle",
    "url": "https://pokeapi.co/api/v2/pokemon/8/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    "types": ["water"]
}, {
    "name": "blastoise",
    "url": "https://pokeapi.co/api/v2/pokemon/9/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    "types": ["water"]
}, {
    "name": "caterpie",
    "url": "https://pokeapi.co/api/v2/pokemon/10/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    "types": ["bug"]
}, {
    "name": "metapod",
    "url": "https://pokeapi.co/api/v2/pokemon/11/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    "types": ["bug"]
}, {
    "name": "butterfree",
    "url": "https://pokeapi.co/api/v2/pokemon/12/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    "types": ["bug", "flying"]
}, {
    "name": "weedle",
    "url": "https://pokeapi.co/api/v2/pokemon/13/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    "types": ["bug", "poison"]
}, {
    "name": "kakuna",
    "url": "https://pokeapi.co/api/v2/pokemon/14/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    "types": ["bug", "poison"]
}, {
    "name": "beedrill",
    "url": "https://pokeapi.co/api/v2/pokemon/15/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    "types": ["bug", "poison"]
}, {
    "name": "pidgey",
    "url": "https://pokeapi.co/api/v2/pokemon/16/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    "types": ["normal", "flying"]
}, {
    "name": "pidgeotto",
    "url": "https://pokeapi.co/api/v2/pokemon/17/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    "types": ["normal", "flying"]
}, {
    "name": "pidgeot",
    "url": "https://pokeapi.co/api/v2/pokemon/18/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    "types": ["normal", "flying"]
}, {
    "name": "rattata",
    "url": "https://pokeapi.co/api/v2/pokemon/19/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    "types": ["normal"]
}, {
    "name": "raticate",
    "url": "https://pokeapi.co/api/v2/pokemon/20/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    "types": ["normal"]
}, {
    "name": "spearow",
    "url": "https://pokeapi.co/api/v2/pokemon/21/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    "types": ["normal", "flying"]
}, {
    "name": "fearow",
    "url": "https://pokeapi.co/api/v2/pokemon/22/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    "types": ["normal", "flying"]
}, {
    "name": "ekans",
    "url": "https://pokeapi.co/api/v2/pokemon/23/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    "types": ["poison"]
}, {
    "name": "arbok",
    "url": "https://pokeapi.co/api/v2/pokemon/24/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    "types": ["poison"]
}, {
    "name": "pikachu",
    "url": "https://pokeapi.co/api/v2/pokemon/25/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "types": ["electric"]
}, {
    "name": "raichu",
    "url": "https://pokeapi.co/api/v2/pokemon/26/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    "types": ["electric"]
}, {
    "name": "sandshrew",
    "url": "https://pokeapi.co/api/v2/pokemon/27/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    "types": ["ground"]
}, {
    "name": "sandslash",
    "url": "https://pokeapi.co/api/v2/pokemon/28/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    "types": ["ground"]
}, {
    "name": "nidoran-f",
    "url": "https://pokeapi.co/api/v2/pokemon/29/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    "types": ["poison"]
}, {
    "name": "nidorina",
    "url": "https://pokeapi.co/api/v2/pokemon/30/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    "types": ["poison"]
}, {
    "name": "nidoqueen",
    "url": "https://pokeapi.co/api/v2/pokemon/31/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    "types": ["poison", "ground"]
}, {
    "name": "nidoran-m",
    "url": "https://pokeapi.co/api/v2/pokemon/32/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    "types": ["poison"]
}, {
    "name": "nidorino",
    "url": "https://pokeapi.co/api/v2/pokemon/33/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    "types": ["poison"]
}, {
    "name": "nidoking",
    "url": "https://pokeapi.co/api/v2/pokemon/34/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    "types": ["poison", "ground"]
}, {
    "name": "clefairy",
    "url": "https://pokeapi.co/api/v2/pokemon/35/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    "types": ["fairy"]
}, {
    "name": "clefable",
    "url": "https://pokeapi.co/api/v2/pokemon/36/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    "types": ["fairy"]
}, {
    "name": "vulpix",
    "url": "https://pokeapi.co/api/v2/pokemon/37/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    "types": ["fire"]
}, {
    "name": "ninetales",
    "url": "https://pokeapi.co/api/v2/pokemon/38/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    "types": ["fire"]
}, {
    "name": "jigglypuff",
    "url": "https://pokeapi.co/api/v2/pokemon/39/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    "types": ["normal", "fairy"]
}, {
    "name": "wigglytuff",
    "url": "https://pokeapi.co/api/v2/pokemon/40/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    "types": ["normal", "fairy"]
}, {
    "name": "zubat",
    "url": "https://pokeapi.co/api/v2/pokemon/41/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    "types": ["poison", "flying"]
}, {
    "name": "golbat",
    "url": "https://pokeapi.co/api/v2/pokemon/42/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    "types": ["poison", "flying"]
}, {
    "name": "oddish",
    "url": "https://pokeapi.co/api/v2/pokemon/43/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    "types": ["grass", "poison"]
}, {
    "name": "gloom",
    "url": "https://pokeapi.co/api/v2/pokemon/44/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    "types": ["grass", "poison"]
}, {
    "name": "vileplume",
    "url": "https://pokeapi.co/api/v2/pokemon/45/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    "types": ["grass", "poison"]
}, {
    "name": "paras",
    "url": "https://pokeapi.co/api/v2/pokemon/46/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    "types": ["bug", "grass"]
}, {
    "name": "parasect",
    "url": "https://pokeapi.co/api/v2/pokemon/47/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    "types": ["bug", "grass"]
}, {
    "name": "venonat",
    "url": "https://pokeapi.co/api/v2/pokemon/48/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    "types": ["bug", "poison"]
}, {
    "name": "venomoth",
    "url": "https://pokeapi.co/api/v2/pokemon/49/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    "types": ["bug", "poison"]
}, {
    "name": "diglett",
    "url": "https://pokeapi.co/api/v2/pokemon/50/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    "types": ["ground"]
}, {
    "name": "dugtrio",
    "url": "https://pokeapi.co/api/v2/pokemon/51/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    "types": ["ground"]
}, {
    "name": "meowth",
    "url": "https://pokeapi.co/api/v2/pokemon/52/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    "types": ["normal"]
}, {
    "name": "persian",
    "url": "https://pokeapi.co/api/v2/pokemon/53/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    "types": ["normal"]
}, {
    "name": "psyduck",
    "url": "https://pokeapi.co/api/v2/pokemon/54/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    "types": ["water"]
}, {
    "name": "golduck",
    "url": "https://pokeapi.co/api/v2/pokemon/55/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    "types": ["water"]
}, {
    "name": "mankey",
    "url": "https://pokeapi.co/api/v2/pokemon/56/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    "types": ["fighting"]
}, {
    "name": "primeape",
    "url": "https://pokeapi.co/api/v2/pokemon/57/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    "types": ["fighting"]
}, {
    "name": "growlithe",
    "url": "https://pokeapi.co/api/v2/pokemon/58/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    "types": ["fire"]
}, {
    "name": "arcanine",
    "url": "https://pokeapi.co/api/v2/pokemon/59/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    "types": ["fire"]
}, {
    "name": "poliwag",
    "url": "https://pokeapi.co/api/v2/pokemon/60/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    "types": ["water"]
}, {
    "name": "poliwhirl",
    "url": "https://pokeapi.co/api/v2/pokemon/61/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    "types": ["water"]
}, {
    "name": "poliwrath",
    "url": "https://pokeapi.co/api/v2/pokemon/62/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    "types": ["water", "fighting"]
}, {
    "name": "abra",
    "url": "https://pokeapi.co/api/v2/pokemon/63/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    "types": ["psychic"]
}, {
    "name": "kadabra",
    "url": "https://pokeapi.co/api/v2/pokemon/64/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    "types": ["psychic"]
}, {
    "name": "alakazam",
    "url": "https://pokeapi.co/api/v2/pokemon/65/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    "types": ["psychic"]
}, {
    "name": "machop",
    "url": "https://pokeapi.co/api/v2/pokemon/66/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    "types": ["fighting"]
}, {
    "name": "machoke",
    "url": "https://pokeapi.co/api/v2/pokemon/67/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    "types": ["fighting"]
}, {
    "name": "machamp",
    "url": "https://pokeapi.co/api/v2/pokemon/68/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    "types": ["fighting"]
}, {
    "name": "bellsprout",
    "url": "https://pokeapi.co/api/v2/pokemon/69/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    "types": ["grass", "poison"]
}, {
    "name": "weepinbell",
    "url": "https://pokeapi.co/api/v2/pokemon/70/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    "types": ["grass", "poison"]
}, {
    "name": "victreebel",
    "url": "https://pokeapi.co/api/v2/pokemon/71/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    "types": ["grass", "poison"]
}, {
    "name": "tentacool",
    "url": "https://pokeapi.co/api/v2/pokemon/72/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    "types": ["water", "poison"]
}, {
    "name": "tentacruel",
    "url": "https://pokeapi.co/api/v2/pokemon/73/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    "types": ["water", "poison"]
}, {
    "name": "geodude",
    "url": "https://pokeapi.co/api/v2/pokemon/74/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    "types": ["rock", "ground"]
}, {
    "name": "graveler",
    "url": "https://pokeapi.co/api/v2/pokemon/75/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    "types": ["rock", "ground"]
}, {
    "name": "golem",
    "url": "https://pokeapi.co/api/v2/pokemon/76/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    "types": ["rock", "ground"]
}, {
    "name": "ponyta",
    "url": "https://pokeapi.co/api/v2/pokemon/77/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    "types": ["fire"]
}, {
    "name": "rapidash",
    "url": "https://pokeapi.co/api/v2/pokemon/78/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    "types": ["fire"]
}, {
    "name": "slowpoke",
    "url": "https://pokeapi.co/api/v2/pokemon/79/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    "types": ["water", "psychic"]
}, {
    "name": "slowbro",
    "url": "https://pokeapi.co/api/v2/pokemon/80/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    "types": ["water", "psychic"]
}, {
    "name": "magnemite",
    "url": "https://pokeapi.co/api/v2/pokemon/81/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    "types": ["electric", "steel"]
}, {
    "name": "magneton",
    "url": "https://pokeapi.co/api/v2/pokemon/82/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    "types": ["electric", "steel"]
}, {
    "name": "farfetchd",
    "url": "https://pokeapi.co/api/v2/pokemon/83/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    "types": ["normal", "flying"]
}, {
    "name": "doduo",
    "url": "https://pokeapi.co/api/v2/pokemon/84/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    "types": ["normal", "flying"]
}, {
    "name": "dodrio",
    "url": "https://pokeapi.co/api/v2/pokemon/85/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    "types": ["normal", "flying"]
}, {
    "name": "seel",
    "url": "https://pokeapi.co/api/v2/pokemon/86/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    "types": ["water"]
}, {
    "name": "dewgong",
    "url": "https://pokeapi.co/api/v2/pokemon/87/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    "types": ["water", "ice"]
}, {
    "name": "grimer",
    "url": "https://pokeapi.co/api/v2/pokemon/88/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    "types": ["poison"]
}, {
    "name": "muk",
    "url": "https://pokeapi.co/api/v2/pokemon/89/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    "types": ["poison"]
}, {
    "name": "shellder",
    "url": "https://pokeapi.co/api/v2/pokemon/90/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    "types": ["water"]
}, {
    "name": "cloyster",
    "url": "https://pokeapi.co/api/v2/pokemon/91/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    "types": ["water", "ice"]
}, {
    "name": "gastly",
    "url": "https://pokeapi.co/api/v2/pokemon/92/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    "types": ["ghost", "poison"]
}, {
    "name": "haunter",
    "url": "https://pokeapi.co/api/v2/pokemon/93/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    "types": ["ghost", "poison"]
}, {
    "name": "gengar",
    "url": "https://pokeapi.co/api/v2/pokemon/94/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    "types": ["ghost", "poison"]
}, {
    "name": "onix",
    "url": "https://pokeapi.co/api/v2/pokemon/95/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    "types": ["rock", "ground"]
}, {
    "name": "drowzee",
    "url": "https://pokeapi.co/api/v2/pokemon/96/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    "types": ["psychic"]
}, {
    "name": "hypno",
    "url": "https://pokeapi.co/api/v2/pokemon/97/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    "types": ["psychic"]
}, {
    "name": "krabby",
    "url": "https://pokeapi.co/api/v2/pokemon/98/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    "types": ["water"]
}, {
    "name": "kingler",
    "url": "https://pokeapi.co/api/v2/pokemon/99/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    "types": ["water"]
}, {
    "name": "voltorb",
    "url": "https://pokeapi.co/api/v2/pokemon/100/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    "types": ["electric"]
}, {
    "name": "electrode",
    "url": "https://pokeapi.co/api/v2/pokemon/101/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    "types": ["electric"]
}, {
    "name": "exeggcute",
    "url": "https://pokeapi.co/api/v2/pokemon/102/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    "types": ["grass", "psychic"]
}, {
    "name": "exeggutor",
    "url": "https://pokeapi.co/api/v2/pokemon/103/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    "types": ["grass", "psychic"]
}, {
    "name": "cubone",
    "url": "https://pokeapi.co/api/v2/pokemon/104/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    "types": ["ground"]
}, {
    "name": "marowak",
    "url": "https://pokeapi.co/api/v2/pokemon/105/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    "types": ["ground"]
}, {
    "name": "hitmonlee",
    "url": "https://pokeapi.co/api/v2/pokemon/106/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    "types": ["fighting"]
}, {
    "name": "hitmonchan",
    "url": "https://pokeapi.co/api/v2/pokemon/107/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    "types": ["fighting"]
}, {
    "name": "lickitung",
    "url": "https://pokeapi.co/api/v2/pokemon/108/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    "types": ["normal"]
}, {
    "name": "koffing",
    "url": "https://pokeapi.co/api/v2/pokemon/109/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    "types": ["poison"]
}, {
    "name": "weezing",
    "url": "https://pokeapi.co/api/v2/pokemon/110/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    "types": ["poison"]
}, {
    "name": "rhyhorn",
    "url": "https://pokeapi.co/api/v2/pokemon/111/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    "types": ["ground", "rock"]
}, {
    "name": "rhydon",
    "url": "https://pokeapi.co/api/v2/pokemon/112/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    "types": ["ground", "rock"]
}, {
    "name": "chansey",
    "url": "https://pokeapi.co/api/v2/pokemon/113/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    "types": ["normal"]
}, {
    "name": "tangela",
    "url": "https://pokeapi.co/api/v2/pokemon/114/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    "types": ["grass"]
}, {
    "name": "kangaskhan",
    "url": "https://pokeapi.co/api/v2/pokemon/115/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    "types": ["normal"]
}, {
    "name": "horsea",
    "url": "https://pokeapi.co/api/v2/pokemon/116/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    "types": ["water"]
}, {
    "name": "seadra",
    "url": "https://pokeapi.co/api/v2/pokemon/117/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    "types": ["water"]
}, {
    "name": "goldeen",
    "url": "https://pokeapi.co/api/v2/pokemon/118/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    "types": ["water"]
}, {
    "name": "seaking",
    "url": "https://pokeapi.co/api/v2/pokemon/119/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    "types": ["water"]
}, {
    "name": "staryu",
    "url": "https://pokeapi.co/api/v2/pokemon/120/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    "types": ["water"]
}, {
    "name": "starmie",
    "url": "https://pokeapi.co/api/v2/pokemon/121/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    "types": ["water", "psychic"]
}, {
    "name": "mr-mime",
    "url": "https://pokeapi.co/api/v2/pokemon/122/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    "types": ["psychic", "fairy"]
}, {
    "name": "scyther",
    "url": "https://pokeapi.co/api/v2/pokemon/123/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    "types": ["bug", "flying"]
}, {
    "name": "jynx",
    "url": "https://pokeapi.co/api/v2/pokemon/124/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    "types": ["ice", "psychic"]
}, {
    "name": "electabuzz",
    "url": "https://pokeapi.co/api/v2/pokemon/125/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    "types": ["electric"]
}, {
    "name": "magmar",
    "url": "https://pokeapi.co/api/v2/pokemon/126/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    "types": ["fire"]
}, {
    "name": "pinsir",
    "url": "https://pokeapi.co/api/v2/pokemon/127/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    "types": ["bug"]
}, {
    "name": "tauros",
    "url": "https://pokeapi.co/api/v2/pokemon/128/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    "types": ["normal"]
}, {
    "name": "magikarp",
    "url": "https://pokeapi.co/api/v2/pokemon/129/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    "types": ["water"]
}, {
    "name": "gyarados",
    "url": "https://pokeapi.co/api/v2/pokemon/130/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    "types": ["water", "flying"]
}, {
    "name": "lapras",
    "url": "https://pokeapi.co/api/v2/pokemon/131/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    "types": ["water", "ice"]
}, {
    "name": "ditto",
    "url": "https://pokeapi.co/api/v2/pokemon/132/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    "types": ["normal"]
}, {
    "name": "eevee",
    "url": "https://pokeapi.co/api/v2/pokemon/133/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    "types": ["normal"]
}, {
    "name": "vaporeon",
    "url": "https://pokeapi.co/api/v2/pokemon/134/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    "types": ["water"]
}, {
    "name": "jolteon",
    "url": "https://pokeapi.co/api/v2/pokemon/135/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    "types": ["electric"]
}, {
    "name": "flareon",
    "url": "https://pokeapi.co/api/v2/pokemon/136/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    "types": ["fire"]
}, {
    "name": "porygon",
    "url": "https://pokeapi.co/api/v2/pokemon/137/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    "types": ["normal"]
}, {
    "name": "omanyte",
    "url": "https://pokeapi.co/api/v2/pokemon/138/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    "types": ["rock", "water"]
}, {
    "name": "omastar",
    "url": "https://pokeapi.co/api/v2/pokemon/139/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    "types": ["rock", "water"]
}, {
    "name": "kabuto",
    "url": "https://pokeapi.co/api/v2/pokemon/140/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    "types": ["rock", "water"]
}, {
    "name": "kabutops",
    "url": "https://pokeapi.co/api/v2/pokemon/141/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    "types": ["rock", "water"]
}, {
    "name": "aerodactyl",
    "url": "https://pokeapi.co/api/v2/pokemon/142/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    "types": ["rock", "flying"]
}, {
    "name": "snorlax",
    "url": "https://pokeapi.co/api/v2/pokemon/143/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    "types": ["normal"]
}, {
    "name": "articuno",
    "url": "https://pokeapi.co/api/v2/pokemon/144/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    "types": ["ice", "flying"]
}, {
    "name": "zapdos",
    "url": "https://pokeapi.co/api/v2/pokemon/145/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    "types": ["electric", "flying"]
}, {
    "name": "moltres",
    "url": "https://pokeapi.co/api/v2/pokemon/146/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    "types": ["fire", "flying"]
}, {
    "name": "dratini",
    "url": "https://pokeapi.co/api/v2/pokemon/147/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    "types": ["dragon"]
}, {
    "name": "dragonair",
    "url": "https://pokeapi.co/api/v2/pokemon/148/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    "types": ["dragon"]
}, {
    "name": "dragonite",
    "url": "https://pokeapi.co/api/v2/pokemon/149/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    "types": ["dragon", "flying"]
}, {
    "name": "mewtwo",
    "url": "https://pokeapi.co/api/v2/pokemon/150/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    "types": ["psychic"]
}, {
    "name": "mew",
    "url": "https://pokeapi.co/api/v2/pokemon/151/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    "types": ["psychic"]
}, {
    "name": "chikorita",
    "url": "https://pokeapi.co/api/v2/pokemon/152/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
    "types": ["grass"]
}, {
    "name": "bayleef",
    "url": "https://pokeapi.co/api/v2/pokemon/153/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
    "types": ["grass"]
}, {
    "name": "meganium",
    "url": "https://pokeapi.co/api/v2/pokemon/154/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
    "types": ["grass"]
}, {
    "name": "cyndaquil",
    "url": "https://pokeapi.co/api/v2/pokemon/155/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
    "types": ["fire"]
}, {
    "name": "quilava",
    "url": "https://pokeapi.co/api/v2/pokemon/156/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
    "types": ["fire"]
}, {
    "name": "typhlosion",
    "url": "https://pokeapi.co/api/v2/pokemon/157/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
    "types": ["fire"]
}, {
    "name": "totodile",
    "url": "https://pokeapi.co/api/v2/pokemon/158/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
    "types": ["water"]
}, {
    "name": "croconaw",
    "url": "https://pokeapi.co/api/v2/pokemon/159/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
    "types": ["water"]
}, {
    "name": "feraligatr",
    "url": "https://pokeapi.co/api/v2/pokemon/160/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
    "types": ["water"]
}, {
    "name": "sentret",
    "url": "https://pokeapi.co/api/v2/pokemon/161/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
    "types": ["normal"]
}, {
    "name": "furret",
    "url": "https://pokeapi.co/api/v2/pokemon/162/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
    "types": ["normal"]
}, {
    "name": "hoothoot",
    "url": "https://pokeapi.co/api/v2/pokemon/163/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
    "types": ["normal", "flying"]
}, {
    "name": "noctowl",
    "url": "https://pokeapi.co/api/v2/pokemon/164/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
    "types": ["normal", "flying"]
}, {
    "name": "ledyba",
    "url": "https://pokeapi.co/api/v2/pokemon/165/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
    "types": ["bug", "flying"]
}, {
    "name": "ledian",
    "url": "https://pokeapi.co/api/v2/pokemon/166/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
    "types": ["bug", "flying"]
}, {
    "name": "spinarak",
    "url": "https://pokeapi.co/api/v2/pokemon/167/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
    "types": ["bug", "poison"]
}, {
    "name": "ariados",
    "url": "https://pokeapi.co/api/v2/pokemon/168/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
    "types": ["bug", "poison"]
}, {
    "name": "crobat",
    "url": "https://pokeapi.co/api/v2/pokemon/169/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
    "types": ["poison", "flying"]
}, {
    "name": "chinchou",
    "url": "https://pokeapi.co/api/v2/pokemon/170/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
    "types": ["water", "electric"]
}, {
    "name": "lanturn",
    "url": "https://pokeapi.co/api/v2/pokemon/171/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
    "types": ["water", "electric"]
}, {
    "name": "pichu",
    "url": "https://pokeapi.co/api/v2/pokemon/172/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
    "types": ["electric"]
}, {
    "name": "cleffa",
    "url": "https://pokeapi.co/api/v2/pokemon/173/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
    "types": ["fairy"]
}, {
    "name": "igglybuff",
    "url": "https://pokeapi.co/api/v2/pokemon/174/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
    "types": ["normal", "fairy"]
}, {
    "name": "togepi",
    "url": "https://pokeapi.co/api/v2/pokemon/175/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
    "types": ["fairy"]
}, {
    "name": "togetic",
    "url": "https://pokeapi.co/api/v2/pokemon/176/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
    "types": ["fairy", "flying"]
}, {
    "name": "natu",
    "url": "https://pokeapi.co/api/v2/pokemon/177/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
    "types": ["psychic", "flying"]
}, {
    "name": "xatu",
    "url": "https://pokeapi.co/api/v2/pokemon/178/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
    "types": ["psychic", "flying"]
}, {
    "name": "mareep",
    "url": "https://pokeapi.co/api/v2/pokemon/179/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
    "types": ["electric"]
}, {
    "name": "flaaffy",
    "url": "https://pokeapi.co/api/v2/pokemon/180/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
    "types": ["electric"]
}, {
    "name": "ampharos",
    "url": "https://pokeapi.co/api/v2/pokemon/181/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
    "types": ["electric"]
}, {
    "name": "bellossom",
    "url": "https://pokeapi.co/api/v2/pokemon/182/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
    "types": ["grass"]
}, {
    "name": "marill",
    "url": "https://pokeapi.co/api/v2/pokemon/183/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
    "types": ["water", "fairy"]
}, {
    "name": "azumarill",
    "url": "https://pokeapi.co/api/v2/pokemon/184/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
    "types": ["water", "fairy"]
}, {
    "name": "sudowoodo",
    "url": "https://pokeapi.co/api/v2/pokemon/185/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
    "types": ["rock"]
}, {
    "name": "politoed",
    "url": "https://pokeapi.co/api/v2/pokemon/186/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
    "types": ["water"]
}, {
    "name": "hoppip",
    "url": "https://pokeapi.co/api/v2/pokemon/187/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
    "types": ["grass", "flying"]
}, {
    "name": "skiploom",
    "url": "https://pokeapi.co/api/v2/pokemon/188/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
    "types": ["grass", "flying"]
}, {
    "name": "jumpluff",
    "url": "https://pokeapi.co/api/v2/pokemon/189/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
    "types": ["grass", "flying"]
}, {
    "name": "aipom",
    "url": "https://pokeapi.co/api/v2/pokemon/190/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
    "types": ["normal"]
}, {
    "name": "sunkern",
    "url": "https://pokeapi.co/api/v2/pokemon/191/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
    "types": ["grass"]
}, {
    "name": "sunflora",
    "url": "https://pokeapi.co/api/v2/pokemon/192/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
    "types": ["grass"]
}, {
    "name": "yanma",
    "url": "https://pokeapi.co/api/v2/pokemon/193/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
    "types": ["bug", "flying"]
}, {
    "name": "wooper",
    "url": "https://pokeapi.co/api/v2/pokemon/194/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
    "types": ["water", "ground"]
}, {
    "name": "quagsire",
    "url": "https://pokeapi.co/api/v2/pokemon/195/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
    "types": ["water", "ground"]
}, {
    "name": "espeon",
    "url": "https://pokeapi.co/api/v2/pokemon/196/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
    "types": ["psychic"]
}, {
    "name": "umbreon",
    "url": "https://pokeapi.co/api/v2/pokemon/197/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
    "types": ["dark"]
}, {
    "name": "murkrow",
    "url": "https://pokeapi.co/api/v2/pokemon/198/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
    "types": ["dark", "flying"]
}, {
    "name": "slowking",
    "url": "https://pokeapi.co/api/v2/pokemon/199/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
    "types": ["water", "psychic"]
}, {
    "name": "misdreavus",
    "url": "https://pokeapi.co/api/v2/pokemon/200/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
    "types": ["ghost"]
}, {
    "name": "unown",
    "url": "https://pokeapi.co/api/v2/pokemon/201/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
    "types": ["psychic"]
}, {
    "name": "wobbuffet",
    "url": "https://pokeapi.co/api/v2/pokemon/202/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
    "types": ["psychic"]
}, {
    "name": "girafarig",
    "url": "https://pokeapi.co/api/v2/pokemon/203/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
    "types": ["normal", "psychic"]
}, {
    "name": "pineco",
    "url": "https://pokeapi.co/api/v2/pokemon/204/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
    "types": ["bug"]
}, {
    "name": "forretress",
    "url": "https://pokeapi.co/api/v2/pokemon/205/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
    "types": ["bug", "steel"]
}, {
    "name": "dunsparce",
    "url": "https://pokeapi.co/api/v2/pokemon/206/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
    "types": ["normal"]
}, {
    "name": "gligar",
    "url": "https://pokeapi.co/api/v2/pokemon/207/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
    "types": ["ground", "flying"]
}, {
    "name": "steelix",
    "url": "https://pokeapi.co/api/v2/pokemon/208/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
    "types": ["steel", "ground"]
}, {
    "name": "snubbull",
    "url": "https://pokeapi.co/api/v2/pokemon/209/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
    "types": ["fairy"]
}, {
    "name": "granbull",
    "url": "https://pokeapi.co/api/v2/pokemon/210/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
    "types": ["fairy"]
}, {
    "name": "qwilfish",
    "url": "https://pokeapi.co/api/v2/pokemon/211/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
    "types": ["water", "poison"]
}, {
    "name": "scizor",
    "url": "https://pokeapi.co/api/v2/pokemon/212/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
    "types": ["bug", "steel"]
}, {
    "name": "shuckle",
    "url": "https://pokeapi.co/api/v2/pokemon/213/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
    "types": ["bug", "rock"]
}, {
    "name": "heracross",
    "url": "https://pokeapi.co/api/v2/pokemon/214/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
    "types": ["bug", "fighting"]
}, {
    "name": "sneasel",
    "url": "https://pokeapi.co/api/v2/pokemon/215/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
    "types": ["dark", "ice"]
}, {
    "name": "teddiursa",
    "url": "https://pokeapi.co/api/v2/pokemon/216/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
    "types": ["normal"]
}, {
    "name": "ursaring",
    "url": "https://pokeapi.co/api/v2/pokemon/217/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
    "types": ["normal"]
}, {
    "name": "slugma",
    "url": "https://pokeapi.co/api/v2/pokemon/218/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
    "types": ["fire"]
}, {
    "name": "magcargo",
    "url": "https://pokeapi.co/api/v2/pokemon/219/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
    "types": ["fire", "rock"]
}, {
    "name": "swinub",
    "url": "https://pokeapi.co/api/v2/pokemon/220/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
    "types": ["ice", "ground"]
}, {
    "name": "piloswine",
    "url": "https://pokeapi.co/api/v2/pokemon/221/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
    "types": ["ice", "ground"]
}, {
    "name": "corsola",
    "url": "https://pokeapi.co/api/v2/pokemon/222/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
    "types": ["water", "rock"]
}, {
    "name": "remoraid",
    "url": "https://pokeapi.co/api/v2/pokemon/223/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
    "types": ["water"]
}, {
    "name": "octillery",
    "url": "https://pokeapi.co/api/v2/pokemon/224/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
    "types": ["water"]
}, {
    "name": "delibird",
    "url": "https://pokeapi.co/api/v2/pokemon/225/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
    "types": ["ice", "flying"]
}, {
    "name": "mantine",
    "url": "https://pokeapi.co/api/v2/pokemon/226/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
    "types": ["water", "flying"]
}, {
    "name": "skarmory",
    "url": "https://pokeapi.co/api/v2/pokemon/227/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
    "types": ["steel", "flying"]
}, {
    "name": "houndour",
    "url": "https://pokeapi.co/api/v2/pokemon/228/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
    "types": ["dark", "fire"]
}, {
    "name": "houndoom",
    "url": "https://pokeapi.co/api/v2/pokemon/229/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
    "types": ["dark", "fire"]
}, {
    "name": "kingdra",
    "url": "https://pokeapi.co/api/v2/pokemon/230/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
    "types": ["water", "dragon"]
}, {
    "name": "phanpy",
    "url": "https://pokeapi.co/api/v2/pokemon/231/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
    "types": ["ground"]
}, {
    "name": "donphan",
    "url": "https://pokeapi.co/api/v2/pokemon/232/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
    "types": ["ground"]
}, {
    "name": "porygon2",
    "url": "https://pokeapi.co/api/v2/pokemon/233/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
    "types": ["normal"]
}, {
    "name": "stantler",
    "url": "https://pokeapi.co/api/v2/pokemon/234/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
    "types": ["normal"]
}, {
    "name": "smeargle",
    "url": "https://pokeapi.co/api/v2/pokemon/235/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
    "types": ["normal"]
}, {
    "name": "tyrogue",
    "url": "https://pokeapi.co/api/v2/pokemon/236/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
    "types": ["fighting"]
}, {
    "name": "hitmontop",
    "url": "https://pokeapi.co/api/v2/pokemon/237/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
    "types": ["fighting"]
}, {
    "name": "smoochum",
    "url": "https://pokeapi.co/api/v2/pokemon/238/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
    "types": ["ice", "psychic"]
}, {
    "name": "elekid",
    "url": "https://pokeapi.co/api/v2/pokemon/239/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
    "types": ["electric"]
}, {
    "name": "magby",
    "url": "https://pokeapi.co/api/v2/pokemon/240/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
    "types": ["fire"]
}, {
    "name": "miltank",
    "url": "https://pokeapi.co/api/v2/pokemon/241/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
    "types": ["normal"]
}, {
    "name": "blissey",
    "url": "https://pokeapi.co/api/v2/pokemon/242/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
    "types": ["normal"]
}, {
    "name": "raikou",
    "url": "https://pokeapi.co/api/v2/pokemon/243/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
    "types": ["electric"]
}, {
    "name": "entei",
    "url": "https://pokeapi.co/api/v2/pokemon/244/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
    "types": ["fire"]
}, {
    "name": "suicune",
    "url": "https://pokeapi.co/api/v2/pokemon/245/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
    "types": ["water"]
}, {
    "name": "larvitar",
    "url": "https://pokeapi.co/api/v2/pokemon/246/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
    "types": ["rock", "ground"]
}, {
    "name": "pupitar",
    "url": "https://pokeapi.co/api/v2/pokemon/247/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
    "types": ["rock", "ground"]
}, {
    "name": "tyranitar",
    "url": "https://pokeapi.co/api/v2/pokemon/248/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
    "types": ["rock", "dark"]
}, {
    "name": "lugia",
    "url": "https://pokeapi.co/api/v2/pokemon/249/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    "types": ["psychic", "flying"]
}, {
    "name": "ho-oh",
    "url": "https://pokeapi.co/api/v2/pokemon/250/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
    "types": ["fire", "flying"]
}, {
    "name": "celebi",
    "url": "https://pokeapi.co/api/v2/pokemon/251/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
    "types": ["psychic", "grass"]
}, {
    "name": "treecko",
    "url": "https://pokeapi.co/api/v2/pokemon/252/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
    "types": ["grass"]
}, {
    "name": "grovyle",
    "url": "https://pokeapi.co/api/v2/pokemon/253/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
    "types": ["grass"]
}, {
    "name": "sceptile",
    "url": "https://pokeapi.co/api/v2/pokemon/254/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
    "types": ["grass"]
}, {
    "name": "torchic",
    "url": "https://pokeapi.co/api/v2/pokemon/255/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
    "types": ["fire"]
}, {
    "name": "combusken",
    "url": "https://pokeapi.co/api/v2/pokemon/256/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
    "types": ["fire", "fighting"]
}, {
    "name": "blaziken",
    "url": "https://pokeapi.co/api/v2/pokemon/257/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
    "types": ["fire", "fighting"]
}, {
    "name": "mudkip",
    "url": "https://pokeapi.co/api/v2/pokemon/258/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
    "types": ["water"]
}, {
    "name": "marshtomp",
    "url": "https://pokeapi.co/api/v2/pokemon/259/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
    "types": ["water", "ground"]
}, {
    "name": "swampert",
    "url": "https://pokeapi.co/api/v2/pokemon/260/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
    "types": ["water", "ground"]
}, {
    "name": "poochyena",
    "url": "https://pokeapi.co/api/v2/pokemon/261/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
    "types": ["dark"]
}, {
    "name": "mightyena",
    "url": "https://pokeapi.co/api/v2/pokemon/262/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
    "types": ["dark"]
}, {
    "name": "zigzagoon",
    "url": "https://pokeapi.co/api/v2/pokemon/263/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
    "types": ["normal"]
}, {
    "name": "linoone",
    "url": "https://pokeapi.co/api/v2/pokemon/264/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
    "types": ["normal"]
}, {
    "name": "wurmple",
    "url": "https://pokeapi.co/api/v2/pokemon/265/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
    "types": ["bug"]
}, {
    "name": "silcoon",
    "url": "https://pokeapi.co/api/v2/pokemon/266/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
    "types": ["bug"]
}, {
    "name": "beautifly",
    "url": "https://pokeapi.co/api/v2/pokemon/267/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
    "types": ["bug", "flying"]
}, {
    "name": "cascoon",
    "url": "https://pokeapi.co/api/v2/pokemon/268/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
    "types": ["bug"]
}, {
    "name": "dustox",
    "url": "https://pokeapi.co/api/v2/pokemon/269/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
    "types": ["bug", "poison"]
}, {
    "name": "lotad",
    "url": "https://pokeapi.co/api/v2/pokemon/270/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
    "types": ["water", "grass"]
}, {
    "name": "lombre",
    "url": "https://pokeapi.co/api/v2/pokemon/271/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
    "types": ["water", "grass"]
}, {
    "name": "ludicolo",
    "url": "https://pokeapi.co/api/v2/pokemon/272/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
    "types": ["water", "grass"]
}, {
    "name": "seedot",
    "url": "https://pokeapi.co/api/v2/pokemon/273/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
    "types": ["grass"]
}, {
    "name": "nuzleaf",
    "url": "https://pokeapi.co/api/v2/pokemon/274/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
    "types": ["grass", "dark"]
}, {
    "name": "shiftry",
    "url": "https://pokeapi.co/api/v2/pokemon/275/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
    "types": ["grass", "dark"]
}, {
    "name": "taillow",
    "url": "https://pokeapi.co/api/v2/pokemon/276/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
    "types": ["normal", "flying"]
}, {
    "name": "swellow",
    "url": "https://pokeapi.co/api/v2/pokemon/277/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
    "types": ["normal", "flying"]
}, {
    "name": "wingull",
    "url": "https://pokeapi.co/api/v2/pokemon/278/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
    "types": ["water", "flying"]
}, {
    "name": "pelipper",
    "url": "https://pokeapi.co/api/v2/pokemon/279/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
    "types": ["water", "flying"]
}, {
    "name": "ralts",
    "url": "https://pokeapi.co/api/v2/pokemon/280/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
    "types": ["psychic", "fairy"]
}, {
    "name": "kirlia",
    "url": "https://pokeapi.co/api/v2/pokemon/281/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
    "types": ["psychic", "fairy"]
}, {
    "name": "gardevoir",
    "url": "https://pokeapi.co/api/v2/pokemon/282/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
    "types": ["psychic", "fairy"]
}, {
    "name": "surskit",
    "url": "https://pokeapi.co/api/v2/pokemon/283/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
    "types": ["bug", "water"]
}, {
    "name": "masquerain",
    "url": "https://pokeapi.co/api/v2/pokemon/284/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
    "types": ["bug", "flying"]
}, {
    "name": "shroomish",
    "url": "https://pokeapi.co/api/v2/pokemon/285/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
    "types": ["grass"]
}, {
    "name": "breloom",
    "url": "https://pokeapi.co/api/v2/pokemon/286/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
    "types": ["grass", "fighting"]
}, {
    "name": "slakoth",
    "url": "https://pokeapi.co/api/v2/pokemon/287/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
    "types": ["normal"]
}, {
    "name": "vigoroth",
    "url": "https://pokeapi.co/api/v2/pokemon/288/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
    "types": ["normal"]
}, {
    "name": "slaking",
    "url": "https://pokeapi.co/api/v2/pokemon/289/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
    "types": ["normal"]
}, {
    "name": "nincada",
    "url": "https://pokeapi.co/api/v2/pokemon/290/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
    "types": ["bug", "ground"]
}, {
    "name": "ninjask",
    "url": "https://pokeapi.co/api/v2/pokemon/291/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
    "types": ["bug", "flying"]
}, {
    "name": "shedinja",
    "url": "https://pokeapi.co/api/v2/pokemon/292/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
    "types": ["bug", "ghost"]
}, {
    "name": "whismur",
    "url": "https://pokeapi.co/api/v2/pokemon/293/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
    "types": ["normal"]
}, {
    "name": "loudred",
    "url": "https://pokeapi.co/api/v2/pokemon/294/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
    "types": ["normal"]
}, {
    "name": "exploud",
    "url": "https://pokeapi.co/api/v2/pokemon/295/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
    "types": ["normal"]
}, {
    "name": "makuhita",
    "url": "https://pokeapi.co/api/v2/pokemon/296/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
    "types": ["fighting"]
}, {
    "name": "hariyama",
    "url": "https://pokeapi.co/api/v2/pokemon/297/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
    "types": ["fighting"]
}, {
    "name": "azurill",
    "url": "https://pokeapi.co/api/v2/pokemon/298/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
    "types": ["normal", "fairy"]
}, {
    "name": "nosepass",
    "url": "https://pokeapi.co/api/v2/pokemon/299/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
    "types": ["rock"]
}, {
    "name": "skitty",
    "url": "https://pokeapi.co/api/v2/pokemon/300/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
    "types": ["normal"]
}, {
    "name": "delcatty",
    "url": "https://pokeapi.co/api/v2/pokemon/301/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
    "types": ["normal"]
}, {
    "name": "sableye",
    "url": "https://pokeapi.co/api/v2/pokemon/302/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
    "types": ["dark", "ghost"]
}, {
    "name": "mawile",
    "url": "https://pokeapi.co/api/v2/pokemon/303/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
    "types": ["steel", "fairy"]
}, {
    "name": "aron",
    "url": "https://pokeapi.co/api/v2/pokemon/304/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
    "types": ["steel", "rock"]
}, {
    "name": "lairon",
    "url": "https://pokeapi.co/api/v2/pokemon/305/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
    "types": ["steel", "rock"]
}, {
    "name": "aggron",
    "url": "https://pokeapi.co/api/v2/pokemon/306/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
    "types": ["steel", "rock"]
}, {
    "name": "meditite",
    "url": "https://pokeapi.co/api/v2/pokemon/307/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
    "types": ["fighting", "psychic"]
}, {
    "name": "medicham",
    "url": "https://pokeapi.co/api/v2/pokemon/308/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
    "types": ["fighting", "psychic"]
}, {
    "name": "electrike",
    "url": "https://pokeapi.co/api/v2/pokemon/309/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
    "types": ["electric"]
}, {
    "name": "manectric",
    "url": "https://pokeapi.co/api/v2/pokemon/310/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
    "types": ["electric"]
}, {
    "name": "plusle",
    "url": "https://pokeapi.co/api/v2/pokemon/311/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
    "types": ["electric"]
}, {
    "name": "minun",
    "url": "https://pokeapi.co/api/v2/pokemon/312/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
    "types": ["electric"]
}, {
    "name": "volbeat",
    "url": "https://pokeapi.co/api/v2/pokemon/313/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
    "types": ["bug"]
}, {
    "name": "illumise",
    "url": "https://pokeapi.co/api/v2/pokemon/314/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
    "types": ["bug"]
}, {
    "name": "roselia",
    "url": "https://pokeapi.co/api/v2/pokemon/315/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
    "types": ["grass", "poison"]
}, {
    "name": "gulpin",
    "url": "https://pokeapi.co/api/v2/pokemon/316/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
    "types": ["poison"]
}, {
    "name": "swalot",
    "url": "https://pokeapi.co/api/v2/pokemon/317/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
    "types": ["poison"]
}, {
    "name": "carvanha",
    "url": "https://pokeapi.co/api/v2/pokemon/318/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
    "types": ["water", "dark"]
}, {
    "name": "sharpedo",
    "url": "https://pokeapi.co/api/v2/pokemon/319/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
    "types": ["water", "dark"]
}, {
    "name": "wailmer",
    "url": "https://pokeapi.co/api/v2/pokemon/320/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
    "types": ["water"]
}, {
    "name": "wailord",
    "url": "https://pokeapi.co/api/v2/pokemon/321/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
    "types": ["water"]
}, {
    "name": "numel",
    "url": "https://pokeapi.co/api/v2/pokemon/322/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
    "types": ["fire", "ground"]
}, {
    "name": "camerupt",
    "url": "https://pokeapi.co/api/v2/pokemon/323/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
    "types": ["fire", "ground"]
}, {
    "name": "torkoal",
    "url": "https://pokeapi.co/api/v2/pokemon/324/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
    "types": ["fire"]
}, {
    "name": "spoink",
    "url": "https://pokeapi.co/api/v2/pokemon/325/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
    "types": ["psychic"]
}, {
    "name": "grumpig",
    "url": "https://pokeapi.co/api/v2/pokemon/326/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
    "types": ["psychic"]
}, {
    "name": "spinda",
    "url": "https://pokeapi.co/api/v2/pokemon/327/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
    "types": ["normal"]
}, {
    "name": "trapinch",
    "url": "https://pokeapi.co/api/v2/pokemon/328/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
    "types": ["ground"]
}, {
    "name": "vibrava",
    "url": "https://pokeapi.co/api/v2/pokemon/329/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
    "types": ["ground", "dragon"]
}, {
    "name": "flygon",
    "url": "https://pokeapi.co/api/v2/pokemon/330/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
    "types": ["ground", "dragon"]
}, {
    "name": "cacnea",
    "url": "https://pokeapi.co/api/v2/pokemon/331/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
    "types": ["grass"]
}, {
    "name": "cacturne",
    "url": "https://pokeapi.co/api/v2/pokemon/332/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
    "types": ["grass", "dark"]
}, {
    "name": "swablu",
    "url": "https://pokeapi.co/api/v2/pokemon/333/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
    "types": ["normal", "flying"]
}, {
    "name": "altaria",
    "url": "https://pokeapi.co/api/v2/pokemon/334/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
    "types": ["dragon", "flying"]
}, {
    "name": "zangoose",
    "url": "https://pokeapi.co/api/v2/pokemon/335/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
    "types": ["normal"]
}, {
    "name": "seviper",
    "url": "https://pokeapi.co/api/v2/pokemon/336/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
    "types": ["poison"]
}, {
    "name": "lunatone",
    "url": "https://pokeapi.co/api/v2/pokemon/337/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
    "types": ["rock", "psychic"]
}, {
    "name": "solrock",
    "url": "https://pokeapi.co/api/v2/pokemon/338/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
    "types": ["rock", "psychic"]
}, {
    "name": "barboach",
    "url": "https://pokeapi.co/api/v2/pokemon/339/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
    "types": ["water", "ground"]
}, {
    "name": "whiscash",
    "url": "https://pokeapi.co/api/v2/pokemon/340/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
    "types": ["water", "ground"]
}, {
    "name": "corphish",
    "url": "https://pokeapi.co/api/v2/pokemon/341/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
    "types": ["water"]
}, {
    "name": "crawdaunt",
    "url": "https://pokeapi.co/api/v2/pokemon/342/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
    "types": ["water", "dark"]
}, {
    "name": "baltoy",
    "url": "https://pokeapi.co/api/v2/pokemon/343/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
    "types": ["ground", "psychic"]
}, {
    "name": "claydol",
    "url": "https://pokeapi.co/api/v2/pokemon/344/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
    "types": ["ground", "psychic"]
}, {
    "name": "lileep",
    "url": "https://pokeapi.co/api/v2/pokemon/345/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
    "types": ["rock", "grass"]
}, {
    "name": "cradily",
    "url": "https://pokeapi.co/api/v2/pokemon/346/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
    "types": ["rock", "grass"]
}, {
    "name": "anorith",
    "url": "https://pokeapi.co/api/v2/pokemon/347/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
    "types": ["rock", "bug"]
}, {
    "name": "armaldo",
    "url": "https://pokeapi.co/api/v2/pokemon/348/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
    "types": ["rock", "bug"]
}, {
    "name": "feebas",
    "url": "https://pokeapi.co/api/v2/pokemon/349/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
    "types": ["water"]
}, {
    "name": "milotic",
    "url": "https://pokeapi.co/api/v2/pokemon/350/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
    "types": ["water"]
}, {
    "name": "castform",
    "url": "https://pokeapi.co/api/v2/pokemon/351/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
    "types": ["normal"]
}, {
    "name": "kecleon",
    "url": "https://pokeapi.co/api/v2/pokemon/352/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
    "types": ["normal"]
}, {
    "name": "shuppet",
    "url": "https://pokeapi.co/api/v2/pokemon/353/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
    "types": ["ghost"]
}, {
    "name": "banette",
    "url": "https://pokeapi.co/api/v2/pokemon/354/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
    "types": ["ghost"]
}, {
    "name": "duskull",
    "url": "https://pokeapi.co/api/v2/pokemon/355/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
    "types": ["ghost"]
}, {
    "name": "dusclops",
    "url": "https://pokeapi.co/api/v2/pokemon/356/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
    "types": ["ghost"]
}, {
    "name": "tropius",
    "url": "https://pokeapi.co/api/v2/pokemon/357/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
    "types": ["grass", "flying"]
}, {
    "name": "chimecho",
    "url": "https://pokeapi.co/api/v2/pokemon/358/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
    "types": ["psychic"]
}, {
    "name": "absol",
    "url": "https://pokeapi.co/api/v2/pokemon/359/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
    "types": ["dark"]
}, {
    "name": "wynaut",
    "url": "https://pokeapi.co/api/v2/pokemon/360/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
    "types": ["psychic"]
}, {
    "name": "snorunt",
    "url": "https://pokeapi.co/api/v2/pokemon/361/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
    "types": ["ice"]
}, {
    "name": "glalie",
    "url": "https://pokeapi.co/api/v2/pokemon/362/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
    "types": ["ice"]
}, {
    "name": "spheal",
    "url": "https://pokeapi.co/api/v2/pokemon/363/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
    "types": ["ice", "water"]
}, {
    "name": "sealeo",
    "url": "https://pokeapi.co/api/v2/pokemon/364/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
    "types": ["ice", "water"]
}, {
    "name": "walrein",
    "url": "https://pokeapi.co/api/v2/pokemon/365/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
    "types": ["ice", "water"]
}, {
    "name": "clamperl",
    "url": "https://pokeapi.co/api/v2/pokemon/366/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
    "types": ["water"]
}, {
    "name": "huntail",
    "url": "https://pokeapi.co/api/v2/pokemon/367/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
    "types": ["water"]
}, {
    "name": "gorebyss",
    "url": "https://pokeapi.co/api/v2/pokemon/368/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
    "types": ["water"]
}, {
    "name": "relicanth",
    "url": "https://pokeapi.co/api/v2/pokemon/369/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
    "types": ["water", "rock"]
}, {
    "name": "luvdisc",
    "url": "https://pokeapi.co/api/v2/pokemon/370/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
    "types": ["water"]
}, {
    "name": "bagon",
    "url": "https://pokeapi.co/api/v2/pokemon/371/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
    "types": ["dragon"]
}, {
    "name": "shelgon",
    "url": "https://pokeapi.co/api/v2/pokemon/372/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
    "types": ["dragon"]
}, {
    "name": "salamence",
    "url": "https://pokeapi.co/api/v2/pokemon/373/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
    "types": ["dragon", "flying"]
}, {
    "name": "beldum",
    "url": "https://pokeapi.co/api/v2/pokemon/374/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
    "types": ["steel", "psychic"]
}, {
    "name": "metang",
    "url": "https://pokeapi.co/api/v2/pokemon/375/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
    "types": ["steel", "psychic"]
}, {
    "name": "metagross",
    "url": "https://pokeapi.co/api/v2/pokemon/376/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
    "types": ["steel", "psychic"]
}, {
    "name": "regirock",
    "url": "https://pokeapi.co/api/v2/pokemon/377/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
    "types": ["rock"]
}, {
    "name": "regice",
    "url": "https://pokeapi.co/api/v2/pokemon/378/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
    "types": ["ice"]
}, {
    "name": "registeel",
    "url": "https://pokeapi.co/api/v2/pokemon/379/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
    "types": ["steel"]
}, {
    "name": "latias",
    "url": "https://pokeapi.co/api/v2/pokemon/380/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
    "types": ["dragon", "psychic"]
}, {
    "name": "latios",
    "url": "https://pokeapi.co/api/v2/pokemon/381/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
    "types": ["dragon", "psychic"]
}, {
    "name": "kyogre",
    "url": "https://pokeapi.co/api/v2/pokemon/382/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
    "types": ["water"]
}, {
    "name": "groudon",
    "url": "https://pokeapi.co/api/v2/pokemon/383/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
    "types": ["ground"]
}, {
    "name": "rayquaza",
    "url": "https://pokeapi.co/api/v2/pokemon/384/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
    "types": ["dragon", "flying"]
}, {
    "name": "jirachi",
    "url": "https://pokeapi.co/api/v2/pokemon/385/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
    "types": ["steel", "psychic"]
}, {
    "name": "deoxys-normal",
    "url": "https://pokeapi.co/api/v2/pokemon/386/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
    "types": ["psychic"]
}, {
    "name": "turtwig",
    "url": "https://pokeapi.co/api/v2/pokemon/387/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
    "types": ["grass"]
}, {
    "name": "grotle",
    "url": "https://pokeapi.co/api/v2/pokemon/388/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
    "types": ["grass"]
}, {
    "name": "torterra",
    "url": "https://pokeapi.co/api/v2/pokemon/389/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
    "types": ["grass", "ground"]
}, {
    "name": "chimchar",
    "url": "https://pokeapi.co/api/v2/pokemon/390/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
    "types": ["fire"]
}, {
    "name": "monferno",
    "url": "https://pokeapi.co/api/v2/pokemon/391/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
    "types": ["fire", "fighting"]
}, {
    "name": "infernape",
    "url": "https://pokeapi.co/api/v2/pokemon/392/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
    "types": ["fire", "fighting"]
}, {
    "name": "piplup",
    "url": "https://pokeapi.co/api/v2/pokemon/393/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
    "types": ["water"]
}, {
    "name": "prinplup",
    "url": "https://pokeapi.co/api/v2/pokemon/394/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
    "types": ["water"]
}, {
    "name": "empoleon",
    "url": "https://pokeapi.co/api/v2/pokemon/395/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
    "types": ["water", "steel"]
}, {
    "name": "starly",
    "url": "https://pokeapi.co/api/v2/pokemon/396/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
    "types": ["normal", "flying"]
}, {
    "name": "staravia",
    "url": "https://pokeapi.co/api/v2/pokemon/397/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
    "types": ["normal", "flying"]
}, {
    "name": "staraptor",
    "url": "https://pokeapi.co/api/v2/pokemon/398/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
    "types": ["normal", "flying"]
}, {
    "name": "bidoof",
    "url": "https://pokeapi.co/api/v2/pokemon/399/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
    "types": ["normal"]
}, {
    "name": "bibarel",
    "url": "https://pokeapi.co/api/v2/pokemon/400/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
    "types": ["normal", "water"]
}, {
    "name": "kricketot",
    "url": "https://pokeapi.co/api/v2/pokemon/401/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
    "types": ["bug"]
}, {
    "name": "kricketune",
    "url": "https://pokeapi.co/api/v2/pokemon/402/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
    "types": ["bug"]
}, {
    "name": "shinx",
    "url": "https://pokeapi.co/api/v2/pokemon/403/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
    "types": ["electric"]
}, {
    "name": "luxio",
    "url": "https://pokeapi.co/api/v2/pokemon/404/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
    "types": ["electric"]
}, {
    "name": "luxray",
    "url": "https://pokeapi.co/api/v2/pokemon/405/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
    "types": ["electric"]
}, {
    "name": "budew",
    "url": "https://pokeapi.co/api/v2/pokemon/406/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
    "types": ["grass", "poison"]
}, {
    "name": "roserade",
    "url": "https://pokeapi.co/api/v2/pokemon/407/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
    "types": ["grass", "poison"]
}, {
    "name": "cranidos",
    "url": "https://pokeapi.co/api/v2/pokemon/408/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
    "types": ["rock"]
}, {
    "name": "rampardos",
    "url": "https://pokeapi.co/api/v2/pokemon/409/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
    "types": ["rock"]
}, {
    "name": "shieldon",
    "url": "https://pokeapi.co/api/v2/pokemon/410/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
    "types": ["rock", "steel"]
}, {
    "name": "bastiodon",
    "url": "https://pokeapi.co/api/v2/pokemon/411/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
    "types": ["rock", "steel"]
}, {
    "name": "burmy",
    "url": "https://pokeapi.co/api/v2/pokemon/412/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
    "types": ["bug"]
}, {
    "name": "wormadam-plant",
    "url": "https://pokeapi.co/api/v2/pokemon/413/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
    "types": ["bug", "grass"]
}, {
    "name": "mothim",
    "url": "https://pokeapi.co/api/v2/pokemon/414/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
    "types": ["bug", "flying"]
}, {
    "name": "combee",
    "url": "https://pokeapi.co/api/v2/pokemon/415/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
    "types": ["bug", "flying"]
}, {
    "name": "vespiquen",
    "url": "https://pokeapi.co/api/v2/pokemon/416/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
    "types": ["bug", "flying"]
}, {
    "name": "pachirisu",
    "url": "https://pokeapi.co/api/v2/pokemon/417/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
    "types": ["electric"]
}, {
    "name": "buizel",
    "url": "https://pokeapi.co/api/v2/pokemon/418/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
    "types": ["water"]
}, {
    "name": "floatzel",
    "url": "https://pokeapi.co/api/v2/pokemon/419/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
    "types": ["water"]
}, {
    "name": "cherubi",
    "url": "https://pokeapi.co/api/v2/pokemon/420/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
    "types": ["grass"]
}, {
    "name": "cherrim",
    "url": "https://pokeapi.co/api/v2/pokemon/421/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
    "types": ["grass"]
}, {
    "name": "shellos",
    "url": "https://pokeapi.co/api/v2/pokemon/422/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
    "types": ["water"]
}, {
    "name": "gastrodon",
    "url": "https://pokeapi.co/api/v2/pokemon/423/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
    "types": ["water", "ground"]
}, {
    "name": "ambipom",
    "url": "https://pokeapi.co/api/v2/pokemon/424/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
    "types": ["normal"]
}, {
    "name": "drifloon",
    "url": "https://pokeapi.co/api/v2/pokemon/425/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
    "types": ["ghost", "flying"]
}, {
    "name": "drifblim",
    "url": "https://pokeapi.co/api/v2/pokemon/426/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
    "types": ["ghost", "flying"]
}, {
    "name": "buneary",
    "url": "https://pokeapi.co/api/v2/pokemon/427/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
    "types": ["normal"]
}, {
    "name": "lopunny",
    "url": "https://pokeapi.co/api/v2/pokemon/428/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
    "types": ["normal"]
}, {
    "name": "mismagius",
    "url": "https://pokeapi.co/api/v2/pokemon/429/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
    "types": ["ghost"]
}, {
    "name": "honchkrow",
    "url": "https://pokeapi.co/api/v2/pokemon/430/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
    "types": ["dark", "flying"]
}, {
    "name": "glameow",
    "url": "https://pokeapi.co/api/v2/pokemon/431/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
    "types": ["normal"]
}, {
    "name": "purugly",
    "url": "https://pokeapi.co/api/v2/pokemon/432/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
    "types": ["normal"]
}, {
    "name": "chingling",
    "url": "https://pokeapi.co/api/v2/pokemon/433/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
    "types": ["psychic"]
}, {
    "name": "stunky",
    "url": "https://pokeapi.co/api/v2/pokemon/434/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
    "types": ["poison", "dark"]
}, {
    "name": "skuntank",
    "url": "https://pokeapi.co/api/v2/pokemon/435/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
    "types": ["poison", "dark"]
}, {
    "name": "bronzor",
    "url": "https://pokeapi.co/api/v2/pokemon/436/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
    "types": ["steel", "psychic"]
}, {
    "name": "bronzong",
    "url": "https://pokeapi.co/api/v2/pokemon/437/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
    "types": ["steel", "psychic"]
}, {
    "name": "bonsly",
    "url": "https://pokeapi.co/api/v2/pokemon/438/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
    "types": ["rock"]
}, {
    "name": "mime-jr",
    "url": "https://pokeapi.co/api/v2/pokemon/439/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
    "types": ["psychic", "fairy"]
}, {
    "name": "happiny",
    "url": "https://pokeapi.co/api/v2/pokemon/440/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
    "types": ["normal"]
}, {
    "name": "chatot",
    "url": "https://pokeapi.co/api/v2/pokemon/441/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
    "types": ["normal", "flying"]
}, {
    "name": "spiritomb",
    "url": "https://pokeapi.co/api/v2/pokemon/442/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
    "types": ["ghost", "dark"]
}, {
    "name": "gible",
    "url": "https://pokeapi.co/api/v2/pokemon/443/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
    "types": ["dragon", "ground"]
}, {
    "name": "gabite",
    "url": "https://pokeapi.co/api/v2/pokemon/444/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
    "types": ["dragon", "ground"]
}, {
    "name": "garchomp",
    "url": "https://pokeapi.co/api/v2/pokemon/445/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
    "types": ["dragon", "ground"]
}, {
    "name": "munchlax",
    "url": "https://pokeapi.co/api/v2/pokemon/446/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
    "types": ["normal"]
}, {
    "name": "riolu",
    "url": "https://pokeapi.co/api/v2/pokemon/447/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
    "types": ["fighting"]
}, {
    "name": "lucario",
    "url": "https://pokeapi.co/api/v2/pokemon/448/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    "types": ["fighting", "steel"]
}, {
    "name": "hippopotas",
    "url": "https://pokeapi.co/api/v2/pokemon/449/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
    "types": ["ground"]
}, {
    "name": "hippowdon",
    "url": "https://pokeapi.co/api/v2/pokemon/450/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
    "types": ["ground"]
}, {
    "name": "skorupi",
    "url": "https://pokeapi.co/api/v2/pokemon/451/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
    "types": ["poison", "bug"]
}, {
    "name": "drapion",
    "url": "https://pokeapi.co/api/v2/pokemon/452/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
    "types": ["poison", "dark"]
}, {
    "name": "croagunk",
    "url": "https://pokeapi.co/api/v2/pokemon/453/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
    "types": ["poison", "fighting"]
}, {
    "name": "toxicroak",
    "url": "https://pokeapi.co/api/v2/pokemon/454/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
    "types": ["poison", "fighting"]
}, {
    "name": "carnivine",
    "url": "https://pokeapi.co/api/v2/pokemon/455/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
    "types": ["grass"]
}, {
    "name": "finneon",
    "url": "https://pokeapi.co/api/v2/pokemon/456/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
    "types": ["water"]
}, {
    "name": "lumineon",
    "url": "https://pokeapi.co/api/v2/pokemon/457/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
    "types": ["water"]
}, {
    "name": "mantyke",
    "url": "https://pokeapi.co/api/v2/pokemon/458/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
    "types": ["water", "flying"]
}, {
    "name": "snover",
    "url": "https://pokeapi.co/api/v2/pokemon/459/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
    "types": ["grass", "ice"]
}, {
    "name": "abomasnow",
    "url": "https://pokeapi.co/api/v2/pokemon/460/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
    "types": ["grass", "ice"]
}, {
    "name": "weavile",
    "url": "https://pokeapi.co/api/v2/pokemon/461/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
    "types": ["dark", "ice"]
}, {
    "name": "magnezone",
    "url": "https://pokeapi.co/api/v2/pokemon/462/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
    "types": ["electric", "steel"]
}, {
    "name": "lickilicky",
    "url": "https://pokeapi.co/api/v2/pokemon/463/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
    "types": ["normal"]
}, {
    "name": "rhyperior",
    "url": "https://pokeapi.co/api/v2/pokemon/464/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
    "types": ["ground", "rock"]
}, {
    "name": "tangrowth",
    "url": "https://pokeapi.co/api/v2/pokemon/465/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
    "types": ["grass"]
}, {
    "name": "electivire",
    "url": "https://pokeapi.co/api/v2/pokemon/466/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
    "types": ["electric"]
}, {
    "name": "magmortar",
    "url": "https://pokeapi.co/api/v2/pokemon/467/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
    "types": ["fire"]
}, {
    "name": "togekiss",
    "url": "https://pokeapi.co/api/v2/pokemon/468/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
    "types": ["fairy", "flying"]
}, {
    "name": "yanmega",
    "url": "https://pokeapi.co/api/v2/pokemon/469/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
    "types": ["bug", "flying"]
}, {
    "name": "leafeon",
    "url": "https://pokeapi.co/api/v2/pokemon/470/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
    "types": ["grass"]
}, {
    "name": "glaceon",
    "url": "https://pokeapi.co/api/v2/pokemon/471/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
    "types": ["ice"]
}, {
    "name": "gliscor",
    "url": "https://pokeapi.co/api/v2/pokemon/472/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
    "types": ["ground", "flying"]
}, {
    "name": "mamoswine",
    "url": "https://pokeapi.co/api/v2/pokemon/473/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
    "types": ["ice", "ground"]
}, {
    "name": "porygon-z",
    "url": "https://pokeapi.co/api/v2/pokemon/474/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
    "types": ["normal"]
}, {
    "name": "gallade",
    "url": "https://pokeapi.co/api/v2/pokemon/475/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
    "types": ["psychic", "fighting"]
}, {
    "name": "probopass",
    "url": "https://pokeapi.co/api/v2/pokemon/476/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
    "types": ["rock", "steel"]
}, {
    "name": "dusknoir",
    "url": "https://pokeapi.co/api/v2/pokemon/477/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
    "types": ["ghost"]
}, {
    "name": "froslass",
    "url": "https://pokeapi.co/api/v2/pokemon/478/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
    "types": ["ice", "ghost"]
}, {
    "name": "rotom",
    "url": "https://pokeapi.co/api/v2/pokemon/479/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
    "types": ["electric", "ghost"]
}, {
    "name": "uxie",
    "url": "https://pokeapi.co/api/v2/pokemon/480/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
    "types": ["psychic"]
}, {
    "name": "mesprit",
    "url": "https://pokeapi.co/api/v2/pokemon/481/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
    "types": ["psychic"]
}, {
    "name": "azelf",
    "url": "https://pokeapi.co/api/v2/pokemon/482/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
    "types": ["psychic"]
}, {
    "name": "dialga",
    "url": "https://pokeapi.co/api/v2/pokemon/483/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
    "types": ["steel", "dragon"]
}, {
    "name": "palkia",
    "url": "https://pokeapi.co/api/v2/pokemon/484/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
    "types": ["water", "dragon"]
}, {
    "name": "heatran",
    "url": "https://pokeapi.co/api/v2/pokemon/485/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
    "types": ["fire", "steel"]
}, {
    "name": "regigigas",
    "url": "https://pokeapi.co/api/v2/pokemon/486/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
    "types": ["normal"]
}, {
    "name": "giratina-altered",
    "url": "https://pokeapi.co/api/v2/pokemon/487/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
    "types": ["ghost", "dragon"]
}, {
    "name": "cresselia",
    "url": "https://pokeapi.co/api/v2/pokemon/488/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
    "types": ["psychic"]
}, {
    "name": "phione",
    "url": "https://pokeapi.co/api/v2/pokemon/489/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
    "types": ["water"]
}, {
    "name": "manaphy",
    "url": "https://pokeapi.co/api/v2/pokemon/490/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
    "types": ["water"]
}, {
    "name": "darkrai",
    "url": "https://pokeapi.co/api/v2/pokemon/491/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
    "types": ["dark"]
}, {
    "name": "shaymin-land",
    "url": "https://pokeapi.co/api/v2/pokemon/492/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
    "types": ["grass"]
}, {
    "name": "arceus",
    "url": "https://pokeapi.co/api/v2/pokemon/493/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
    "types": ["normal"]
}, {
    "name": "victini",
    "url": "https://pokeapi.co/api/v2/pokemon/494/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
    "types": ["psychic", "fire"]
}, {
    "name": "snivy",
    "url": "https://pokeapi.co/api/v2/pokemon/495/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
    "types": ["grass"]
}, {
    "name": "servine",
    "url": "https://pokeapi.co/api/v2/pokemon/496/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
    "types": ["grass"]
}, {
    "name": "serperior",
    "url": "https://pokeapi.co/api/v2/pokemon/497/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
    "types": ["grass"]
}, {
    "name": "tepig",
    "url": "https://pokeapi.co/api/v2/pokemon/498/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
    "types": ["fire"]
}, {
    "name": "pignite",
    "url": "https://pokeapi.co/api/v2/pokemon/499/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
    "types": ["fire", "fighting"]
}, {
    "name": "emboar",
    "url": "https://pokeapi.co/api/v2/pokemon/500/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
    "types": ["fire", "fighting"]
}, {
    "name": "oshawott",
    "url": "https://pokeapi.co/api/v2/pokemon/501/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
    "types": ["water"]
}, {
    "name": "dewott",
    "url": "https://pokeapi.co/api/v2/pokemon/502/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
    "types": ["water"]
}, {
    "name": "samurott",
    "url": "https://pokeapi.co/api/v2/pokemon/503/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
    "types": ["water"]
}, {
    "name": "patrat",
    "url": "https://pokeapi.co/api/v2/pokemon/504/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png",
    "types": ["normal"]
}, {
    "name": "watchog",
    "url": "https://pokeapi.co/api/v2/pokemon/505/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",
    "types": ["normal"]
}, {
    "name": "lillipup",
    "url": "https://pokeapi.co/api/v2/pokemon/506/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png",
    "types": ["normal"]
}, {
    "name": "herdier",
    "url": "https://pokeapi.co/api/v2/pokemon/507/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png",
    "types": ["normal"]
}, {
    "name": "stoutland",
    "url": "https://pokeapi.co/api/v2/pokemon/508/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",
    "types": ["normal"]
}, {
    "name": "purrloin",
    "url": "https://pokeapi.co/api/v2/pokemon/509/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png",
    "types": ["dark"]
}, {
    "name": "liepard",
    "url": "https://pokeapi.co/api/v2/pokemon/510/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",
    "types": ["dark"]
}, {
    "name": "pansage",
    "url": "https://pokeapi.co/api/v2/pokemon/511/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png",
    "types": ["grass"]
}, {
    "name": "simisage",
    "url": "https://pokeapi.co/api/v2/pokemon/512/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",
    "types": ["grass"]
}, {
    "name": "pansear",
    "url": "https://pokeapi.co/api/v2/pokemon/513/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png",
    "types": ["fire"]
}, {
    "name": "simisear",
    "url": "https://pokeapi.co/api/v2/pokemon/514/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",
    "types": ["fire"]
}, {
    "name": "panpour",
    "url": "https://pokeapi.co/api/v2/pokemon/515/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png",
    "types": ["water"]
}, {
    "name": "simipour",
    "url": "https://pokeapi.co/api/v2/pokemon/516/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",
    "types": ["water"]
}, {
    "name": "munna",
    "url": "https://pokeapi.co/api/v2/pokemon/517/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png",
    "types": ["psychic"]
}, {
    "name": "musharna",
    "url": "https://pokeapi.co/api/v2/pokemon/518/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",
    "types": ["psychic"]
}, {
    "name": "pidove",
    "url": "https://pokeapi.co/api/v2/pokemon/519/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png",
    "types": ["normal", "flying"]
}, {
    "name": "tranquill",
    "url": "https://pokeapi.co/api/v2/pokemon/520/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png",
    "types": ["normal", "flying"]
}, {
    "name": "unfezant",
    "url": "https://pokeapi.co/api/v2/pokemon/521/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",
    "types": ["normal", "flying"]
}, {
    "name": "blitzle",
    "url": "https://pokeapi.co/api/v2/pokemon/522/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png",
    "types": ["electric"]
}, {
    "name": "zebstrika",
    "url": "https://pokeapi.co/api/v2/pokemon/523/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
    "types": ["electric"]
}, {
    "name": "roggenrola",
    "url": "https://pokeapi.co/api/v2/pokemon/524/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png",
    "types": ["rock"]
}, {
    "name": "boldore",
    "url": "https://pokeapi.co/api/v2/pokemon/525/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png",
    "types": ["rock"]
}, {
    "name": "gigalith",
    "url": "https://pokeapi.co/api/v2/pokemon/526/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",
    "types": ["rock"]
}, {
    "name": "woobat",
    "url": "https://pokeapi.co/api/v2/pokemon/527/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png",
    "types": ["psychic", "flying"]
}, {
    "name": "swoobat",
    "url": "https://pokeapi.co/api/v2/pokemon/528/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",
    "types": ["psychic", "flying"]
}, {
    "name": "drilbur",
    "url": "https://pokeapi.co/api/v2/pokemon/529/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png",
    "types": ["ground"]
}, {
    "name": "excadrill",
    "url": "https://pokeapi.co/api/v2/pokemon/530/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
    "types": ["ground", "steel"]
}, {
    "name": "audino",
    "url": "https://pokeapi.co/api/v2/pokemon/531/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",
    "types": ["normal"]
}, {
    "name": "timburr",
    "url": "https://pokeapi.co/api/v2/pokemon/532/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",
    "types": ["fighting"]
}, {
    "name": "gurdurr",
    "url": "https://pokeapi.co/api/v2/pokemon/533/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png",
    "types": ["fighting"]
}, {
    "name": "conkeldurr",
    "url": "https://pokeapi.co/api/v2/pokemon/534/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",
    "types": ["fighting"]
}, {
    "name": "tympole",
    "url": "https://pokeapi.co/api/v2/pokemon/535/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png",
    "types": ["water"]
}, {
    "name": "palpitoad",
    "url": "https://pokeapi.co/api/v2/pokemon/536/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png",
    "types": ["water", "ground"]
}, {
    "name": "seismitoad",
    "url": "https://pokeapi.co/api/v2/pokemon/537/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",
    "types": ["water", "ground"]
}, {
    "name": "throh",
    "url": "https://pokeapi.co/api/v2/pokemon/538/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",
    "types": ["fighting"]
}, {
    "name": "sawk",
    "url": "https://pokeapi.co/api/v2/pokemon/539/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",
    "types": ["fighting"]
}, {
    "name": "sewaddle",
    "url": "https://pokeapi.co/api/v2/pokemon/540/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png",
    "types": ["bug", "grass"]
}, {
    "name": "swadloon",
    "url": "https://pokeapi.co/api/v2/pokemon/541/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",
    "types": ["bug", "grass"]
}, {
    "name": "leavanny",
    "url": "https://pokeapi.co/api/v2/pokemon/542/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",
    "types": ["bug", "grass"]
}, {
    "name": "venipede",
    "url": "https://pokeapi.co/api/v2/pokemon/543/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png",
    "types": ["bug", "poison"]
}, {
    "name": "whirlipede",
    "url": "https://pokeapi.co/api/v2/pokemon/544/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png",
    "types": ["bug", "poison"]
}, {
    "name": "scolipede",
    "url": "https://pokeapi.co/api/v2/pokemon/545/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",
    "types": ["bug", "poison"]
}, {
    "name": "cottonee",
    "url": "https://pokeapi.co/api/v2/pokemon/546/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png",
    "types": ["grass", "fairy"]
}, {
    "name": "whimsicott",
    "url": "https://pokeapi.co/api/v2/pokemon/547/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",
    "types": ["grass", "fairy"]
}, {
    "name": "petilil",
    "url": "https://pokeapi.co/api/v2/pokemon/548/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png",
    "types": ["grass"]
}, {
    "name": "lilligant",
    "url": "https://pokeapi.co/api/v2/pokemon/549/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
    "types": ["grass"]
}, {
    "name": "basculin-red-striped",
    "url": "https://pokeapi.co/api/v2/pokemon/550/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png",
    "types": ["water"]
}, {
    "name": "sandile",
    "url": "https://pokeapi.co/api/v2/pokemon/551/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png",
    "types": ["ground", "dark"]
}, {
    "name": "krokorok",
    "url": "https://pokeapi.co/api/v2/pokemon/552/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png",
    "types": ["ground", "dark"]
}, {
    "name": "krookodile",
    "url": "https://pokeapi.co/api/v2/pokemon/553/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",
    "types": ["ground", "dark"]
}, {
    "name": "darumaka",
    "url": "https://pokeapi.co/api/v2/pokemon/554/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png",
    "types": ["fire"]
}, {
    "name": "darmanitan-standard",
    "url": "https://pokeapi.co/api/v2/pokemon/555/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png",
    "types": ["fire"]
}, {
    "name": "maractus",
    "url": "https://pokeapi.co/api/v2/pokemon/556/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",
    "types": ["grass"]
}, {
    "name": "dwebble",
    "url": "https://pokeapi.co/api/v2/pokemon/557/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png",
    "types": ["bug", "rock"]
}, {
    "name": "crustle",
    "url": "https://pokeapi.co/api/v2/pokemon/558/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",
    "types": ["bug", "rock"]
}, {
    "name": "scraggy",
    "url": "https://pokeapi.co/api/v2/pokemon/559/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png",
    "types": ["dark", "fighting"]
}, {
    "name": "scrafty",
    "url": "https://pokeapi.co/api/v2/pokemon/560/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",
    "types": ["dark", "fighting"]
}, {
    "name": "sigilyph",
    "url": "https://pokeapi.co/api/v2/pokemon/561/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",
    "types": ["psychic", "flying"]
}, {
    "name": "yamask",
    "url": "https://pokeapi.co/api/v2/pokemon/562/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",
    "types": ["ghost"]
}, {
    "name": "cofagrigus",
    "url": "https://pokeapi.co/api/v2/pokemon/563/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
    "types": ["ghost"]
}, {
    "name": "tirtouga",
    "url": "https://pokeapi.co/api/v2/pokemon/564/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png",
    "types": ["water", "rock"]
}, {
    "name": "carracosta",
    "url": "https://pokeapi.co/api/v2/pokemon/565/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
    "types": ["water", "rock"]
}, {
    "name": "archen",
    "url": "https://pokeapi.co/api/v2/pokemon/566/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png",
    "types": ["rock", "flying"]
}, {
    "name": "archeops",
    "url": "https://pokeapi.co/api/v2/pokemon/567/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
    "types": ["rock", "flying"]
}, {
    "name": "trubbish",
    "url": "https://pokeapi.co/api/v2/pokemon/568/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png",
    "types": ["poison"]
}, {
    "name": "garbodor",
    "url": "https://pokeapi.co/api/v2/pokemon/569/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
    "types": ["poison"]
}, {
    "name": "zorua",
    "url": "https://pokeapi.co/api/v2/pokemon/570/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png",
    "types": ["dark"]
}, {
    "name": "zoroark",
    "url": "https://pokeapi.co/api/v2/pokemon/571/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
    "types": ["dark"]
}, {
    "name": "minccino",
    "url": "https://pokeapi.co/api/v2/pokemon/572/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",
    "types": ["normal"]
}, {
    "name": "cinccino",
    "url": "https://pokeapi.co/api/v2/pokemon/573/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
    "types": ["normal"]
}, {
    "name": "gothita",
    "url": "https://pokeapi.co/api/v2/pokemon/574/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png",
    "types": ["psychic"]
}, {
    "name": "gothorita",
    "url": "https://pokeapi.co/api/v2/pokemon/575/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png",
    "types": ["psychic"]
}, {
    "name": "gothitelle",
    "url": "https://pokeapi.co/api/v2/pokemon/576/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
    "types": ["psychic"]
}, {
    "name": "solosis",
    "url": "https://pokeapi.co/api/v2/pokemon/577/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png",
    "types": ["psychic"]
}, {
    "name": "duosion",
    "url": "https://pokeapi.co/api/v2/pokemon/578/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png",
    "types": ["psychic"]
}, {
    "name": "reuniclus",
    "url": "https://pokeapi.co/api/v2/pokemon/579/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",
    "types": ["psychic"]
}, {
    "name": "ducklett",
    "url": "https://pokeapi.co/api/v2/pokemon/580/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png",
    "types": ["water", "flying"]
}, {
    "name": "swanna",
    "url": "https://pokeapi.co/api/v2/pokemon/581/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",
    "types": ["water", "flying"]
}, {
    "name": "vanillite",
    "url": "https://pokeapi.co/api/v2/pokemon/582/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png",
    "types": ["ice"]
}, {
    "name": "vanillish",
    "url": "https://pokeapi.co/api/v2/pokemon/583/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png",
    "types": ["ice"]
}, {
    "name": "vanilluxe",
    "url": "https://pokeapi.co/api/v2/pokemon/584/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
    "types": ["ice"]
}, {
    "name": "deerling",
    "url": "https://pokeapi.co/api/v2/pokemon/585/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png",
    "types": ["normal", "grass"]
}, {
    "name": "sawsbuck",
    "url": "https://pokeapi.co/api/v2/pokemon/586/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",
    "types": ["normal", "grass"]
}, {
    "name": "emolga",
    "url": "https://pokeapi.co/api/v2/pokemon/587/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",
    "types": ["electric", "flying"]
}, {
    "name": "karrablast",
    "url": "https://pokeapi.co/api/v2/pokemon/588/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png",
    "types": ["bug"]
}, {
    "name": "escavalier",
    "url": "https://pokeapi.co/api/v2/pokemon/589/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
    "types": ["bug", "steel"]
}, {
    "name": "foongus",
    "url": "https://pokeapi.co/api/v2/pokemon/590/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png",
    "types": ["grass", "poison"]
}, {
    "name": "amoonguss",
    "url": "https://pokeapi.co/api/v2/pokemon/591/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
    "types": ["grass", "poison"]
}, {
    "name": "frillish",
    "url": "https://pokeapi.co/api/v2/pokemon/592/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png",
    "types": ["water", "ghost"]
}, {
    "name": "jellicent",
    "url": "https://pokeapi.co/api/v2/pokemon/593/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",
    "types": ["water", "ghost"]
}, {
    "name": "alomomola",
    "url": "https://pokeapi.co/api/v2/pokemon/594/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",
    "types": ["water"]
}, {
    "name": "joltik",
    "url": "https://pokeapi.co/api/v2/pokemon/595/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
    "types": ["bug", "electric"]
}, {
    "name": "galvantula",
    "url": "https://pokeapi.co/api/v2/pokemon/596/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",
    "types": ["bug", "electric"]
}, {
    "name": "ferroseed",
    "url": "https://pokeapi.co/api/v2/pokemon/597/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png",
    "types": ["grass", "steel"]
}, {
    "name": "ferrothorn",
    "url": "https://pokeapi.co/api/v2/pokemon/598/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
    "types": ["grass", "steel"]
}, {
    "name": "klink",
    "url": "https://pokeapi.co/api/v2/pokemon/599/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png",
    "types": ["steel"]
}, {
    "name": "klang",
    "url": "https://pokeapi.co/api/v2/pokemon/600/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png",
    "types": ["steel"]
}, {
    "name": "klinklang",
    "url": "https://pokeapi.co/api/v2/pokemon/601/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
    "types": ["steel"]
}, {
    "name": "tynamo",
    "url": "https://pokeapi.co/api/v2/pokemon/602/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png",
    "types": ["electric"]
}, {
    "name": "eelektrik",
    "url": "https://pokeapi.co/api/v2/pokemon/603/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png",
    "types": ["electric"]
}, {
    "name": "eelektross",
    "url": "https://pokeapi.co/api/v2/pokemon/604/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",
    "types": ["electric"]
}, {
    "name": "elgyem",
    "url": "https://pokeapi.co/api/v2/pokemon/605/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png",
    "types": ["psychic"]
}, {
    "name": "beheeyem",
    "url": "https://pokeapi.co/api/v2/pokemon/606/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",
    "types": ["psychic"]
}, {
    "name": "litwick",
    "url": "https://pokeapi.co/api/v2/pokemon/607/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",
    "types": ["ghost", "fire"]
}, {
    "name": "lampent",
    "url": "https://pokeapi.co/api/v2/pokemon/608/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png",
    "types": ["ghost", "fire"]
}, {
    "name": "chandelure",
    "url": "https://pokeapi.co/api/v2/pokemon/609/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
    "types": ["ghost", "fire"]
}, {
    "name": "axew",
    "url": "https://pokeapi.co/api/v2/pokemon/610/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",
    "types": ["dragon"]
}, {
    "name": "fraxure",
    "url": "https://pokeapi.co/api/v2/pokemon/611/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png",
    "types": ["dragon"]
}, {
    "name": "haxorus",
    "url": "https://pokeapi.co/api/v2/pokemon/612/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
    "types": ["dragon"]
}, {
    "name": "cubchoo",
    "url": "https://pokeapi.co/api/v2/pokemon/613/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png",
    "types": ["ice"]
}, {
    "name": "beartic",
    "url": "https://pokeapi.co/api/v2/pokemon/614/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",
    "types": ["ice"]
}, {
    "name": "cryogonal",
    "url": "https://pokeapi.co/api/v2/pokemon/615/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",
    "types": ["ice"]
}, {
    "name": "shelmet",
    "url": "https://pokeapi.co/api/v2/pokemon/616/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png",
    "types": ["bug"]
}, {
    "name": "accelgor",
    "url": "https://pokeapi.co/api/v2/pokemon/617/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
    "types": ["bug"]
}, {
    "name": "stunfisk",
    "url": "https://pokeapi.co/api/v2/pokemon/618/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",
    "types": ["ground", "electric"]
}, {
    "name": "mienfoo",
    "url": "https://pokeapi.co/api/v2/pokemon/619/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png",
    "types": ["fighting"]
}, {
    "name": "mienshao",
    "url": "https://pokeapi.co/api/v2/pokemon/620/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",
    "types": ["fighting"]
}, {
    "name": "druddigon",
    "url": "https://pokeapi.co/api/v2/pokemon/621/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
    "types": ["dragon"]
}, {
    "name": "golett",
    "url": "https://pokeapi.co/api/v2/pokemon/622/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png",
    "types": ["ground", "ghost"]
}, {
    "name": "golurk",
    "url": "https://pokeapi.co/api/v2/pokemon/623/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
    "types": ["ground", "ghost"]
}, {
    "name": "pawniard",
    "url": "https://pokeapi.co/api/v2/pokemon/624/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png",
    "types": ["dark", "steel"]
}, {
    "name": "bisharp",
    "url": "https://pokeapi.co/api/v2/pokemon/625/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",
    "types": ["dark", "steel"]
}, {
    "name": "bouffalant",
    "url": "https://pokeapi.co/api/v2/pokemon/626/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
    "types": ["normal"]
}, {
    "name": "rufflet",
    "url": "https://pokeapi.co/api/v2/pokemon/627/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png",
    "types": ["normal", "flying"]
}, {
    "name": "braviary",
    "url": "https://pokeapi.co/api/v2/pokemon/628/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",
    "types": ["normal", "flying"]
}, {
    "name": "vullaby",
    "url": "https://pokeapi.co/api/v2/pokemon/629/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png",
    "types": ["dark", "flying"]
}, {
    "name": "mandibuzz",
    "url": "https://pokeapi.co/api/v2/pokemon/630/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",
    "types": ["dark", "flying"]
}, {
    "name": "heatmor",
    "url": "https://pokeapi.co/api/v2/pokemon/631/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",
    "types": ["fire"]
}, {
    "name": "durant",
    "url": "https://pokeapi.co/api/v2/pokemon/632/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
    "types": ["bug", "steel"]
}, {
    "name": "deino",
    "url": "https://pokeapi.co/api/v2/pokemon/633/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",
    "types": ["dark", "dragon"]
}, {
    "name": "zweilous",
    "url": "https://pokeapi.co/api/v2/pokemon/634/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png",
    "types": ["dark", "dragon"]
}, {
    "name": "hydreigon",
    "url": "https://pokeapi.co/api/v2/pokemon/635/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",
    "types": ["dark", "dragon"]
}, {
    "name": "larvesta",
    "url": "https://pokeapi.co/api/v2/pokemon/636/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
    "types": ["bug", "fire"]
}, {
    "name": "volcarona",
    "url": "https://pokeapi.co/api/v2/pokemon/637/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
    "types": ["bug", "fire"]
}, {
    "name": "cobalion",
    "url": "https://pokeapi.co/api/v2/pokemon/638/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",
    "types": ["steel", "fighting"]
}, {
    "name": "terrakion",
    "url": "https://pokeapi.co/api/v2/pokemon/639/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",
    "types": ["rock", "fighting"]
}, {
    "name": "virizion",
    "url": "https://pokeapi.co/api/v2/pokemon/640/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",
    "types": ["grass", "fighting"]
}, {
    "name": "tornadus-incarnate",
    "url": "https://pokeapi.co/api/v2/pokemon/641/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
    "types": ["flying"]
}, {
    "name": "thundurus-incarnate",
    "url": "https://pokeapi.co/api/v2/pokemon/642/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png",
    "types": ["electric", "flying"]
}, {
    "name": "reshiram",
    "url": "https://pokeapi.co/api/v2/pokemon/643/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
    "types": ["dragon", "fire"]
}, {
    "name": "zekrom",
    "url": "https://pokeapi.co/api/v2/pokemon/644/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
    "types": ["dragon", "electric"]
}, {
    "name": "landorus-incarnate",
    "url": "https://pokeapi.co/api/v2/pokemon/645/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png",
    "types": ["ground", "flying"]
}, {
    "name": "kyurem",
    "url": "https://pokeapi.co/api/v2/pokemon/646/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",
    "types": ["dragon", "ice"]
}, {
    "name": "keldeo-ordinary",
    "url": "https://pokeapi.co/api/v2/pokemon/647/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png",
    "types": ["water", "fighting"]
}, {
    "name": "meloetta-aria",
    "url": "https://pokeapi.co/api/v2/pokemon/648/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",
    "types": ["normal", "psychic"]
}, {
    "name": "genesect",
    "url": "https://pokeapi.co/api/v2/pokemon/649/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",
    "types": ["bug", "steel"]
}, {
    "name": "chespin",
    "url": "https://pokeapi.co/api/v2/pokemon/650/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
    "types": ["grass"]
}, {
    "name": "quilladin",
    "url": "https://pokeapi.co/api/v2/pokemon/651/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
    "types": ["grass"]
}, {
    "name": "chesnaught",
    "url": "https://pokeapi.co/api/v2/pokemon/652/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
    "types": ["grass", "fighting"]
}, {
    "name": "fennekin",
    "url": "https://pokeapi.co/api/v2/pokemon/653/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
    "types": ["fire"]
}, {
    "name": "braixen",
    "url": "https://pokeapi.co/api/v2/pokemon/654/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
    "types": ["fire"]
}, {
    "name": "delphox",
    "url": "https://pokeapi.co/api/v2/pokemon/655/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
    "types": ["fire", "psychic"]
}, {
    "name": "froakie",
    "url": "https://pokeapi.co/api/v2/pokemon/656/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
    "types": ["water"]
}, {
    "name": "frogadier",
    "url": "https://pokeapi.co/api/v2/pokemon/657/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
    "types": ["water"]
}, {
    "name": "greninja",
    "url": "https://pokeapi.co/api/v2/pokemon/658/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
    "types": ["water", "dark"]
}, {
    "name": "bunnelby",
    "url": "https://pokeapi.co/api/v2/pokemon/659/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png",
    "types": ["normal"]
}, {
    "name": "diggersby",
    "url": "https://pokeapi.co/api/v2/pokemon/660/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",
    "types": ["normal", "ground"]
}, {
    "name": "fletchling",
    "url": "https://pokeapi.co/api/v2/pokemon/661/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png",
    "types": ["normal", "flying"]
}, {
    "name": "fletchinder",
    "url": "https://pokeapi.co/api/v2/pokemon/662/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png",
    "types": ["fire", "flying"]
}, {
    "name": "talonflame",
    "url": "https://pokeapi.co/api/v2/pokemon/663/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",
    "types": ["fire", "flying"]
}, {
    "name": "scatterbug",
    "url": "https://pokeapi.co/api/v2/pokemon/664/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png",
    "types": ["bug"]
}, {
    "name": "spewpa",
    "url": "https://pokeapi.co/api/v2/pokemon/665/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png",
    "types": ["bug"]
}, {
    "name": "vivillon",
    "url": "https://pokeapi.co/api/v2/pokemon/666/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",
    "types": ["bug", "flying"]
}, {
    "name": "litleo",
    "url": "https://pokeapi.co/api/v2/pokemon/667/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",
    "types": ["fire", "normal"]
}, {
    "name": "pyroar",
    "url": "https://pokeapi.co/api/v2/pokemon/668/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",
    "types": ["fire", "normal"]
}, {
    "name": "flabebe",
    "url": "https://pokeapi.co/api/v2/pokemon/669/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",
    "types": ["fairy"]
}, {
    "name": "floette",
    "url": "https://pokeapi.co/api/v2/pokemon/670/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",
    "types": ["fairy"]
}, {
    "name": "florges",
    "url": "https://pokeapi.co/api/v2/pokemon/671/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
    "types": ["fairy"]
}, {
    "name": "skiddo",
    "url": "https://pokeapi.co/api/v2/pokemon/672/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png",
    "types": ["grass"]
}, {
    "name": "gogoat",
    "url": "https://pokeapi.co/api/v2/pokemon/673/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",
    "types": ["grass"]
}, {
    "name": "pancham",
    "url": "https://pokeapi.co/api/v2/pokemon/674/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png",
    "types": ["fighting"]
}, {
    "name": "pangoro",
    "url": "https://pokeapi.co/api/v2/pokemon/675/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",
    "types": ["fighting", "dark"]
}, {
    "name": "furfrou",
    "url": "https://pokeapi.co/api/v2/pokemon/676/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png",
    "types": ["normal"]
}, {
    "name": "espurr",
    "url": "https://pokeapi.co/api/v2/pokemon/677/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png",
    "types": ["psychic"]
}, {
    "name": "meowstic-male",
    "url": "https://pokeapi.co/api/v2/pokemon/678/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png",
    "types": ["psychic"]
}, {
    "name": "honedge",
    "url": "https://pokeapi.co/api/v2/pokemon/679/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png",
    "types": ["steel", "ghost"]
}, {
    "name": "doublade",
    "url": "https://pokeapi.co/api/v2/pokemon/680/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png",
    "types": ["steel", "ghost"]
}, {
    "name": "aegislash-shield",
    "url": "https://pokeapi.co/api/v2/pokemon/681/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
    "types": ["steel", "ghost"]
}, {
    "name": "spritzee",
    "url": "https://pokeapi.co/api/v2/pokemon/682/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png",
    "types": ["fairy"]
}, {
    "name": "aromatisse",
    "url": "https://pokeapi.co/api/v2/pokemon/683/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",
    "types": ["fairy"]
}, {
    "name": "swirlix",
    "url": "https://pokeapi.co/api/v2/pokemon/684/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png",
    "types": ["fairy"]
}, {
    "name": "slurpuff",
    "url": "https://pokeapi.co/api/v2/pokemon/685/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",
    "types": ["fairy"]
}, {
    "name": "inkay",
    "url": "https://pokeapi.co/api/v2/pokemon/686/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",
    "types": ["dark", "psychic"]
}, {
    "name": "malamar",
    "url": "https://pokeapi.co/api/v2/pokemon/687/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",
    "types": ["dark", "psychic"]
}, {
    "name": "binacle",
    "url": "https://pokeapi.co/api/v2/pokemon/688/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",
    "types": ["rock", "water"]
}, {
    "name": "barbaracle",
    "url": "https://pokeapi.co/api/v2/pokemon/689/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",
    "types": ["rock", "water"]
}, {
    "name": "skrelp",
    "url": "https://pokeapi.co/api/v2/pokemon/690/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png",
    "types": ["poison", "water"]
}, {
    "name": "dragalge",
    "url": "https://pokeapi.co/api/v2/pokemon/691/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",
    "types": ["poison", "dragon"]
}, {
    "name": "clauncher",
    "url": "https://pokeapi.co/api/v2/pokemon/692/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png",
    "types": ["water"]
}, {
    "name": "clawitzer",
    "url": "https://pokeapi.co/api/v2/pokemon/693/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",
    "types": ["water"]
}, {
    "name": "helioptile",
    "url": "https://pokeapi.co/api/v2/pokemon/694/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",
    "types": ["electric", "normal"]
}, {
    "name": "heliolisk",
    "url": "https://pokeapi.co/api/v2/pokemon/695/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",
    "types": ["electric", "normal"]
}, {
    "name": "tyrunt",
    "url": "https://pokeapi.co/api/v2/pokemon/696/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",
    "types": ["rock", "dragon"]
}, {
    "name": "tyrantrum",
    "url": "https://pokeapi.co/api/v2/pokemon/697/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
    "types": ["rock", "dragon"]
}, {
    "name": "amaura",
    "url": "https://pokeapi.co/api/v2/pokemon/698/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",
    "types": ["rock", "ice"]
}, {
    "name": "aurorus",
    "url": "https://pokeapi.co/api/v2/pokemon/699/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",
    "types": ["rock", "ice"]
}, {
    "name": "sylveon",
    "url": "https://pokeapi.co/api/v2/pokemon/700/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
    "types": ["fairy"]
}, {
    "name": "hawlucha",
    "url": "https://pokeapi.co/api/v2/pokemon/701/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",
    "types": ["fighting", "flying"]
}, {
    "name": "dedenne",
    "url": "https://pokeapi.co/api/v2/pokemon/702/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",
    "types": ["electric", "fairy"]
}, {
    "name": "carbink",
    "url": "https://pokeapi.co/api/v2/pokemon/703/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",
    "types": ["rock", "fairy"]
}, {
    "name": "goomy",
    "url": "https://pokeapi.co/api/v2/pokemon/704/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png",
    "types": ["dragon"]
}, {
    "name": "sliggoo",
    "url": "https://pokeapi.co/api/v2/pokemon/705/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png",
    "types": ["dragon"]
}, {
    "name": "goodra",
    "url": "https://pokeapi.co/api/v2/pokemon/706/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
    "types": ["dragon"]
}, {
    "name": "klefki",
    "url": "https://pokeapi.co/api/v2/pokemon/707/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",
    "types": ["steel", "fairy"]
}, {
    "name": "phantump",
    "url": "https://pokeapi.co/api/v2/pokemon/708/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
    "types": ["ghost", "grass"]
}, {
    "name": "trevenant",
    "url": "https://pokeapi.co/api/v2/pokemon/709/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",
    "types": ["ghost", "grass"]
}, {
    "name": "pumpkaboo-average",
    "url": "https://pokeapi.co/api/v2/pokemon/710/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png",
    "types": ["ghost", "grass"]
}, {
    "name": "gourgeist-average",
    "url": "https://pokeapi.co/api/v2/pokemon/711/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png",
    "types": ["ghost", "grass"]
}, {
    "name": "bergmite",
    "url": "https://pokeapi.co/api/v2/pokemon/712/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png",
    "types": ["ice"]
}, {
    "name": "avalugg",
    "url": "https://pokeapi.co/api/v2/pokemon/713/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",
    "types": ["ice"]
}, {
    "name": "noibat",
    "url": "https://pokeapi.co/api/v2/pokemon/714/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",
    "types": ["flying", "dragon"]
}, {
    "name": "noivern",
    "url": "https://pokeapi.co/api/v2/pokemon/715/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
    "types": ["flying", "dragon"]
}, {
    "name": "xerneas",
    "url": "https://pokeapi.co/api/v2/pokemon/716/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
    "types": ["fairy"]
}, {
    "name": "yveltal",
    "url": "https://pokeapi.co/api/v2/pokemon/717/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
    "types": ["dark", "flying"]
}, {
    "name": "zygarde-50",
    "url": "https://pokeapi.co/api/v2/pokemon/718/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",
    "types": ["dragon", "ground"]
}, {
    "name": "diancie",
    "url": "https://pokeapi.co/api/v2/pokemon/719/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
    "types": ["rock", "fairy"]
}, {
    "name": "hoopa",
    "url": "https://pokeapi.co/api/v2/pokemon/720/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",
    "types": ["psychic", "ghost"]
}, {
    "name": "volcanion",
    "url": "https://pokeapi.co/api/v2/pokemon/721/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",
    "types": ["fire", "water"]
}, {
    "name": "rowlet",
    "url": "https://pokeapi.co/api/v2/pokemon/722/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
    "types": ["grass", "flying"]
}, {
    "name": "dartrix",
    "url": "https://pokeapi.co/api/v2/pokemon/723/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png",
    "types": ["grass", "flying"]
}, {
    "name": "decidueye",
    "url": "https://pokeapi.co/api/v2/pokemon/724/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
    "types": ["grass", "ghost"]
}, {
    "name": "litten",
    "url": "https://pokeapi.co/api/v2/pokemon/725/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
    "types": ["fire"]
}, {
    "name": "torracat",
    "url": "https://pokeapi.co/api/v2/pokemon/726/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png",
    "types": ["fire"]
}, {
    "name": "incineroar",
    "url": "https://pokeapi.co/api/v2/pokemon/727/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
    "types": ["fire", "dark"]
}, {
    "name": "popplio",
    "url": "https://pokeapi.co/api/v2/pokemon/728/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
    "types": ["water"]
}, {
    "name": "brionne",
    "url": "https://pokeapi.co/api/v2/pokemon/729/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png",
    "types": ["water"]
}, {
    "name": "primarina",
    "url": "https://pokeapi.co/api/v2/pokemon/730/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
    "types": ["water", "fairy"]
}, {
    "name": "pikipek",
    "url": "https://pokeapi.co/api/v2/pokemon/731/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png",
    "types": ["normal", "flying"]
}, {
    "name": "trumbeak",
    "url": "https://pokeapi.co/api/v2/pokemon/732/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png",
    "types": ["normal", "flying"]
}, {
    "name": "toucannon",
    "url": "https://pokeapi.co/api/v2/pokemon/733/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",
    "types": ["normal", "flying"]
}, {
    "name": "yungoos",
    "url": "https://pokeapi.co/api/v2/pokemon/734/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",
    "types": ["normal"]
}, {
    "name": "gumshoos",
    "url": "https://pokeapi.co/api/v2/pokemon/735/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",
    "types": ["normal"]
}, {
    "name": "grubbin",
    "url": "https://pokeapi.co/api/v2/pokemon/736/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",
    "types": ["bug"]
}, {
    "name": "charjabug",
    "url": "https://pokeapi.co/api/v2/pokemon/737/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png",
    "types": ["bug", "electric"]
}, {
    "name": "vikavolt",
    "url": "https://pokeapi.co/api/v2/pokemon/738/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",
    "types": ["bug", "electric"]
}, {
    "name": "crabrawler",
    "url": "https://pokeapi.co/api/v2/pokemon/739/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png",
    "types": ["fighting"]
}, {
    "name": "crabominable",
    "url": "https://pokeapi.co/api/v2/pokemon/740/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",
    "types": ["fighting", "ice"]
}, {
    "name": "oricorio-baile",
    "url": "https://pokeapi.co/api/v2/pokemon/741/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png",
    "types": ["fire", "flying"]
}, {
    "name": "cutiefly",
    "url": "https://pokeapi.co/api/v2/pokemon/742/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",
    "types": ["bug", "fairy"]
}, {
    "name": "ribombee",
    "url": "https://pokeapi.co/api/v2/pokemon/743/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",
    "types": ["bug", "fairy"]
}, {
    "name": "rockruff",
    "url": "https://pokeapi.co/api/v2/pokemon/744/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png",
    "types": ["rock"]
}, {
    "name": "lycanroc-midday",
    "url": "https://pokeapi.co/api/v2/pokemon/745/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",
    "types": ["rock"]
}, {
    "name": "wishiwashi-solo",
    "url": "https://pokeapi.co/api/v2/pokemon/746/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png",
    "types": ["water"]
}, {
    "name": "mareanie",
    "url": "https://pokeapi.co/api/v2/pokemon/747/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png",
    "types": ["poison", "water"]
}, {
    "name": "toxapex",
    "url": "https://pokeapi.co/api/v2/pokemon/748/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
    "types": ["poison", "water"]
}, {
    "name": "mudbray",
    "url": "https://pokeapi.co/api/v2/pokemon/749/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png",
    "types": ["ground"]
}, {
    "name": "mudsdale",
    "url": "https://pokeapi.co/api/v2/pokemon/750/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
    "types": ["ground"]
}, {
    "name": "dewpider",
    "url": "https://pokeapi.co/api/v2/pokemon/751/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",
    "types": ["water", "bug"]
}, {
    "name": "araquanid",
    "url": "https://pokeapi.co/api/v2/pokemon/752/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",
    "types": ["water", "bug"]
}, {
    "name": "fomantis",
    "url": "https://pokeapi.co/api/v2/pokemon/753/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png",
    "types": ["grass"]
}, {
    "name": "lurantis",
    "url": "https://pokeapi.co/api/v2/pokemon/754/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",
    "types": ["grass"]
}, {
    "name": "morelull",
    "url": "https://pokeapi.co/api/v2/pokemon/755/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png",
    "types": ["grass", "fairy"]
}, {
    "name": "shiinotic",
    "url": "https://pokeapi.co/api/v2/pokemon/756/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",
    "types": ["grass", "fairy"]
}, {
    "name": "salandit",
    "url": "https://pokeapi.co/api/v2/pokemon/757/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",
    "types": ["poison", "fire"]
}, {
    "name": "salazzle",
    "url": "https://pokeapi.co/api/v2/pokemon/758/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
    "types": ["poison", "fire"]
}, {
    "name": "stufful",
    "url": "https://pokeapi.co/api/v2/pokemon/759/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png",
    "types": ["normal", "fighting"]
}, {
    "name": "bewear",
    "url": "https://pokeapi.co/api/v2/pokemon/760/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",
    "types": ["normal", "fighting"]
}, {
    "name": "bounsweet",
    "url": "https://pokeapi.co/api/v2/pokemon/761/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png",
    "types": ["grass"]
}, {
    "name": "steenee",
    "url": "https://pokeapi.co/api/v2/pokemon/762/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png",
    "types": ["grass"]
}, {
    "name": "tsareena",
    "url": "https://pokeapi.co/api/v2/pokemon/763/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
    "types": ["grass"]
}, {
    "name": "comfey",
    "url": "https://pokeapi.co/api/v2/pokemon/764/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",
    "types": ["fairy"]
}, {
    "name": "oranguru",
    "url": "https://pokeapi.co/api/v2/pokemon/765/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",
    "types": ["normal", "psychic"]
}, {
    "name": "passimian",
    "url": "https://pokeapi.co/api/v2/pokemon/766/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",
    "types": ["fighting"]
}, {
    "name": "wimpod",
    "url": "https://pokeapi.co/api/v2/pokemon/767/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png",
    "types": ["bug", "water"]
}, {
    "name": "golisopod",
    "url": "https://pokeapi.co/api/v2/pokemon/768/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
    "types": ["bug", "water"]
}, {
    "name": "sandygast",
    "url": "https://pokeapi.co/api/v2/pokemon/769/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png",
    "types": ["ghost", "ground"]
}, {
    "name": "palossand",
    "url": "https://pokeapi.co/api/v2/pokemon/770/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
    "types": ["ghost", "ground"]
}, {
    "name": "pyukumuku",
    "url": "https://pokeapi.co/api/v2/pokemon/771/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",
    "types": ["water"]
}, {
    "name": "type-null",
    "url": "https://pokeapi.co/api/v2/pokemon/772/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png",
    "types": ["normal"]
}, {
    "name": "silvally",
    "url": "https://pokeapi.co/api/v2/pokemon/773/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
    "types": ["normal"]
}, {
    "name": "minior-red-meteor",
    "url": "https://pokeapi.co/api/v2/pokemon/774/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png",
    "types": ["rock", "flying"]
}, {
    "name": "komala",
    "url": "https://pokeapi.co/api/v2/pokemon/775/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",
    "types": ["normal"]
}, {
    "name": "turtonator",
    "url": "https://pokeapi.co/api/v2/pokemon/776/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",
    "types": ["fire", "dragon"]
}, {
    "name": "togedemaru",
    "url": "https://pokeapi.co/api/v2/pokemon/777/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",
    "types": ["electric", "steel"]
}, {
    "name": "mimikyu-disguised",
    "url": "https://pokeapi.co/api/v2/pokemon/778/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
    "types": ["ghost", "fairy"]
}, {
    "name": "bruxish",
    "url": "https://pokeapi.co/api/v2/pokemon/779/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",
    "types": ["water", "psychic"]
}, {
    "name": "drampa",
    "url": "https://pokeapi.co/api/v2/pokemon/780/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",
    "types": ["normal", "dragon"]
}, {
    "name": "dhelmise",
    "url": "https://pokeapi.co/api/v2/pokemon/781/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
    "types": ["ghost", "grass"]
}, {
    "name": "jangmo-o",
    "url": "https://pokeapi.co/api/v2/pokemon/782/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png",
    "types": ["dragon"]
}, {
    "name": "hakamo-o",
    "url": "https://pokeapi.co/api/v2/pokemon/783/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png",
    "types": ["dragon", "fighting"]
}, {
    "name": "kommo-o",
    "url": "https://pokeapi.co/api/v2/pokemon/784/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",
    "types": ["dragon", "fighting"]
}, {
    "name": "tapu-koko",
    "url": "https://pokeapi.co/api/v2/pokemon/785/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
    "types": ["electric", "fairy"]
}, {
    "name": "tapu-lele",
    "url": "https://pokeapi.co/api/v2/pokemon/786/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",
    "types": ["psychic", "fairy"]
}, {
    "name": "tapu-bulu",
    "url": "https://pokeapi.co/api/v2/pokemon/787/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
    "types": ["grass", "fairy"]
}, {
    "name": "tapu-fini",
    "url": "https://pokeapi.co/api/v2/pokemon/788/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",
    "types": ["water", "fairy"]
}, {
    "name": "cosmog",
    "url": "https://pokeapi.co/api/v2/pokemon/789/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png",
    "types": ["psychic"]
}, {
    "name": "cosmoem",
    "url": "https://pokeapi.co/api/v2/pokemon/790/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png",
    "types": ["psychic"]
}, {
    "name": "solgaleo",
    "url": "https://pokeapi.co/api/v2/pokemon/791/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",
    "types": ["psychic", "steel"]
}, {
    "name": "lunala",
    "url": "https://pokeapi.co/api/v2/pokemon/792/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png",
    "types": ["psychic", "ghost"]
}, {
    "name": "nihilego",
    "url": "https://pokeapi.co/api/v2/pokemon/793/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",
    "types": ["rock", "poison"]
}, {
    "name": "buzzwole",
    "url": "https://pokeapi.co/api/v2/pokemon/794/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png",
    "types": ["bug", "fighting"]
}, {
    "name": "pheromosa",
    "url": "https://pokeapi.co/api/v2/pokemon/795/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png",
    "types": ["bug", "fighting"]
}, {
    "name": "xurkitree",
    "url": "https://pokeapi.co/api/v2/pokemon/796/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png",
    "types": ["electric"]
}, {
    "name": "celesteela",
    "url": "https://pokeapi.co/api/v2/pokemon/797/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png",
    "types": ["steel", "flying"]
}, {
    "name": "kartana",
    "url": "https://pokeapi.co/api/v2/pokemon/798/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png",
    "types": ["grass", "steel"]
}, {
    "name": "guzzlord",
    "url": "https://pokeapi.co/api/v2/pokemon/799/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png",
    "types": ["dark", "dragon"]
}, {
    "name": "necrozma",
    "url": "https://pokeapi.co/api/v2/pokemon/800/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png",
    "types": ["psychic"]
}, {
    "name": "magearna",
    "url": "https://pokeapi.co/api/v2/pokemon/801/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",
    "types": ["steel", "fairy"]
}, {
    "name": "marshadow",
    "url": "https://pokeapi.co/api/v2/pokemon/802/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
    "types": ["fighting", "ghost"]
}, {
    "name": "poipole",
    "url": "https://pokeapi.co/api/v2/pokemon/803/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png",
    "types": ["poison"]
}, {
    "name": "naganadel",
    "url": "https://pokeapi.co/api/v2/pokemon/804/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png",
    "types": ["poison", "dragon"]
}, {
    "name": "stakataka",
    "url": "https://pokeapi.co/api/v2/pokemon/805/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png",
    "types": ["rock", "steel"]
}, {
    "name": "blacephalon",
    "url": "https://pokeapi.co/api/v2/pokemon/806/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png",
    "types": ["fire", "ghost"]
}, {
    "name": "zeraora",
    "url": "https://pokeapi.co/api/v2/pokemon/807/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png",
    "types": ["electric"]
}, {
    "name": "meltan",
    "url": "https://pokeapi.co/api/v2/pokemon/808/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png",
    "types": ["steel"]
}, {
    "name": "melmetal",
    "url": "https://pokeapi.co/api/v2/pokemon/809/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png",
    "types": ["steel"]
}, {
    "name": "grookey",
    "url": "https://pokeapi.co/api/v2/pokemon/810/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png",
    "types": ["grass"]
}, {
    "name": "thwackey",
    "url": "https://pokeapi.co/api/v2/pokemon/811/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png",
    "types": ["grass"]
}, {
    "name": "rillaboom",
    "url": "https://pokeapi.co/api/v2/pokemon/812/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png",
    "types": ["grass"]
}, {
    "name": "scorbunny",
    "url": "https://pokeapi.co/api/v2/pokemon/813/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png",
    "types": ["fire"]
}, {
    "name": "raboot",
    "url": "https://pokeapi.co/api/v2/pokemon/814/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png",
    "types": ["fire"]
}, {
    "name": "cinderace",
    "url": "https://pokeapi.co/api/v2/pokemon/815/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png",
    "types": ["fire"]
}, {
    "name": "sobble",
    "url": "https://pokeapi.co/api/v2/pokemon/816/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png",
    "types": ["water"]
}, {
    "name": "drizzile",
    "url": "https://pokeapi.co/api/v2/pokemon/817/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png",
    "types": ["water"]
}, {
    "name": "inteleon",
    "url": "https://pokeapi.co/api/v2/pokemon/818/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png",
    "types": ["water"]
}, {
    "name": "skwovet",
    "url": "https://pokeapi.co/api/v2/pokemon/819/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png",
    "types": ["normal"]
}, {
    "name": "greedent",
    "url": "https://pokeapi.co/api/v2/pokemon/820/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png",
    "types": ["normal"]
}, {
    "name": "rookidee",
    "url": "https://pokeapi.co/api/v2/pokemon/821/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png",
    "types": ["flying"]
}, {
    "name": "corvisquire",
    "url": "https://pokeapi.co/api/v2/pokemon/822/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png",
    "types": ["flying"]
}, {
    "name": "corviknight",
    "url": "https://pokeapi.co/api/v2/pokemon/823/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png",
    "types": ["flying", "steel"]
}, {
    "name": "blipbug",
    "url": "https://pokeapi.co/api/v2/pokemon/824/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png",
    "types": ["bug"]
}, {
    "name": "dottler",
    "url": "https://pokeapi.co/api/v2/pokemon/825/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png",
    "types": ["bug", "psychic"]
}, {
    "name": "orbeetle",
    "url": "https://pokeapi.co/api/v2/pokemon/826/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png",
    "types": ["bug", "psychic"]
}, {
    "name": "nickit",
    "url": "https://pokeapi.co/api/v2/pokemon/827/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png",
    "types": ["dark"]
}, {
    "name": "thievul",
    "url": "https://pokeapi.co/api/v2/pokemon/828/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png",
    "types": ["dark"]
}, {
    "name": "gossifleur",
    "url": "https://pokeapi.co/api/v2/pokemon/829/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png",
    "types": ["grass"]
}, {
    "name": "eldegoss",
    "url": "https://pokeapi.co/api/v2/pokemon/830/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png",
    "types": ["grass"]
}, {
    "name": "wooloo",
    "url": "https://pokeapi.co/api/v2/pokemon/831/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png",
    "types": ["normal"]
}, {
    "name": "dubwool",
    "url": "https://pokeapi.co/api/v2/pokemon/832/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png",
    "types": ["normal"]
}, {
    "name": "chewtle",
    "url": "https://pokeapi.co/api/v2/pokemon/833/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png",
    "types": ["water"]
}, {
    "name": "drednaw",
    "url": "https://pokeapi.co/api/v2/pokemon/834/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png",
    "types": ["water", "rock"]
}, {
    "name": "yamper",
    "url": "https://pokeapi.co/api/v2/pokemon/835/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png",
    "types": ["electric"]
}, {
    "name": "boltund",
    "url": "https://pokeapi.co/api/v2/pokemon/836/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png",
    "types": ["electric"]
}, {
    "name": "rolycoly",
    "url": "https://pokeapi.co/api/v2/pokemon/837/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png",
    "types": ["rock"]
}, {
    "name": "carkol",
    "url": "https://pokeapi.co/api/v2/pokemon/838/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png",
    "types": ["rock", "fire"]
}, {
    "name": "coalossal",
    "url": "https://pokeapi.co/api/v2/pokemon/839/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png",
    "types": ["rock", "fire"]
}, {
    "name": "applin",
    "url": "https://pokeapi.co/api/v2/pokemon/840/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png",
    "types": ["grass", "dragon"]
}, {
    "name": "flapple",
    "url": "https://pokeapi.co/api/v2/pokemon/841/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png",
    "types": ["grass", "dragon"]
}, {
    "name": "appletun",
    "url": "https://pokeapi.co/api/v2/pokemon/842/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png",
    "types": ["grass", "dragon"]
}, {
    "name": "silicobra",
    "url": "https://pokeapi.co/api/v2/pokemon/843/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png",
    "types": ["ground"]
}, {
    "name": "sandaconda",
    "url": "https://pokeapi.co/api/v2/pokemon/844/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png",
    "types": ["ground"]
}, {
    "name": "cramorant",
    "url": "https://pokeapi.co/api/v2/pokemon/845/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png",
    "types": ["flying", "water"]
}, {
    "name": "arrokuda",
    "url": "https://pokeapi.co/api/v2/pokemon/846/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png",
    "types": ["water"]
}, {
    "name": "barraskewda",
    "url": "https://pokeapi.co/api/v2/pokemon/847/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png",
    "types": ["water"]
}, {
    "name": "toxel",
    "url": "https://pokeapi.co/api/v2/pokemon/848/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png",
    "types": ["electric", "poison"]
}, {
    "name": "toxtricity-amped",
    "url": "https://pokeapi.co/api/v2/pokemon/849/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png",
    "types": ["electric", "poison"]
}, {
    "name": "sizzlipede",
    "url": "https://pokeapi.co/api/v2/pokemon/850/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png",
    "types": ["fire", "bug"]
}, {
    "name": "centiskorch",
    "url": "https://pokeapi.co/api/v2/pokemon/851/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png",
    "types": ["fire", "bug"]
}, {
    "name": "clobbopus",
    "url": "https://pokeapi.co/api/v2/pokemon/852/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png",
    "types": ["fighting"]
}, {
    "name": "grapploct",
    "url": "https://pokeapi.co/api/v2/pokemon/853/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png",
    "types": ["fighting"]
}, {
    "name": "sinistea",
    "url": "https://pokeapi.co/api/v2/pokemon/854/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png",
    "types": ["ghost"]
}, {
    "name": "polteageist",
    "url": "https://pokeapi.co/api/v2/pokemon/855/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png",
    "types": ["ghost"]
}, {
    "name": "hatenna",
    "url": "https://pokeapi.co/api/v2/pokemon/856/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png",
    "types": ["psychic"]
}, {
    "name": "hattrem",
    "url": "https://pokeapi.co/api/v2/pokemon/857/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png",
    "types": ["psychic"]
}, {
    "name": "hatterene",
    "url": "https://pokeapi.co/api/v2/pokemon/858/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png",
    "types": ["psychic", "fairy"]
}, {
    "name": "impidimp",
    "url": "https://pokeapi.co/api/v2/pokemon/859/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png",
    "types": ["dark", "fairy"]
}, {
    "name": "morgrem",
    "url": "https://pokeapi.co/api/v2/pokemon/860/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png",
    "types": ["dark", "fairy"]
}, {
    "name": "grimmsnarl",
    "url": "https://pokeapi.co/api/v2/pokemon/861/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png",
    "types": ["dark", "fairy"]
}, {
    "name": "obstagoon",
    "url": "https://pokeapi.co/api/v2/pokemon/862/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png",
    "types": ["dark", "normal"]
}, {
    "name": "perrserker",
    "url": "https://pokeapi.co/api/v2/pokemon/863/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png",
    "types": ["steel"]
}, {
    "name": "cursola",
    "url": "https://pokeapi.co/api/v2/pokemon/864/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png",
    "types": ["ghost"]
}, {
    "name": "sirfetchd",
    "url": "https://pokeapi.co/api/v2/pokemon/865/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png",
    "types": ["fighting"]
}, {
    "name": "mr-rime",
    "url": "https://pokeapi.co/api/v2/pokemon/866/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png",
    "types": ["ice", "psychic"]
}, {
    "name": "runerigus",
    "url": "https://pokeapi.co/api/v2/pokemon/867/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png",
    "types": ["ground", "ghost"]
}, {
    "name": "milcery",
    "url": "https://pokeapi.co/api/v2/pokemon/868/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png",
    "types": ["fairy"]
}, {
    "name": "alcremie",
    "url": "https://pokeapi.co/api/v2/pokemon/869/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png",
    "types": ["fairy"]
}, {
    "name": "falinks",
    "url": "https://pokeapi.co/api/v2/pokemon/870/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png",
    "types": ["fighting"]
}, {
    "name": "pincurchin",
    "url": "https://pokeapi.co/api/v2/pokemon/871/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png",
    "types": ["electric"]
}, {
    "name": "snom",
    "url": "https://pokeapi.co/api/v2/pokemon/872/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png",
    "types": ["ice", "bug"]
}, {
    "name": "frosmoth",
    "url": "https://pokeapi.co/api/v2/pokemon/873/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png",
    "types": ["ice", "bug"]
}, {
    "name": "stonjourner",
    "url": "https://pokeapi.co/api/v2/pokemon/874/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png",
    "types": ["rock"]
}, {
    "name": "eiscue-ice",
    "url": "https://pokeapi.co/api/v2/pokemon/875/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png",
    "types": ["ice"]
}, {
    "name": "indeedee-male",
    "url": "https://pokeapi.co/api/v2/pokemon/876/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png",
    "types": ["psychic", "normal"]
}, {
    "name": "morpeko-full-belly",
    "url": "https://pokeapi.co/api/v2/pokemon/877/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png",
    "types": ["electric", "dark"]
}, {
    "name": "cufant",
    "url": "https://pokeapi.co/api/v2/pokemon/878/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png",
    "types": ["steel"]
}, {
    "name": "copperajah",
    "url": "https://pokeapi.co/api/v2/pokemon/879/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png",
    "types": ["steel"]
}, {
    "name": "dracozolt",
    "url": "https://pokeapi.co/api/v2/pokemon/880/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png",
    "types": ["electric", "dragon"]
}, {
    "name": "arctozolt",
    "url": "https://pokeapi.co/api/v2/pokemon/881/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png",
    "types": ["electric", "ice"]
}, {
    "name": "dracovish",
    "url": "https://pokeapi.co/api/v2/pokemon/882/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png",
    "types": ["water", "dragon"]
}, {
    "name": "arctovish",
    "url": "https://pokeapi.co/api/v2/pokemon/883/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png",
    "types": ["water", "ice"]
}, {
    "name": "duraludon",
    "url": "https://pokeapi.co/api/v2/pokemon/884/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png",
    "types": ["steel", "dragon"]
}, {
    "name": "dreepy",
    "url": "https://pokeapi.co/api/v2/pokemon/885/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png",
    "types": ["dragon", "ghost"]
}, {
    "name": "drakloak",
    "url": "https://pokeapi.co/api/v2/pokemon/886/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png",
    "types": ["dragon", "ghost"]
}, {
    "name": "dragapult",
    "url": "https://pokeapi.co/api/v2/pokemon/887/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png",
    "types": ["dragon", "ghost"]
}, {
    "name": "zacian",
    "url": "https://pokeapi.co/api/v2/pokemon/888/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png",
    "types": ["fairy"]
}, {
    "name": "zamazenta",
    "url": "https://pokeapi.co/api/v2/pokemon/889/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png",
    "types": ["fighting"]
}, {
    "name": "eternatus",
    "url": "https://pokeapi.co/api/v2/pokemon/890/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png",
    "types": ["poison", "dragon"]
}, {
    "name": "kubfu",
    "url": "https://pokeapi.co/api/v2/pokemon/891/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png",
    "types": ["fighting"]
}, {
    "name": "urshifu-single-strike",
    "url": "https://pokeapi.co/api/v2/pokemon/892/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png",
    "types": ["fighting", "dark"]
}, {
    "name": "zarude",
    "url": "https://pokeapi.co/api/v2/pokemon/893/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png",
    "types": ["dark", "grass"]
}, {
    "name": "regieleki",
    "url": "https://pokeapi.co/api/v2/pokemon/894/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png",
    "types": ["electric"]
}, {
    "name": "regidrago",
    "url": "https://pokeapi.co/api/v2/pokemon/895/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png",
    "types": ["dragon"]
}, {
    "name": "glastrier",
    "url": "https://pokeapi.co/api/v2/pokemon/896/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png",
    "types": ["ice"]
}, {
    "name": "spectrier",
    "url": "https://pokeapi.co/api/v2/pokemon/897/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png",
    "types": ["ghost"]
}, {
    "name": "calyrex",
    "url": "https://pokeapi.co/api/v2/pokemon/898/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png",
    "types": ["psychic", "grass"]
}, {
    "name": "wyrdeer",
    "url": "https://pokeapi.co/api/v2/pokemon/899/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png",
    "types": ["normal", "psychic"]
}, {
    "name": "kleavor",
    "url": "https://pokeapi.co/api/v2/pokemon/900/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png",
    "types": ["bug", "rock"]
}, {
    "name": "ursaluna",
    "url": "https://pokeapi.co/api/v2/pokemon/901/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png",
    "types": ["ground", "normal"]
}, {
    "name": "basculegion-male",
    "url": "https://pokeapi.co/api/v2/pokemon/902/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png",
    "types": ["water", "ghost"]
}, {
    "name": "sneasler",
    "url": "https://pokeapi.co/api/v2/pokemon/903/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png",
    "types": ["fighting", "poison"]
}, {
    "name": "overqwil",
    "url": "https://pokeapi.co/api/v2/pokemon/904/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png",
    "types": ["dark", "poison"]
}, {
    "name": "enamorus-incarnate",
    "url": "https://pokeapi.co/api/v2/pokemon/905/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png",
    "types": ["fairy", "flying"]
}, {
    "name": "deoxys-attack",
    "url": "https://pokeapi.co/api/v2/pokemon/10001/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10001.png",
    "types": ["psychic"]
}, {
    "name": "deoxys-defense",
    "url": "https://pokeapi.co/api/v2/pokemon/10002/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10002.png",
    "types": ["psychic"]
}, {
    "name": "deoxys-speed",
    "url": "https://pokeapi.co/api/v2/pokemon/10003/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10003.png",
    "types": ["psychic"]
}, {
    "name": "wormadam-sandy",
    "url": "https://pokeapi.co/api/v2/pokemon/10004/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10004.png",
    "types": ["bug", "ground"]
}, {
    "name": "wormadam-trash",
    "url": "https://pokeapi.co/api/v2/pokemon/10005/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10005.png",
    "types": ["bug", "steel"]
}, {
    "name": "shaymin-sky",
    "url": "https://pokeapi.co/api/v2/pokemon/10006/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10006.png",
    "types": ["grass", "flying"]
}, {
    "name": "giratina-origin",
    "url": "https://pokeapi.co/api/v2/pokemon/10007/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10007.png",
    "types": ["ghost", "dragon"]
}, {
    "name": "rotom-heat",
    "url": "https://pokeapi.co/api/v2/pokemon/10008/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10008.png",
    "types": ["electric", "fire"]
}, {
    "name": "rotom-wash",
    "url": "https://pokeapi.co/api/v2/pokemon/10009/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10009.png",
    "types": ["electric", "water"]
}, {
    "name": "rotom-frost",
    "url": "https://pokeapi.co/api/v2/pokemon/10010/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10010.png",
    "types": ["electric", "ice"]
}, {
    "name": "rotom-fan",
    "url": "https://pokeapi.co/api/v2/pokemon/10011/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10011.png",
    "types": ["electric", "flying"]
}, {
    "name": "rotom-mow",
    "url": "https://pokeapi.co/api/v2/pokemon/10012/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10012.png",
    "types": ["electric", "grass"]
}, {
    "name": "castform-sunny",
    "url": "https://pokeapi.co/api/v2/pokemon/10013/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10013.png",
    "types": ["fire"]
}, {
    "name": "castform-rainy",
    "url": "https://pokeapi.co/api/v2/pokemon/10014/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10014.png",
    "types": ["water"]
}, {
    "name": "castform-snowy",
    "url": "https://pokeapi.co/api/v2/pokemon/10015/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10015.png",
    "types": ["ice"]
}, {
    "name": "basculin-blue-striped",
    "url": "https://pokeapi.co/api/v2/pokemon/10016/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10016.png",
    "types": ["water"]
}, {
    "name": "darmanitan-zen",
    "url": "https://pokeapi.co/api/v2/pokemon/10017/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10017.png",
    "types": ["fire", "psychic"]
}, {
    "name": "meloetta-pirouette",
    "url": "https://pokeapi.co/api/v2/pokemon/10018/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10018.png",
    "types": ["normal", "fighting"]
}, {
    "name": "tornadus-therian",
    "url": "https://pokeapi.co/api/v2/pokemon/10019/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10019.png",
    "types": ["flying"]
}, {
    "name": "thundurus-therian",
    "url": "https://pokeapi.co/api/v2/pokemon/10020/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10020.png",
    "types": ["electric", "flying"]
}, {
    "name": "landorus-therian",
    "url": "https://pokeapi.co/api/v2/pokemon/10021/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10021.png",
    "types": ["ground", "flying"]
}, {
    "name": "kyurem-black",
    "url": "https://pokeapi.co/api/v2/pokemon/10022/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10022.png",
    "types": ["dragon", "ice"]
}, {
    "name": "kyurem-white",
    "url": "https://pokeapi.co/api/v2/pokemon/10023/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10023.png",
    "types": ["dragon", "ice"]
}, {
    "name": "keldeo-resolute",
    "url": "https://pokeapi.co/api/v2/pokemon/10024/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10024.png",
    "types": ["water", "fighting"]
}, {
    "name": "meowstic-female",
    "url": "https://pokeapi.co/api/v2/pokemon/10025/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10025.png",
    "types": ["psychic"]
}, {
    "name": "aegislash-blade",
    "url": "https://pokeapi.co/api/v2/pokemon/10026/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10026.png",
    "types": ["steel", "ghost"]
}, {
    "name": "pumpkaboo-small",
    "url": "https://pokeapi.co/api/v2/pokemon/10027/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10027.png",
    "types": ["ghost", "grass"]
}, {
    "name": "pumpkaboo-large",
    "url": "https://pokeapi.co/api/v2/pokemon/10028/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10028.png",
    "types": ["ghost", "grass"]
}, {
    "name": "pumpkaboo-super",
    "url": "https://pokeapi.co/api/v2/pokemon/10029/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10029.png",
    "types": ["ghost", "grass"]
}, {
    "name": "gourgeist-small",
    "url": "https://pokeapi.co/api/v2/pokemon/10030/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10030.png",
    "types": ["ghost", "grass"]
}, {
    "name": "gourgeist-large",
    "url": "https://pokeapi.co/api/v2/pokemon/10031/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10031.png",
    "types": ["ghost", "grass"]
}, {
    "name": "gourgeist-super",
    "url": "https://pokeapi.co/api/v2/pokemon/10032/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10032.png",
    "types": ["ghost", "grass"]
}, {
    "name": "venusaur-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10033/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png",
    "types": ["grass", "poison"]
}, {
    "name": "charizard-mega-x",
    "url": "https://pokeapi.co/api/v2/pokemon/10034/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png",
    "types": ["fire", "dragon"]
}, {
    "name": "charizard-mega-y",
    "url": "https://pokeapi.co/api/v2/pokemon/10035/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png",
    "types": ["fire", "flying"]
}, {
    "name": "blastoise-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10036/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png",
    "types": ["water"]
}, {
    "name": "alakazam-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10037/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10037.png",
    "types": ["psychic"]
}, {
    "name": "gengar-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10038/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10038.png",
    "types": ["ghost", "poison"]
}, {
    "name": "kangaskhan-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10039/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10039.png",
    "types": ["normal"]
}, {
    "name": "pinsir-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10040/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10040.png",
    "types": ["bug", "flying"]
}, {
    "name": "gyarados-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10041/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10041.png",
    "types": ["water", "dark"]
}, {
    "name": "aerodactyl-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10042/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10042.png",
    "types": ["rock", "flying"]
}, {
    "name": "mewtwo-mega-x",
    "url": "https://pokeapi.co/api/v2/pokemon/10043/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10043.png",
    "types": ["psychic", "fighting"]
}, {
    "name": "mewtwo-mega-y",
    "url": "https://pokeapi.co/api/v2/pokemon/10044/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10044.png",
    "types": ["psychic"]
}, {
    "name": "ampharos-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10045/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10045.png",
    "types": ["electric", "dragon"]
}, {
    "name": "scizor-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10046/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10046.png",
    "types": ["bug", "steel"]
}, {
    "name": "heracross-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10047/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10047.png",
    "types": ["bug", "fighting"]
}, {
    "name": "houndoom-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10048/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10048.png",
    "types": ["dark", "fire"]
}, {
    "name": "tyranitar-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10049/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10049.png",
    "types": ["rock", "dark"]
}, {
    "name": "blaziken-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10050/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10050.png",
    "types": ["fire", "fighting"]
}, {
    "name": "gardevoir-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10051/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10051.png",
    "types": ["psychic", "fairy"]
}, {
    "name": "mawile-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10052/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10052.png",
    "types": ["steel", "fairy"]
}, {
    "name": "aggron-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10053/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10053.png",
    "types": ["steel"]
}, {
    "name": "medicham-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10054/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10054.png",
    "types": ["fighting", "psychic"]
}, {
    "name": "manectric-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10055/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10055.png",
    "types": ["electric"]
}, {
    "name": "banette-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10056/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10056.png",
    "types": ["ghost"]
}, {
    "name": "absol-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10057/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10057.png",
    "types": ["dark"]
}, {
    "name": "garchomp-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10058/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10058.png",
    "types": ["dragon", "ground"]
}, {
    "name": "lucario-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10059/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10059.png",
    "types": ["fighting", "steel"]
}, {
    "name": "abomasnow-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10060/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10060.png",
    "types": ["grass", "ice"]
}, {
    "name": "floette-eternal",
    "url": "https://pokeapi.co/api/v2/pokemon/10061/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10061.png",
    "types": ["fairy"]
}, {
    "name": "latias-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10062/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10062.png",
    "types": ["dragon", "psychic"]
}, {
    "name": "latios-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10063/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10063.png",
    "types": ["dragon", "psychic"]
}, {
    "name": "swampert-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10064/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10064.png",
    "types": ["water", "ground"]
}, {
    "name": "sceptile-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10065/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10065.png",
    "types": ["grass", "dragon"]
}, {
    "name": "sableye-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10066/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10066.png",
    "types": ["dark", "ghost"]
}, {
    "name": "altaria-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10067/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10067.png",
    "types": ["dragon", "fairy"]
}, {
    "name": "gallade-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10068/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10068.png",
    "types": ["psychic", "fighting"]
}, {
    "name": "audino-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10069/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10069.png",
    "types": ["normal", "fairy"]
}, {
    "name": "sharpedo-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10070/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10070.png",
    "types": ["water", "dark"]
}, {
    "name": "slowbro-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10071/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10071.png",
    "types": ["water", "psychic"]
}, {
    "name": "steelix-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10072/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10072.png",
    "types": ["steel", "ground"]
}, {
    "name": "pidgeot-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10073/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10073.png",
    "types": ["normal", "flying"]
}, {
    "name": "glalie-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10074/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10074.png",
    "types": ["ice"]
}, {
    "name": "diancie-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10075/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png",
    "types": ["rock", "fairy"]
}, {
    "name": "metagross-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10076/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10076.png",
    "types": ["steel", "psychic"]
}, {
    "name": "kyogre-primal",
    "url": "https://pokeapi.co/api/v2/pokemon/10077/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10077.png",
    "types": ["water"]
}, {
    "name": "groudon-primal",
    "url": "https://pokeapi.co/api/v2/pokemon/10078/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10078.png",
    "types": ["ground", "fire"]
}, {
    "name": "rayquaza-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10079/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10079.png",
    "types": ["dragon", "flying"]
}, {
    "name": "pikachu-rock-star",
    "url": "https://pokeapi.co/api/v2/pokemon/10080/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png",
    "types": ["electric"]
}, {
    "name": "pikachu-belle",
    "url": "https://pokeapi.co/api/v2/pokemon/10081/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10081.png",
    "types": ["electric"]
}, {
    "name": "pikachu-pop-star",
    "url": "https://pokeapi.co/api/v2/pokemon/10082/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10082.png",
    "types": ["electric"]
}, {
    "name": "pikachu-phd",
    "url": "https://pokeapi.co/api/v2/pokemon/10083/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10083.png",
    "types": ["electric"]
}, {
    "name": "pikachu-libre",
    "url": "https://pokeapi.co/api/v2/pokemon/10084/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png",
    "types": ["electric"]
}, {
    "name": "pikachu-cosplay",
    "url": "https://pokeapi.co/api/v2/pokemon/10085/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10085.png",
    "types": ["electric"]
}, {
    "name": "hoopa-unbound",
    "url": "https://pokeapi.co/api/v2/pokemon/10086/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10086.png",
    "types": ["psychic", "dark"]
}, {
    "name": "camerupt-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10087/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10087.png",
    "types": ["fire", "ground"]
}, {
    "name": "lopunny-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10088/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10088.png",
    "types": ["normal", "fighting"]
}, {
    "name": "salamence-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10089/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10089.png",
    "types": ["dragon", "flying"]
}, {
    "name": "beedrill-mega",
    "url": "https://pokeapi.co/api/v2/pokemon/10090/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10090.png",
    "types": ["bug", "poison"]
}, {
    "name": "rattata-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10091/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10091.png",
    "types": ["dark", "normal"]
}, {
    "name": "raticate-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10092/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10092.png",
    "types": ["dark", "normal"]
}, {
    "name": "raticate-totem-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10093/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10093.png",
    "types": ["dark", "normal"]
}, {
    "name": "pikachu-original-cap",
    "url": "https://pokeapi.co/api/v2/pokemon/10094/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10094.png",
    "types": ["electric"]
}, {
    "name": "pikachu-hoenn-cap",
    "url": "https://pokeapi.co/api/v2/pokemon/10095/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10095.png",
    "types": ["electric"]
}, {
    "name": "pikachu-sinnoh-cap",
    "url": "https://pokeapi.co/api/v2/pokemon/10096/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10096.png",
    "types": ["electric"]
}, {
    "name": "pikachu-unova-cap",
    "url": "https://pokeapi.co/api/v2/pokemon/10097/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10097.png",
    "types": ["electric"]
}, {
    "name": "pikachu-kalos-cap",
    "url": "https://pokeapi.co/api/v2/pokemon/10098/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10098.png",
    "types": ["electric"]
}, {
    "name": "pikachu-alola-cap",
    "url": "https://pokeapi.co/api/v2/pokemon/10099/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10099.png",
    "types": ["electric"]
}, {
    "name": "raichu-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10100/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10100.png",
    "types": ["electric", "psychic"]
}, {
    "name": "sandshrew-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10101/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10101.png",
    "types": ["ice", "steel"]
}, {
    "name": "sandslash-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10102/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10102.png",
    "types": ["ice", "steel"]
}, {
    "name": "vulpix-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10103/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10103.png",
    "types": ["ice"]
}, {
    "name": "ninetales-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10104/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10104.png",
    "types": ["ice", "fairy"]
}, {
    "name": "diglett-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10105/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10105.png",
    "types": ["ground", "steel"]
}, {
    "name": "dugtrio-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10106/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10106.png",
    "types": ["ground", "steel"]
}, {
    "name": "meowth-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10107/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10107.png",
    "types": ["dark"]
}, {
    "name": "persian-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10108/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10108.png",
    "types": ["dark"]
}, {
    "name": "geodude-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10109/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10109.png",
    "types": ["rock", "electric"]
}, {
    "name": "graveler-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10110/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10110.png",
    "types": ["rock", "electric"]
}, {
    "name": "golem-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10111/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10111.png",
    "types": ["rock", "electric"]
}, {
    "name": "grimer-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10112/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10112.png",
    "types": ["poison", "dark"]
}, {
    "name": "muk-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10113/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10113.png",
    "types": ["poison", "dark"]
}, {
    "name": "exeggutor-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10114/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10114.png",
    "types": ["grass", "dragon"]
}, {
    "name": "marowak-alola",
    "url": "https://pokeapi.co/api/v2/pokemon/10115/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10115.png",
    "types": ["fire", "ghost"]
}, {
    "name": "greninja-battle-bond",
    "url": "https://pokeapi.co/api/v2/pokemon/10116/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10116.png",
    "types": ["water", "dark"]
}, {
    "name": "greninja-ash",
    "url": "https://pokeapi.co/api/v2/pokemon/10117/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10117.png",
    "types": ["water", "dark"]
}, {
    "name": "zygarde-10-power-construct",
    "url": "https://pokeapi.co/api/v2/pokemon/10118/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10118.png",
    "types": ["dragon", "ground"]
}, {
    "name": "zygarde-50-power-construct",
    "url": "https://pokeapi.co/api/v2/pokemon/10119/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10119.png",
    "types": ["dragon", "ground"]
}, {
    "name": "zygarde-complete",
    "url": "https://pokeapi.co/api/v2/pokemon/10120/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10120.png",
    "types": ["dragon", "ground"]
}, {
    "name": "gumshoos-totem",
    "url": "https://pokeapi.co/api/v2/pokemon/10121/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10121.png",
    "types": ["normal"]
}, {
    "name": "vikavolt-totem",
    "url": "https://pokeapi.co/api/v2/pokemon/10122/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10122.png",
    "types": ["bug", "electric"]
}, {
    "name": "oricorio-pom-pom",
    "url": "https://pokeapi.co/api/v2/pokemon/10123/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10123.png",
    "types": ["electric", "flying"]
}, {
    "name": "oricorio-pau",
    "url": "https://pokeapi.co/api/v2/pokemon/10124/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10124.png",
    "types": ["psychic", "flying"]
}, {
    "name": "oricorio-sensu",
    "url": "https://pokeapi.co/api/v2/pokemon/10125/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10125.png",
    "types": ["ghost", "flying"]
}, {
    "name": "lycanroc-midnight",
    "url": "https://pokeapi.co/api/v2/pokemon/10126/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10126.png",
    "types": ["rock"]
}, {
    "name": "wishiwashi-school",
    "url": "https://pokeapi.co/api/v2/pokemon/10127/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10127.png",
    "types": ["water"]
}, {
    "name": "lurantis-totem",
    "url": "https://pokeapi.co/api/v2/pokemon/10128/",
    "sprite": null,
    "types": ["grass"]
}, {
    "name": "salazzle-totem",
    "url": "https://pokeapi.co/api/v2/pokemon/10129/",
    "sprite": null,
    "types": ["poison", "fire"]
}, {
    "name": "minior-orange-meteor",
    "url": "https://pokeapi.co/api/v2/pokemon/10130/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10130.png",
    "types": ["rock", "flying"]
}, {
    "name": "minior-yellow-meteor",
    "url": "https://pokeapi.co/api/v2/pokemon/10131/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10131.png",
    "types": ["rock", "flying"]
}, {
    "name": "minior-green-meteor",
    "url": "https://pokeapi.co/api/v2/pokemon/10132/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10132.png",
    "types": ["rock", "flying"]
}, {
    "name": "minior-blue-meteor",
    "url": "https://pokeapi.co/api/v2/pokemon/10133/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10133.png",
    "types": ["rock", "flying"]
}, {
    "name": "minior-indigo-meteor",
    "url": "https://pokeapi.co/api/v2/pokemon/10134/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10134.png",
    "types": ["rock", "flying"]
}, {
    "name": "minior-violet-meteor",
    "url": "https://pokeapi.co/api/v2/pokemon/10135/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10135.png",
    "types": ["rock", "flying"]
}, {
    "name": "minior-red",
    "url": "https://pokeapi.co/api/v2/pokemon/10136/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10136.png",
    "types": ["rock", "flying"]
}, {
    "name": "minior-orange",
    "url": "https://pokeapi.co/api/v2/pokemon/10137/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10137.png",
    "types": ["rock", "flying"]
}, {
    "name": "minior-yellow",
    "url": "https://pokeapi.co/api/v2/pokemon/10138/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10138.png",
    "types": ["rock", "flying"]
}, {
    "name": "minior-green",
    "url": "https://pokeapi.co/api/v2/pokemon/10139/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10139.png",
    "types": ["rock", "flying"]
}, {
    "name": "minior-blue",
    "url": "https://pokeapi.co/api/v2/pokemon/10140/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10140.png",
    "types": ["rock", "flying"]
}, {
    "name": "minior-indigo",
    "url": "https://pokeapi.co/api/v2/pokemon/10141/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10141.png",
    "types": ["rock", "flying"]
}, {
    "name": "minior-violet",
    "url": "https://pokeapi.co/api/v2/pokemon/10142/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10142.png",
    "types": ["rock", "flying"]
}, {
    "name": "mimikyu-busted",
    "url": "https://pokeapi.co/api/v2/pokemon/10143/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10143.png",
    "types": ["ghost", "fairy"]
}, {
    "name": "mimikyu-totem-disguised",
    "url": "https://pokeapi.co/api/v2/pokemon/10144/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10144.png",
    "types": ["ghost", "fairy"]
}, {
    "name": "mimikyu-totem-busted",
    "url": "https://pokeapi.co/api/v2/pokemon/10145/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10145.png",
    "types": ["ghost", "fairy"]
}, {
    "name": "kommo-o-totem",
    "url": "https://pokeapi.co/api/v2/pokemon/10146/",
    "sprite": null,
    "types": ["dragon", "fighting"]
}, {
    "name": "magearna-original",
    "url": "https://pokeapi.co/api/v2/pokemon/10147/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10147.png",
    "types": ["steel", "fairy"]
}, {
    "name": "pikachu-partner-cap",
    "url": "https://pokeapi.co/api/v2/pokemon/10148/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10148.png",
    "types": ["electric"]
}, {
    "name": "marowak-totem",
    "url": "https://pokeapi.co/api/v2/pokemon/10149/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10149.png",
    "types": ["fire", "ghost"]
}, {
    "name": "ribombee-totem",
    "url": "https://pokeapi.co/api/v2/pokemon/10150/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10150.png",
    "types": ["bug", "fairy"]
}, {
    "name": "rockruff-own-tempo",
    "url": "https://pokeapi.co/api/v2/pokemon/10151/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10151.png",
    "types": ["rock"]
}, {
    "name": "lycanroc-dusk",
    "url": "https://pokeapi.co/api/v2/pokemon/10152/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10152.png",
    "types": ["rock"]
}, {
    "name": "araquanid-totem",
    "url": "https://pokeapi.co/api/v2/pokemon/10153/",
    "sprite": null,
    "types": ["water", "bug"]
}, {
    "name": "togedemaru-totem",
    "url": "https://pokeapi.co/api/v2/pokemon/10154/",
    "sprite": null,
    "types": ["electric", "steel"]
}, {
    "name": "necrozma-dusk",
    "url": "https://pokeapi.co/api/v2/pokemon/10155/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10155.png",
    "types": ["psychic", "steel"]
}, {
    "name": "necrozma-dawn",
    "url": "https://pokeapi.co/api/v2/pokemon/10156/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10156.png",
    "types": ["psychic", "ghost"]
}, {
    "name": "necrozma-ultra",
    "url": "https://pokeapi.co/api/v2/pokemon/10157/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10157.png",
    "types": ["psychic", "dragon"]
}, {
    "name": "pikachu-starter",
    "url": "https://pokeapi.co/api/v2/pokemon/10158/",
    "sprite": null,
    "types": ["electric"]
}, {
    "name": "eevee-starter",
    "url": "https://pokeapi.co/api/v2/pokemon/10159/",
    "sprite": null,
    "types": ["normal"]
}, {
    "name": "pikachu-world-cap",
    "url": "https://pokeapi.co/api/v2/pokemon/10160/",
    "sprite": null,
    "types": ["electric"]
}, {
    "name": "meowth-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10161/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10161.png",
    "types": ["steel"]
}, {
    "name": "ponyta-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10162/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10162.png",
    "types": ["psychic"]
}, {
    "name": "rapidash-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10163/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10163.png",
    "types": ["psychic", "fairy"]
}, {
    "name": "slowpoke-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10164/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10164.png",
    "types": ["psychic"]
}, {
    "name": "slowbro-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10165/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10165.png",
    "types": ["poison", "psychic"]
}, {
    "name": "farfetchd-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10166/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10166.png",
    "types": ["fighting"]
}, {
    "name": "weezing-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10167/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10167.png",
    "types": ["poison", "fairy"]
}, {
    "name": "mr-mime-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10168/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10168.png",
    "types": ["ice", "psychic"]
}, {
    "name": "articuno-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10169/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10169.png",
    "types": ["psychic", "flying"]
}, {
    "name": "zapdos-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10170/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10170.png",
    "types": ["fighting", "flying"]
}, {
    "name": "moltres-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10171/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10171.png",
    "types": ["dark", "flying"]
}, {
    "name": "slowking-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10172/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10172.png",
    "types": ["poison", "psychic"]
}, {
    "name": "corsola-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10173/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10173.png",
    "types": ["ghost"]
}, {
    "name": "zigzagoon-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10174/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10174.png",
    "types": ["dark", "normal"]
}, {
    "name": "linoone-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10175/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10175.png",
    "types": ["dark", "normal"]
}, {
    "name": "darumaka-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10176/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10176.png",
    "types": ["ice"]
}, {
    "name": "darmanitan-galar-standard",
    "url": "https://pokeapi.co/api/v2/pokemon/10177/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10177.png",
    "types": ["ice"]
}, {
    "name": "darmanitan-galar-zen",
    "url": "https://pokeapi.co/api/v2/pokemon/10178/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10178.png",
    "types": ["ice", "fire"]
}, {
    "name": "yamask-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10179/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10179.png",
    "types": ["ground", "ghost"]
}, {
    "name": "stunfisk-galar",
    "url": "https://pokeapi.co/api/v2/pokemon/10180/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10180.png",
    "types": ["ground", "steel"]
}, {
    "name": "zygarde-10",
    "url": "https://pokeapi.co/api/v2/pokemon/10181/",
    "sprite": null,
    "types": ["dragon", "ground"]
}, {
    "name": "cramorant-gulping",
    "url": "https://pokeapi.co/api/v2/pokemon/10182/",
    "sprite": null,
    "types": ["flying", "water"]
}, {
    "name": "cramorant-gorging",
    "url": "https://pokeapi.co/api/v2/pokemon/10183/",
    "sprite": null,
    "types": ["flying", "water"]
}, {
    "name": "toxtricity-low-key",
    "url": "https://pokeapi.co/api/v2/pokemon/10184/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10184.png",
    "types": ["electric", "poison"]
}, {
    "name": "eiscue-noice",
    "url": "https://pokeapi.co/api/v2/pokemon/10185/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10185.png",
    "types": ["ice"]
}, {
    "name": "indeedee-female",
    "url": "https://pokeapi.co/api/v2/pokemon/10186/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10186.png",
    "types": ["psychic", "normal"]
}, {
    "name": "morpeko-hangry",
    "url": "https://pokeapi.co/api/v2/pokemon/10187/",
    "sprite": null,
    "types": ["electric", "dark"]
}, {
    "name": "zacian-crowned",
    "url": "https://pokeapi.co/api/v2/pokemon/10188/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10188.png",
    "types": ["fairy", "steel"]
}, {
    "name": "zamazenta-crowned",
    "url": "https://pokeapi.co/api/v2/pokemon/10189/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10189.png",
    "types": ["fighting", "steel"]
}, {
    "name": "eternatus-eternamax",
    "url": "https://pokeapi.co/api/v2/pokemon/10190/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10190.png",
    "types": ["poison", "dragon"]
}, {
    "name": "urshifu-rapid-strike",
    "url": "https://pokeapi.co/api/v2/pokemon/10191/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10191.png",
    "types": ["fighting", "water"]
}, {
    "name": "zarude-dada",
    "url": "https://pokeapi.co/api/v2/pokemon/10192/",
    "sprite": null,
    "types": ["dark", "grass"]
}, {
    "name": "calyrex-ice",
    "url": "https://pokeapi.co/api/v2/pokemon/10193/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10193.png",
    "types": ["psychic", "ice"]
}, {
    "name": "calyrex-shadow",
    "url": "https://pokeapi.co/api/v2/pokemon/10194/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10194.png",
    "types": ["psychic", "ghost"]
}, {
    "name": "venusaur-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10195/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10195.png",
    "types": ["grass", "poison"]
}, {
    "name": "charizard-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10196/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10196.png",
    "types": ["fire", "flying"]
}, {
    "name": "blastoise-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10197/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10197.png",
    "types": ["water"]
}, {
    "name": "butterfree-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10198/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10198.png",
    "types": ["bug", "flying"]
}, {
    "name": "pikachu-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10199/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10199.png",
    "types": ["electric"]
}, {
    "name": "meowth-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10200/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10200.png",
    "types": ["normal"]
}, {
    "name": "machamp-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10201/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10201.png",
    "types": ["fighting"]
}, {
    "name": "gengar-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10202/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10202.png",
    "types": ["ghost", "poison"]
}, {
    "name": "kingler-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10203/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10203.png",
    "types": ["water"]
}, {
    "name": "lapras-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10204/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10204.png",
    "types": ["water", "ice"]
}, {
    "name": "eevee-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10205/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10205.png",
    "types": ["normal"]
}, {
    "name": "snorlax-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10206/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10206.png",
    "types": ["normal"]
}, {
    "name": "garbodor-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10207/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10207.png",
    "types": ["poison"]
}, {
    "name": "melmetal-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10208/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10208.png",
    "types": ["steel"]
}, {
    "name": "rillaboom-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10209/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10209.png",
    "types": ["grass"]
}, {
    "name": "cinderace-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10210/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10210.png",
    "types": ["fire"]
}, {
    "name": "inteleon-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10211/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10211.png",
    "types": ["water"]
}, {
    "name": "corviknight-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10212/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10212.png",
    "types": ["flying", "steel"]
}, {
    "name": "orbeetle-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10213/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10213.png",
    "types": ["bug", "psychic"]
}, {
    "name": "drednaw-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10214/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10214.png",
    "types": ["water", "rock"]
}, {
    "name": "coalossal-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10215/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10215.png",
    "types": ["rock", "fire"]
}, {
    "name": "flapple-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10216/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10216.png",
    "types": ["grass", "dragon"]
}, {
    "name": "appletun-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10217/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10217.png",
    "types": ["grass", "dragon"]
}, {
    "name": "sandaconda-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10218/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10218.png",
    "types": ["ground"]
}, {
    "name": "toxtricity-amped-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10219/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10219.png",
    "types": ["electric", "poison"]
}, {
    "name": "centiskorch-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10220/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10220.png",
    "types": ["fire", "bug"]
}, {
    "name": "hatterene-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10221/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10221.png",
    "types": ["psychic", "fairy"]
}, {
    "name": "grimmsnarl-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10222/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10222.png",
    "types": ["dark", "fairy"]
}, {
    "name": "alcremie-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10223/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10223.png",
    "types": ["fairy"]
}, {
    "name": "copperajah-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10224/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10224.png",
    "types": ["steel"]
}, {
    "name": "duraludon-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10225/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10225.png",
    "types": ["steel", "dragon"]
}, {
    "name": "urshifu-single-strike-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10226/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10226.png",
    "types": ["fighting", "dark"]
}, {
    "name": "urshifu-rapid-strike-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10227/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10227.png",
    "types": ["fighting", "water"]
}, {
    "name": "toxtricity-low-key-gmax",
    "url": "https://pokeapi.co/api/v2/pokemon/10228/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10228.png",
    "types": ["electric", "poison"]
}, {
    "name": "growlithe-hisui",
    "url": "https://pokeapi.co/api/v2/pokemon/10229/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10229.png",
    "types": ["fire", "rock"]
}, {
    "name": "arcanine-hisui",
    "url": "https://pokeapi.co/api/v2/pokemon/10230/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10230.png",
    "types": ["fire", "rock"]
}, {
    "name": "voltorb-hisui",
    "url": "https://pokeapi.co/api/v2/pokemon/10231/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10231.png",
    "types": ["electric", "grass"]
}, {
    "name": "electrode-hisui",
    "url": "https://pokeapi.co/api/v2/pokemon/10232/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10232.png",
    "types": ["electric", "grass"]
}, {
    "name": "typhlosion-hisui",
    "url": "https://pokeapi.co/api/v2/pokemon/10233/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10233.png",
    "types": ["fire", "ghost"]
}, {
    "name": "qwilfish-hisui",
    "url": "https://pokeapi.co/api/v2/pokemon/10234/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10234.png",
    "types": ["dark", "poison"]
}, {
    "name": "sneasel-hisui",
    "url": "https://pokeapi.co/api/v2/pokemon/10235/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10235.png",
    "types": ["fighting", "poison"]
}, {
    "name": "samurott-hisui",
    "url": "https://pokeapi.co/api/v2/pokemon/10236/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10236.png",
    "types": ["water", "dark"]
}, {
    "name": "lilligant-hisui",
    "url": "https://pokeapi.co/api/v2/pokemon/10237/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10237.png",
    "types": ["grass", "fighting"]
}, {
    "name": "zorua-hisui",
    "url": "https://pokeapi.co/api/v2/pokemon/10238/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10238.png",
    "types": ["normal", "ghost"]
}, {
    "name": "zoroark-hisui",
    "url": "https://pokeapi.co/api/v2/pokemon/10239/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10239.png",
    "types": ["normal", "ghost"]
}, {
    "name": "braviary-hisui",
    "url": "https://pokeapi.co/api/v2/pokemon/10240/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10240.png",
    "types": ["psychic", "flying"]
}, {
    "name": "sliggoo-hisui",
    "url": "https://pokeapi.co/api/v2/pokemon/10241/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10241.png",
    "types": ["steel", "dragon"]
}, {
    "name": "goodra-hisui",
    "url": "https://pokeapi.co/api/v2/pokemon/10242/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10242.png",
    "types": ["steel", "dragon"]
}, {
    "name": "avalugg-hisui",
    "url": "https://pokeapi.co/api/v2/pokemon/10243/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10243.png",
    "types": ["ice", "rock"]
}, {
    "name": "decidueye-hisui",
    "url": "https://pokeapi.co/api/v2/pokemon/10244/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10244.png",
    "types": ["grass", "fighting"]
}, {
    "name": "dialga-origin",
    "url": "https://pokeapi.co/api/v2/pokemon/10245/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10245.png",
    "types": ["steel", "dragon"]
}, {
    "name": "palkia-origin",
    "url": "https://pokeapi.co/api/v2/pokemon/10246/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10246.png",
    "types": ["water", "dragon"]
}, {
    "name": "basculin-white-striped",
    "url": "https://pokeapi.co/api/v2/pokemon/10247/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10247.png",
    "types": ["water"]
}, {
    "name": "basculegion-female",
    "url": "https://pokeapi.co/api/v2/pokemon/10248/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10248.png",
    "types": ["water", "ghost"]
}, {
    "name": "enamorus-therian",
    "url": "https://pokeapi.co/api/v2/pokemon/10249/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10249.png",
    "types": ["fairy", "flying"]
}]

export default pokemons;
