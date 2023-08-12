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

// Aggiungi il gestore di eventi per l'aggiunta di un nuovo gatto
document.querySelector(".add_cats").addEventListener("click", addNewCat);
