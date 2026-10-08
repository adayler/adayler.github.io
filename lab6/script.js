// Recipe Data Object storing niche/gourmet dip recipes
const recipes = {
    cannoli: {
        title: "Decadent Cannoli Dip",
        content: `
            <p>All the rich, sweet flavors of a traditional Sicilian cannoli transformed into a light, creamy, shareable dessert dip. Studded with mini chocolate chips and served with broken waffle cones, it's a guaranteed showstopper.</p>
            
            <h2>Ingredients:</h2>
            <ul>
                <li>15 oz whole milk ricotta cheese (strained if watery)</li>
                <li>8 oz mascarpone cheese, softened</li>
                <li>1 cup powdered sugar</li>
                <li>1 tsp pure vanilla extract</li>
                <li>1/2 tsp ground cinnamon</li>
                <li>1/2 cup mini semi-sweet chocolate chips (plus extra for topping)</li>
                <li>Waffle cone pieces or graham crackers for dipping</li>
            </ul>

            <h2>Instructions:</h2>
            <ul>
                <li><strong>Step 1:</strong> In a large mixing bowl, beat the ricotta and mascarpone together using an electric mixer until smooth and fluffy.</li>
                <li><strong>Step 2:</strong> Gradually add the powdered sugar, vanilla extract, and cinnamon, mixing on low speed until fully incorporated.</li>
                <li><strong>Step 3:</strong> Gently fold in the mini chocolate chips using a spatula.</li>
                <li><strong>Step 4:</strong> Transfer the mixture to a serving bowl, garnish with extra chocolate chips on top, and chill in the refrigerator for at least 30 minutes before serving with waffle cone chips.</li>
            </ul>
        `
    },
    onionBacon: {
        title: "Caramelized Onion & Bacon Dip",
        content: `
            <p>Moving far beyond packet-style onion dip, this gourmet version relies on slow-caramelized sweet onions, crispy thick-cut bacon, and a rich cream base for a deeply savory flavor profile.</p>
            
            <h2>Ingredients:</h2>
            <ul>
                <li>3 large yellow onions, thinly sliced</li>
                <li>2 tbsp unsalted butter</li>
                <li>1 tbsp olive oil</li>
                <li>1 tsp brown sugar</li>
                <li>6 slices thick-cut bacon, cooked and crumbled</li>
                <li>8 oz cream cheese, softened</li>
                <li>1/2 cup sour cream</li>
                <li>1/4 cup mayonnaise</li>
                <li>Chives, finely chopped for garnish</li>
            </ul>

            <h2>Instructions:</h2>
            <ul>
                <li><strong>Step 1:</strong> Heat butter and olive oil in a large skillet over medium-low heat. Add sliced onions and brown sugar, cooking slowly for 35–45 minutes until deeply golden brown and caramelized, stirring frequently. Set aside to cool.</li>
                <li><strong>Step 2:</strong> In a medium bowl, beat the softened cream cheese, sour cream, and mayonnaise until smooth.</li>
                <li><strong>Step 3:</strong> Stir in three-quarters of the caramelized onions and most of the crumbled bacon.</li>
                <li><strong>Step 4:</strong> Transfer to a serving dish and top with the remaining onions, bacon, and fresh chives. Serve with kettle potato chips or crusty bread.</li>
            </ul>
        `
    },
    whippedFeta: {
        title: "Whipped Feta with Honey & Pistachios",
        content: `
            <p>A sophisticated Mediterranean-inspired masterpiece inspired by my Greek lover, Konstantinos. Salty, tangy feta cheese is whipped with Greek yogurt and lemon until cloud-like, then drizzled with hot honey and topped with crunchy pistachios.</p>
            
            <h2>Ingredients:</h2>
            <ul>
                <li>8 oz authentic Greek feta cheese, broken into chunks</li>
                <li>1/2 cup plain Greek yogurt</li>
                <li>1 clove garlic, peeled</li>
                <li>2 tbsp fresh lemon juice</li>
                <li>3 tbsp extra virgin olive oil (plus extra for drizzling)</li>
                <li>2 tbsp hot honey</li>
                <li>1/4 cup roasted pistachios, roughly chopped</li>
                <li>Fresh mint leaves for garnish</li>
            </ul>

            <h2>Instructions:</h2>
            <ul>
                <li><strong>Step 1:</strong> In a food processor, combine the feta cheese, Greek yogurt, garlic clove, lemon juice, and 2 tablespoons of olive oil.</li>
                <li><strong>Step 2:</strong> Process for 1 to 2 minutes until completely smooth, scraping down the sides as needed until it achieves a whipped, creamy texture.</li>
                <li><strong>Step 3:</strong> Spread the whipped feta onto a shallow serving bowl or plate, creating a well in the center using the back of a spoon.</li>
                <li><strong>Step 4:</strong> Drizzle generously with hot honey and extra virgin olive oil, then top with chopped pistachios and fresh mint leaves. Serve with warm pita bread.</li>
            </ul>
        `
    }
};

// Function to show the home/welcome view
function showHome() {
    document.getElementById('mainHeader').innerText = "Welcome to The Dip Den!";
    document.getElementById('mainContent').innerHTML = `
        <p>Welcome, fellow dip enthusiast! For as long as I can remember, my life has revolved around the magic of dipping. Beyond the standard party snacks, I've always had a profound passion for exploring niche, unexpected, and elevated dip creations that truly surprise and delight the palate.</p>
        <p>Why is this website important to share with people? Because dips are the ultimate unifiers of food culture. They break down formalities and invite us to gather around a single dish, share stories, and indulge in comfort food. Moving past the ordinary, these unique recipes prove that a good dip can be sweet, savory, gourmet, or downright artisanal.</p>
        <p>Explore the sidebar on the left to discover some of my absolute favorite artisanal and niche dip recipes!</p>
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