import appendToTaskBox from "./appendToTaskBox";
import displayTaskForm from "./displayTaskForm";

export default function createTaskDivider() {
  // simply used to create a add new task div with a button to click to add a new one.
  const createTaskDiv = document.createElement("div");
  const createTaskButton = document.createElement("button");
  createTaskDiv.appendChild(createTaskButton);
  createTaskDiv.id = "create-task-container";
  createTaskButton.id = "create-task-button";
  createTaskButton.textContent = "Add task";
  createTaskButton.onclick = function () {
    displayTaskForm();
  };
  appendToTaskBox(createTaskDiv);
}
