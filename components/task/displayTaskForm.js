export default function displayTaskForm() {
  // creates the pop up form to create task object.

  const form = document.createElement("form");
  form.id = "addTaskForm";
  form.action = "#";
  form.method = "get";
  const formHeading = document.createElement("h1");
  formHeading.textContent = "Add new Task";

  const taskTitleLabel = document.createElement("label");
  taskTitleLabel.textContent = "Title:";
  taskTitleLabel.setAttribute("for", "title");
  const taskTitleInput = document.createElement("input");
  taskTitleInput.type = "text";
  taskTitleInput.placeholder = "Enter Title";
  taskTitleInput.name = "title";
  taskTitleInput.id = "title";

  const taskDescriptionLabel = document.createElement("label");
  taskDescriptionLabel.textContent = "Description:";
  taskDescriptionLabel.setAttribute("for", "description");
  const taskDescriptionInput = document.createElement("input");
  taskDescriptionInput.type = "text"; // maybe change to textfield.
  taskDescriptionInput.placeholder = "Enter Description";
  taskDescriptionInput.name = "description";
  taskDescriptionInput.id = "description";

  const dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Due Date:";
  dueDateLabel.setAttribute("for", "duedate");
  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.placeholder = "Enter Duedate";
  dueDateInput.name = "duedate";
  dueDateInput.id = "duedate";

  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priotise Task:";
  priorityLabel.setAttribute("for", "duedate");
  const priorityInput = document.createElement("input");
  priorityInput.type = "checkbox";
  priorityInput.placeholder = "Enter Duedate";
  priorityInput.name = "duedate";
  priorityInput.id = "duedate";

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.id = "submit-button-form";

  const resetButton = document.createElement("input");
  resetButton.type = "reset";
  resetButton.id = "reset-button-form";

  form.append(
    formHeading,
    taskTitleLabel,
    taskTitleInput,
    taskDescriptionLabel,
    taskDescriptionInput,
    dueDateLabel,
    dueDateInput,
    priorityLabel,
    priorityInput,
    submitButton,
    resetButton
  );

  const taskSection = document.querySelector("#task-section");
  taskSection.appendChild(form);
}
