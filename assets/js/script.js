/**
 * URL per ottenere immagini di gatti casuali
 * @type {string}
 */
const CAT_URL = "https://api.thecatapi.com/v1/images/search";

/**
 * Seleziona il contenitore delle immagini di gatti
 * @type {HTMLElement}
 */
const catsContainer = document.querySelector(".cats");

/**
 * Seleziona il bottone per il cambio di tema
 * @type {HTMLButtonElement}
 */
const toggleThemeButton = document.getElementById("toggleTheme");

/**
 * Flag per la modalità dark
 * @type {boolean}
 */
let isDarkMode = true;

/**
 * Funzione per il cambio di tema
 */
function toggleTheme() {
  // Inverti la modalità del tema
  isDarkMode = !isDarkMode;

  // Aggiungi/rimuovi la classe "bg-dark-mode" dal body per cambiare lo sfondo
  document.body.classList.toggle("bg-dark-mode", isDarkMode);

  // Seleziona l'elemento icona all'interno del bottone
  const icon = toggleThemeButton.querySelector("i");

  // Cambia l'icona in base alla modalità di tema
  icon.classList.toggle("fa-adjust", isDarkMode);
  icon.classList.toggle("fa-sun", !isDarkMode);
  icon.classList.toggle("fa-moon", isDarkMode);
}

/**
 * Funzione per aggiungere un nuovo gatto
 */
function addNewCat() {
  fetch(CAT_URL)
    .then((response) => response.json())
    .then((processedResponse) => {
      const img = document.createElement("img");
      img.src = processedResponse[0].url;
      img.alt = "Cute cats";
      catsContainer.appendChild(img);
    });
}

// Aggiungi il gestore di eventi per il cambio di tema
toggleThemeButton.addEventListener("click", toggleTheme);

// Aggiungi il gestore di eventi per l'aggiunta di un nuovo gatto
document.querySelector(".add_cats").addEventListener("click", addNewCat);
