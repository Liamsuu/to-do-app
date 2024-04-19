export default function checkFormVisible() {
  const form = document.querySelector("#add-task-form");
  if (form === null) {
    return false;
  } else {
    return true;
  }
}
