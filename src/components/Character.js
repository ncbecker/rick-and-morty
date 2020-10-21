import { createElement } from "../utils/elements";

function CreateCharacter({ name, imgSrc }) {
  const character = createElement("div", {
    className: "character",
    children: [
      createElement("div", {
        className: "title",
        innerText: name,
      }),
      createElement("img", {
        className: "avatar",
        src: imgSrc,
        alt: name,
      }),
    ],
  });
  return character;
}

export default CreateCharacter;
