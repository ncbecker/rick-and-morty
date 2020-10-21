import "./charactersearch.css";
import { createElement } from "../utils/elements";

function CharacterSearch() {
  const searchForm = createElement("form", {
    className: "searchform",
  });
  const inputSearch = createElement("input", {
    className: "inputsearch",
  });
  searchForm.append(inputSearch);
  return searchForm;
}

export default CharacterSearch;
