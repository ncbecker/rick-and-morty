import "./button.css";
import { createElement } from "../utils/elements";

function Button(props) {
  const element = createElement("button", {
    className: "button",
    ...props,
  });
  return element;
}

export default Button;
