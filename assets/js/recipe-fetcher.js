// Fetch recipes data from the server
fetch('https://api.example.com/recipes')
  .then(response => response.json())
  .then(data => {
    // Generate recipe div elements based on the fetched data
    const recipesContainer = document.getElementById('recipes-container');

    data.forEach(recipe => {
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
  })
  .catch(error => {
    console.log('Error fetching recipes:', error);
  });
