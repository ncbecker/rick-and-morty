import "./app.css";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Character from "../src/components/Character";
// import CharacterSearch from "../src/components/CharacterSearch";
import { createElement } from "./utils/elements";
import { getCharacters } from "./utils/api";

// function waitFor(delay) {
//   return new Promise((res) => setTimeout(res, delay));
// }

function App() {
  const header = Header();

  // const searchContainer = CharacterSearch();

  const characterContainer = Characters();

  const main = createElement("main", {
    className: "main",
    children: [
      // searchContainer,
      characterContainer,
    ],
  });

  async function loadCharacters(name) {
    // await waitFor(100);
    const characters = await getCharacters(name);
    const characterElements = characters.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );
    characterContainer.innerHTML = "";
    characterContainer.append(...characterElements);
  }

  const searchBar = createElement("input", {
    onchange: (event) => loadCharacters(event.target.value),
  });

  loadCharacters();

  const container = createElement("div", {
    children: [header, searchBar, main],
  });
  return container;
}

export default App;

// Hinweis: characters.map erstellt aus dem geladenen Array mit den Objekten/Charakteren und seinen Eigenschaften einen neuen Array aus HTML-Elementen (mittels der Character Funktion) und den gemappten Eigenschaften

// Version 1
// CreateCharacter({
//   name: "Beth's Mytholog",
//   imgSrc: "https://rickandmortyapi.com/api/character/avatar/40.jpeg",
// }),

// Version 2
// async function loadCharacters() {
//   await waitFor(100);
//   const firstCharacter = await getCharacterById(1);
//   const secondCharacter = await getCharacterById(2);
//   characterContainer.append(
//     Character({
//       name: firstCharacter.name,
//       imgSrc: firstCharacter.image,
//     }),
//     Character({
//       name: secondCharacter.name,
//       imgSrc: secondCharacter.image,
//     })
//   );
// }
