import appendToTaskBox from "./appendToTaskBox";

export default function createTaskForm() {
  // simply used to create a add new task div with a button to click to add a new one.
  const createTaskDiv = document.createElement("div");
  const createTaskButton = document.createElement("button");
  createTaskDiv.appendChild(createTaskButton);
  createTaskDiv.id = "create-task-container";
  createTaskButton.id = "create-task-button";
  createTaskButton.textContent = "Add task";
  appendToTaskBox(createTaskDiv);
}
