// Initial array of Gamecock gameday items
const gamedayItems = [
    { title: "Garnet and Black Apparel", description: "Jersey, t-shirt, or polo in school colors." },
    { title: "Gamecock Spirit Gear", description: "Shaker (pom-pom) for waving during the Fight Song." },
    { title: "Tailgate Supplies", description: "Tent, folding chairs, cooler, and food for Cockaboose Railroad tailgating." },
    { title: "The '2001: A Space Odyssey' Track", description: "Be ready to cheer when the lights flash and the team runs out." },
    { title: "Sandstorm Towel", description: "Essential for twirling during the legendary crowd hype song." }
];

// Grab DOM elements
const checklistElement = document.getElementById('checklist');
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');

// Function to render the array to the DOM
function renderChecklist() {
    // Clear current list content
    checklistElement.innerHTML = '';

    // Loop through array and build list items
    gamedayItems.forEach((item) => {
        const li = document.createElement('li');
        
        // Match the layout structure requested
        li.innerHTML = `<strong>${item.title}:</strong> ${item.description}`;
        
        checklistElement.appendChild(li);
    });
}

// Event listener for adding a new item via submit button
itemForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const userInput = itemInput.value.trim();
    if (userInput !== "") {
        // Push the new item into the array
        gamedayItems.push({
            title: "Custom Item",
            description: userInput
        });

        // Clear the input field
        itemInput.value = '';

        // Re-render the list with the updated array
        renderChecklist();
    }
});

// Initial render when the page loads
renderChecklist();