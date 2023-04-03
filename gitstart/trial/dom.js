// Define UI variables
const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');

// Add item
form.addEventListener('submit', addItem);

// Delete item
itemList.addEventListener('click', removeItem);

// Filter items
filter.addEventListener('keyup', filterItems);

// Add item to list
function addItem(e) {
  e.preventDefault();

  // Get input value
  const newItem = document.querySelector('#item').value;
  const newDesc = document.querySelector('#desc').value;

  // Create new li element
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
  
  // Create new p element
  const desc = document.createElement('p');
  desc.appendChild(document.createTextNode(newDesc));
  desc.className = 'item-desc';
  li.appendChild(desc);

  // Create edit button
  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-secondary btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete ml-2';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);

  // Add li to list
  itemList.appendChild(li);
  
  // Clear input fields
  document.querySelector('#item').value = '';
  document.querySelector('#desc').value = '';
}

// Remove item from list
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter items
function filterItems(e) {
  // Convert text to lowercase
  const text = e.target.value.toLowerCase();
  // Get lis
  const items = itemList.getElementsByTagName('li');
  // Convert HTMLCollection to an array
  Array.from(items).forEach(function(item) {
    const itemName = item.firstChild.textContent.toLowerCase();
    const itemDesc = item.querySelector('.item-desc').textContent.toLowerCase();
    if (itemName.indexOf(text) !== -1 || itemDesc.indexOf(text) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}







