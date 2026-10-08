// Recipe Data Object storing information for each dip
const recipes = {
    guacamole: {
        title: "Classic Guacamole",
        content: `
            <p>Fresh, vibrant, and bursting with flavor, classic guacamole is the undisputed king of party appetizers. Made with ripe Haas avocados, zesty lime, and fresh cilantro, it takes less than 10 minutes to whip up!</p>
            
            <h2>Ingredients:</h2>
            <ul>
                <li>3 ripe Haas avocados</li>
                <li>1 lime, juiced</li>
                <li>1/2 tsp kosher salt</li>
                <li>1/2 cup diced white onion</li>
                <li>3 tbsp fresh cilantro, chopped</li>
                <li>1 jalapeño, seeded and finely minced</li>
                <li>1 Roma tomato, diced</li>
            </ul>

            <h2>Instructions:</h2>
            <ul>
                <li><strong>Step 1:</strong> Cut the avocados in half, remove the pits, and scoop the flesh into a medium mixing bowl.</li>
                <li><strong>Step 2:</strong> Use a fork to mash the avocados to your desired consistency (some like it chunky, some smooth).</li>
                <li><strong>Step 3:</strong> Stir in the lime juice and salt immediately to prevent browning and enhance flavor.</li>
                <li><strong>Step 4:</strong> Fold in the onion, cilantro, jalapeño, and diced tomato. Taste and adjust salt if needed. Serve with warm tortilla chips!</li>
            </ul>
        `
    },
    spinachArtichoke: {
        title: "Creamy Spinach Artichoke Dip",
        content: `
            <p>Warm, cheesy, and utterly decadent, this hot spinach and artichoke dip is a restaurant-style favorite you can easily bake right at home.</p>
            
            <h2>Ingredients:</h2>
            <ul>
                <li>1 pkg (8 oz) cream cheese, softened</li>
                <li>1/4 cup sour cream</li>
                <li>1/4 cup mayonnaise</li>
                <li>1 clove garlic, minced</li>
                <li>1 cup frozen chopped spinach, thawed and squeezed dry</li>
                <li>1 can (14 oz) artichoke hearts, drained and chopped</li>
                <li>1 cup grated mozzarella cheese</li>
                <li>1/2 cup freshly grated parmesan cheese</li>
            </ul>

            <h2>Instructions:</h2>
            <ul>
                <li><strong>Step 1:</strong> Preheat your oven to 375°F (190°C) and lightly grease a baking dish.</li>
                <li><strong>Step 2:</strong> In a large bowl, mix together the softened cream cheese, sour cream, mayonnaise, and minced garlic until smooth.</li>
                <li><strong>Step 3:</strong> Stir in the chopped spinach, artichokes, half of the mozzarella, and half of the parmesan cheese.</li>
                <li><strong>Step 4:</strong> Transfer the mixture into the baking dish and top with the remaining cheese.</li>
                <li><strong>Step 5:</strong> Bake for 20-25 minutes until bubbly and golden brown on top. Serve hot with pita chips or baguette slices.</li>
            </ul>
        `
    },
    buffaloChicken: {
        title: "Ultimate Buffalo Chicken Dip",
        content: `
            <p>Everything you love about Buffalo wings packaged into a rich, spicy, and creamy dip that is guaranteed to disappear within minutes at any gathering.</p>
            
            <h2>Ingredients:</h2>
            <ul>
                <li>2 cups shredded cooked chicken breast</li>
                <li>1 pkg (8 oz) cream cheese, softened</li>
                <li>1/2 cup buffalo wing sauce (like Frank's RedHot)</li>
                <li>1/2 cup ranch or blue cheese dressing</li>
                <li>1 cup shredded cheddar cheese</li>
            </ul>

            <h2>Instructions:</h2>
            <ul>
                <li><strong>Step 1:</strong> Preheat oven to 375°F (190°C).</li>
                <li><strong>Step 2:</strong> In a mixing bowl, combine the softened cream cheese, buffalo sauce, and ranch dressing until completely smooth.</li>
                <li><strong>Step 3:</strong> Fold in the shredded chicken and half of the shredded cheddar cheese.</li>
                <li><strong>Step 4:</strong> Spread the mixture evenly into a baking dish and sprinkle the remaining cheddar cheese on top.</li>
                <li><strong>Step 5:</strong> Bake for 20 minutes until the cheese is melted and bubbling at the edges. Serve warm with celery sticks and tortilla chips.</li>
            </ul>
        `
    }
};

// Function to show the home/welcome view
function showHome() {
    document.getElementById('mainHeader').innerText = "Welcome to The Dip Den!";
    document.getElementById('mainContent').innerHTML = `
        <p>Welcome, fellow dip enthusiast! For as long as I can remember, my life has revolved around the magic of dipping. Whether it's game day, a family movie night, or a casual backyard barbecue, a good dip is the undisputed centerpiece of any gathering.</p>
        <p>Why are dips so important to share with the world? Because dips bring people together. There is something inherently communal and joyous about standing around a bowl of freshly made dip with friends and family, sharing stories, chips, and laughter. Through this website, I want to spread the joy of homemade dips and prove that with just a few fresh ingredients, you can elevate any snack into an unforgettable experience.</p>
        <p>Take a look at the sidebar on the left, click on one of the recipe buttons, and let's get dipping!</p>
    `;
}

// Function to dynamically switch the main body content based on the selected recipe key
function showRecipe(recipeKey) {
    const recipe = recipes[recipeKey];
    if (recipe) {
        document.getElementById('mainHeader').innerText = recipe.title;
        document.getElementById('mainContent').innerHTML = recipe.content;
    }
}