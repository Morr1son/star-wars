// r2

const form = document.querySelector('form');
const searchStarWarsInput = document.querySelector('#query');
const displayInfoArea = document.querySelector('#info');

form.addEventListener('submit', e => {
    e.preventDefault();
    searchStarWars(searchStarWarsInput.value);
});

const searchStarWars = async term => {
    
const data = await fetch (`https://swapi.dev/api/people/?search=${term}`);

const starWarsData = await data.json();
displayData(starWarsData);
};

const displayData = data => {
    const results = data.results[0];
    console.log(results);
    const toDisplay = `you searched for ${results.name} and they were born ${results.birth_year}`;
    displayInfoArea.innerHTML = toDisplay;
};