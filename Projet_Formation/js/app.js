// On sélectionne par la classe maintenant, c'est plus propre
const btns = document.querySelectorAll('.js-fav-btn');

// 1. Charger les favoris existants ou créer un tableau vide
let favorites = JSON.parse(localStorage.getItem('myFavorites')) || [];

btns.forEach((btn) => {
    // Vérifier si la recette est déjà en favoris au chargement pour garder le bouton actif
    const recipeName = btn.getAttribute('data-name');
    if (favorites.some(fav => fav.name === recipeName)) {
        btn.classList.add('active_btn');
    }

    btn.addEventListener('click', (event) => {
        event.preventDefault();

        const name = btn.getAttribute('data-name');
        const img = btn.getAttribute('data-img');
        const recipeData = { name, img };

        // 2. Ajouter ou retirer des favoris
        const index = favorites.findIndex(fav => fav.name === name);

        if (index === -1) {
            favorites.push(recipeData); // On ajoute
            btn.classList.add('active_btn');
        } else {
            favorites.splice(index, 1); // On retire
            btn.classList.remove('active_btn');
        }

        // 3. Sauvegarder dans le localStorage
        localStorage.setItem('myFavorites', JSON.stringify(favorites));
    });
});

if (window.location.pathname.includes('favorites.html')) {
    const container = document.getElementById('favorites-container');
    const myFavs = JSON.parse(localStorage.getItem('myFavorites')) || [];

    if (myFavs.length === 0) {
        container.innerHTML = "<p>Vous n'avez pas encore de favoris.</p>";
    } else {
        myFavs.forEach(recipe => {
            container.innerHTML += `
                <div class="recipe-card">
                    <div class="suggestions">
                        <img src="${recipe.img}" class="recipe-img">
                        ${recipe.name}
                    </div>
                    <button class="btn-2 active_btn"></button>
                </div>`;
        });
    }
}