const pokemonName = document.querySelector('.name');
const numero = document.getElementById('number');
const tipo = document.getElementById('type');
const especie = document.getElementById('especie');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const habilidade = document.getElementById('habilidade');
const imagem = document.querySelector('.pokemon-photo');
const hp = document.getElementById('hp');
const ataque = document.getElementById('ataque');
const defesa = document.getElementById('defesa');
const atcespecial = document.getElementById('atcespecial');

const fetchPokemon =  async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await APIResponse.json();
    
    return data;
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name;
    number.innerHTML = data.id;
    tipo.innerHTML = data['types']['0']['type']['name'];
    especie.innerHTML = data.species.name;
    altura.innerHTML = data.height;
    peso.innerHTML = data.weight;
    habilidade.innerHTML = data['abilities']['0']['ability']['name'];
    imagem.src = data['sprites']['other']['official-artwork']['front_shiny'];
    hp.innerHTML = data['stats']['0']['base_stat'];
    ataque.innerHTML = data['stats']['1']['base_stat'];
    defesa.innerHTML = data['stats']['2']['base_stat'];
    atcespecial.innerHTML = data['stats']['3']['base_stat'];
}

function chamaPokemon(){
    let input = document.getElementById('dataInput');

    if (!dataInput.value) {
        alert('Digite o número do POKEMON!!!!')
    } else {
        input = dataInput;
    }
    renderPokemon(input.value);
}


