// Instead of creating a bunch of individual variables,
// we can put multiple pieces of data in one place using arrays.
// Arrays are created using []
const contents = [
    "Health Potion",
    "Sword",
    "Shield",
    "Magic Book",
    "Pet Lizard"
];

function loadInventory() {
    const listElement = document.getElementById("item-list");

    listElement.innerHTML = "";

    for(let i = 0; i < content.length; i++) //i is temporary variable; does this in CCW circle until i = 5 and then it will stop because 5 isn't < 5
    {
        let currentItem = contents[i];
        
        let hmtlToInject = "<li>" + currentItem + "</li>";

        // listElement = listElement + htmlToInject abbreviated; 
        listElement += hmtlToInject; 
    }

    document.querySelector("button").disabled = true; 
    document.querySelector("button").innerText = "Backpack Full";
}