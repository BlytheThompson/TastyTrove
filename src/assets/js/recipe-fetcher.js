const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = 'mongodb+srv://eazyonlinesolutions:<SXrHLiO5Gf9feUr>@tastytrove.ecnc8pz.mongodb.net/?retryWrites=true&w=majority';

async function run() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    // Connect to MongoDB
    await client.connect();

    // Access the recipes collection
    const db = client.db('TastyTrove');
    const recipesCollection = db.collection('recipes');

    // Fetch recipes data from MongoDB
    const recipes = await recipesCollection.find().toArray();

    // Generate recipe div elements based on the fetched data
    const recipesContainer = document.getElementById('recipes-container');

    recipes.forEach(recipe => {
      const recipeDiv = document.createElement('div');
      recipeDiv.classList.add('recipe');

      const recipeImage = document.createElement('img');
      recipeImage.src = recipe.image;
      recipeImage.alt = recipe.name;
      recipeDiv.appendChild(recipeImage);

      const recipeName = document.createElement('h3');
      recipeName.textContent = recipe.name;
      recipeDiv.appendChild(recipeName);

      const recipeDescription = document.createElement('p');
      recipeDescription.textContent = recipe.description;
      recipeDiv.appendChild(recipeDescription);

      recipesContainer.appendChild(recipeDiv);
    });

    console.log('Recipes fetched successfully!');
  } catch (error) {
    console.log('Error fetching recipes:', error);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}

run().catch(console.dir);

