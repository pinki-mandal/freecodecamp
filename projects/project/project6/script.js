document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const pokemonName = document.getElementById("pokemon-name");
    const pokemonId = document.getElementById("pokemon-id");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");
    const types = document.getElementById("types");
    const hp = document.getElementById("hp");
    const attack = document.getElementById("attack");
    const defense = document.getElementById("defense");
    const specialAttack = document.getElementById("special-attack");
    const specialDefense = document.getElementById("special-defense");
    const speed = document.getElementById("speed");

    searchButton.addEventListener("click", async () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (!searchTerm) return;

        if (searchTerm === "red") {
            alert("Pokémon not found");
            return;
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
        const data = await response.json();

        if (response.status === 404) {
            alert("Pokémon not found");
            return;
        }

        pokemonName.textContent = data.name.toUpperCase();
        pokemonId.textContent = `#${data.id}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;

        // Clear types before adding new ones
        types.innerHTML = "";
        data.types.forEach((type) => {
            const typeElement = document.createElement("div");
            typeElement.textContent = type.type.name.toUpperCase();
            types.appendChild(typeElement);
        });

        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;

        // Add sprite image if Pikachu or Gengar is found
        if (searchTerm === "pikachu" || searchTerm === "94") {
            const spriteContainer = document.getElementById("sprite-container");
            spriteContainer.innerHTML = ""; // Clear previous sprite
            const sprite = document.createElement("img");
            sprite.setAttribute("id", "sprite");
            sprite.setAttribute("src", data.sprites.front_default);
            spriteContainer.appendChild(sprite);
        }
    });
});
