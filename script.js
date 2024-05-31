const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	const query = str.toLowerCase();
	if (query.length > 0) {
		results = fruit.filter(f => f.toLowerCase().includes(query));
	}
	return results;
}

function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search(inputVal);
	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	// Clear any previous suggestions
	suggestions.innerHTML = '';

	if (results.length > 0) {
		results.forEach(item => {
			const li = document.createElement('li');
			li.textContent = item;
			suggestions.appendChild(li);

			// Add event listener for highlighting on hover
			li.addEventListener('mouseover', highlightSuggestion);

			// Add event listener for selecting a suggestion on click
			li.addEventListener('click', useSuggestion);
		});
	} else {
		// If no results, show 'No results' message
		const li = document.createElement('li');
		li.textContent = 'No results';
		suggestions.appendChild(li);
	}
}

function highlightSuggestion(e) {
	const items = document.querySelectorAll('.suggestions ul li');
	items.forEach(item => item.classList.remove('highlight'));
	e.target.classList.add('highlight');
}

function useSuggestion(e) {
	const selectedText = e.target.textContent;
	input.value = selectedText;
	// Clear suggestions after selection
	suggestions.innerHTML = '';
}

// Adding event listener for user input in the search bar
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
