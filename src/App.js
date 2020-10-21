import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import CreateCharacter from "../src/components/Character";

function App() {
  const header = Header();

  const main = createElement("main", {
    children: [
      CreateCharacter({
        name: "Beth's Mytholog",
        imgSrc: "https://rickandmortyapi.com/api/character/avatar/40.jpeg",
      }),
    ],
  });

  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
