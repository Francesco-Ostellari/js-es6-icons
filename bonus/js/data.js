/* Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
	Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
	Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone(animal, vegetable, user).Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti. */

// bonus
// 1 - modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.

const card = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: getRandomColor()
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: getRandomColor()
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: getRandomColor()
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: getRandomColor()
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: getRandomColor()
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: getRandomColor()
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: getRandomColor()
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: getRandomColor()
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: getRandomColor()
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: getRandomColor()
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: getRandomColor()
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: getRandomColor()
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: getRandomColor()
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: getRandomColor()
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: getRandomColor()
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: getRandomColor()
	}
];

function printCards(object) {
		const layoutCard = 
	 `<ul class="flex ul">
      <li class="card flex ${object.type}">
          <i class="${object.family} ${object.prefix}${object.name} animals" style ="color:${object.color}"></i><span>${object.name}</span>
      </li>
    </ul>`;
		return layoutCard;
}

let containerCards = document.querySelector('.cards-container');

for (let index = 0; index < card.length; index++) {
	containerCards.innerHTML+=printCards(card[index]);
}

let opzioni = document.getElementById('opzioni');

//controllo gli animali
let animals = card.filter((object) => {
	return object.type == "animal";
});

//controllo le verdure
let vegetables = card.filter((object) => {
	return object.type == "vegetable";
});


//controllo gli utenti
let users = card.filter((object) => {
	return object.type == "user";
});

//quando clicco sulla select per cambiare opzione
opzioni.addEventListener('change', function () {
	if (opzioni.value == 'all') {
		containerCards.innerHTML = '';
		card.forEach((object) => {
			containerCards.innerHTML += printCards(object, containerCards);
		});
	} else if (opzioni.value == 'animal') {
		containerCards.innerHTML = '';
		animals.forEach((object) => {
			containerCards.innerHTML += printCards(object, containerCards);
		});
	} else if (opzioni.value == 'vegetable') {
		containerCards.innerHTML = '';
		vegetables.forEach((object) => {
			containerCards.innerHTML += printCards(object, containerCards);
		});
	} else if (opzioni.value == 'user') {
		containerCards.innerHTML = '';

		users.forEach((object) => {
			containerCards.innerHTML += printCards(object, containerCards);
		}); 
	}
});

function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}