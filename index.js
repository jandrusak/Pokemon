let pokemon2;
let pokemon1;
// let pokemon3;
// let pokemon4;

window.onload = function() {
    getPokemon1();getPokemon2();
    // getPokemon3();getPokemon4();
}

const getPokemon1 = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/12')
    .then(res => res.json())
    .then(pokemon => {pokemon1 = pokemon;
    console.log(pokemon)})
}
const getPokemon2 = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/18')
    .then(res => res.json())
    .then(pokemon => {pokemon2 = pokemon;
    console.log(pokemon)})
}
// const getPokemon3 = () => {
//     fetch('https://pokeapi.co/api/v2/pokemon/8')
//     .then(res => res.json())
//     .then(pokemon => {pokemon3 = pokemon;
//     console.log(pokemon)})
// }
// const getPokemon4 = () => {
//     fetch('https://pokeapi.co/api/v2/pokemon/3')
//     .then(res => res.json())
//     .then(pokemon => {pokemon4 = pokemon;
//     console.log(pokemon)})
// }




const displayPokemon1 = () => {
    const pokemonList1 = document.getElementById('list')
    const pokemonImg1 = document.createElement('img')
    const pokemonText1 = document.createTextNode(`Name: ${pokemon1.name} - Height: ${pokemon1.height}`)
    const pokemonLi1 = document.createElement('li')
    pokemonImg1.src = pokemon1.sprites.front_shiny
    pokemonLi1.appendChild(pokemonText1)
    pokemonLi1.appendChild(pokemonImg1)
    pokemonList1.appendChild(pokemonLi1)
}
const displayPokemon2 = () => {
    const pokemonList = document.getElementById('list')
    const pokemonImg = document.createElement('img')
    const pokemon2Text = document.createTextNode(`name: ${pokemon2.name} - height: ${pokemon2.height}`)
    const pokemonLi = document.createElement('li')
    pokemonImg.src = pokemon2.sprites.front_shiny
    pokemonLi.appendChild(pokemon2Text)
    pokemonLi.appendChild(pokemonImg)
    pokemonList.appendChild(pokemonLi)
}
// const displayPokemon3 = () => {
//     const pokemonList3 = document.getElementById('list')
//     const pokemonImg3 = document.createElement('img')
//     const pokemonText3 = document.createTextNode(`Name: ${pokemon3.name} - Height: ${pokemon1.height}`)
//     const pokemonLi3 = document.createElement('li')
//     pokemonImg3.src = pokemon3.sprites.front_shiny
//     pokemonLi3.appendChild(pokemonText3)
//     pokemonLi3.appendChild(pokemonImg3)
//     pokemonList3.appendChild(pokemonLi3)
// }
// const displayPokemon4 = () => {
//     const pokemonList4 = document.getElementById('list')
//     const pokemonImg4 = document.createElement('img')
//     const pokemonText4 = document.createTextNode(`Name: ${pokemon4.name} - Height: ${pokemon1.height}`)
//     const pokemonLi4 = document.createElement('li')
//     pokemonImg4.src = pokemon4.sprites.front_shiny
//     pokemonLi4.appendChild(pokemonText4)
//     pokemonLi4.appendChild(pokemonImg4)
//     pokemonList4.appendChild(pokemonLi4)
// }

const displayBattle = () => {
    if (pokemon1.height > pokemon2.height) {
        window.alert(`Pokemon 1 won!`)
    } else {
        if (pokemon2.height > pokemon1.height)
        window.alert("Pokemon 2 wins!")
    }}
