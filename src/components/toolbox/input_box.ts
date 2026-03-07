/* this function gets the input from the text box, when the button is clicked, and adds it to the existing list on the dom */
/*
function addToDOM(theList, item) {
    //var listarray = []; 

    var toCopy = document.getElementById("addbtn").value; 
    //document.getElementById("theList").appendChild(toCopy); 

}

function loadList(theList) {

    var toCopy = document.getElementById("addbtn").value; 
    //document.getElementById("theList").appendChild(toCopy);
}
*/


const itemInput = document.getElementById('textInput') as HTMLInputElement | null;
const addButton = document.getElementById('addButton') as HTMLButtonElement | null;
const clearButton = document.getElementById('clearButton') as HTMLButtonElement | null;
const list = document.getElementById('theList') as HTMLUListElement | null;

let itemsArray: any[] = [];


// Load items from localStorage on page load
function loadItems() {
    const savedItems = localStorage.getItem('listItems');
    if (savedItems) itemsArray = JSON.parse(savedItems);
    renderList();
}

// Save items to localStorage whenever the array changes
function saveItems() {
    localStorage.setItem('listItems', JSON.stringify(itemsArray));
}

// render array items to the ordered list
function renderList() {
    if (!list) return;
    list.innerHTML = ''; // Clear existing items
    itemsArray.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });
}

function clearList() {
   /* itemsArray.forEach(item => {
        if (item) itemsArray.pop();
    });*/
    localStorage.clear();
}

function focusInput() {
    itemInput?.focus();
}

/*
function saveListToFile() {
    //list.print();
}
*/

// Call loadItems() on page load
loadItems();

focusInput();

// Add click event listener to the button
addButton?.addEventListener('click', () => {
    const newItem = itemInput?.value.trim();

    // Validate input
    if (newItem === '') {
        alert('Please enter a valid item.');
        return;
    }

    // Add to array and re-render
    itemsArray.push(newItem);
    if (itemInput) itemInput.value = ''; // Clear input

    renderList(); // Update the list
    saveItems(); // Save after adding
});


clearButton?.addEventListener('click', () => {
    alert('clearing all items in list and reloading the page');
    clearList();
    
    // document.reload? 
    location.reload();
});