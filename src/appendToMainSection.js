export default function appendToMain(element) {
  const mainBox = document.querySelector("#main-content");
  mainBox.appendChild(element);
}
