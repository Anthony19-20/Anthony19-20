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

// On vérifie si on est sur la page favorites.html
if (window.location.pathname.includes('favorites.html')) {
    const container = document.getElementById('favorites-container');

    // Fonction pour charger et afficher les favoris
    function displayFavorites() {
        const myFavs = JSON.parse(localStorage.getItem('myFavorites')) || [];
        container.innerHTML = ""; // On vide le conteneur avant d'afficher

        if (myFavs.length === 0) {
            container.innerHTML = "<p>Vous n'avez pas encore de favoris.</p>";
            return;
        }

        myFavs.forEach((recipe, index) => {
            // On crée l'élément de la carte
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.innerHTML = `
                <div class="suggestions">
                    <img src="${recipe.img}" class="recipe-img">
                    <span>${recipe.name}</span>
                </div>
                <button class="btn-2 active_btn" data-index="${index}"></button>
            `;

            // On ajoute l'événement de suppression sur le bouton
            const deleteBtn = card.querySelector('.btn-2');
            deleteBtn.addEventListener('click', () => {
                removeFavorite(index);
            });

            container.appendChild(card);
        });
    }

    // Fonction pour supprimer un favori par son index
    function removeFavorite(index) {
        let myFavs = JSON.parse(localStorage.getItem('myFavorites')) || [];

        // On retire l'élément du tableau
        myFavs.splice(index, 1);

        // On met à jour le localStorage
        localStorage.setItem('myFavorites', JSON.stringify(myFavs));

        // On rafraîchit l'affichage
        displayFavorites();
    }

    // Premier appel pour afficher les favoris au chargement
    displayFavorites();
}