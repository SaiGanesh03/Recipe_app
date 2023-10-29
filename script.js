document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        {
            title: 'Pasta with Tomato Sauce',
            image: '2.jpg',
            description: 'A classic and simple pasta recipe with homemade tomato sauce.',
        },
        {
            title: 'Grilled Chicken Salad',
            image: '1.jpg',
            description: 'Healthy and delicious grilled chicken salad with fresh vegetables.',
        },
        {
            title: 'Chocolate Chip Cookies',
            image: '3.jpg',
            description: 'Soft and chewy chocolate chip cookies. Perfect for dessert!',
        },
    ];

    const recipeList = document.getElementById('recipe-list');

    recipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipeList.appendChild(recipeCard);
    });
});

function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.classList.add('recipe-card');

    const image = document.createElement('img');
    image.src = recipe.image;
    image.alt = recipe.title;

    const content = document.createElement('div');
    content.classList.add('recipe-content');

    const title = document.createElement('h2');
    title.textContent = recipe.title;

    const description = document.createElement('p');
    description.textContent = recipe.description;

    const button = document.createElement('button');
    button.textContent = 'View Recipe';
    button.addEventListener('click', function () {
        alert(`Recipe for ${recipe.title}:\n${recipe.description}`);
    });

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(button);

    card.appendChild(image);
    card.appendChild(content);

    return card;
}
