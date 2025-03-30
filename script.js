// const characters = ['Мафия', 'Доктор', 'Шериф', 'Мирный житель', 'Мирный житель', 'Маньяк', 'Ночная бабочка', 'Мирный житель'];

// вывод персов
let maf = document.querySelector("mafia");
let doc= document.querySelector("doc");
let man= document.querySelector("man");
let sher= document.querySelector("sher");
let pr= document.querySelector("prst");
let mir= document.querySelector("peace");

let generatedCharacters = [];




document.getElementById('generateCharacterButton').addEventListener('click', function() {
    if (characters.length === 0) {
        alert('Все персонажи уже использованы!');
        return;
    }

const randomIndex = Math.floor(Math.random() * characters.length);
const randomCharacter = characters[randomIndex];

characters.splice(randomIndex, 1);
generatedCharacters.push(randomCharacter);

const characterDisplay = document.getElementById('characterDisplay');
characterDisplay.innerHTML = "<h2>Сгенерированный персонаж:</h2>" + "<p>" + randomCharacter + "</p>";
});