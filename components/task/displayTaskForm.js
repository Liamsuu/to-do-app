import checkFormVisible from "./checkFormVisible";
import appendTaskToArr from "./appendTaskToArr";
import showTasks from "./showTasks";
import { getProjectObjList } from "../projectSection/project";
import { setProjectObjLocalStorage } from "../projectSection/project";

export default function displayTaskForm() {
  // creates the pop up form to create task object.

  if (checkFormVisible() === false) {
    const form = document.createElement("form");
    form.id = "add-task-form";
    form.action = "#";
    form.method = "get";
    const formHeading = document.createElement("h1");
    formHeading.textContent = "Add new Task";
    form.onsubmit = function (event) {
      event.preventDefault();
      // maybe event preventDefault() function
      appendTaskToArr();
      setProjectObjLocalStorage();
      const selectedProject = document.querySelector(".selected-project");
      const selectedProjectId = selectedProject.id;
      showTasks(getProjectObjList()[Number(selectedProjectId)]);
    }; // test if this works, otherwise remove.

    const taskTitleLabel = document.createElement("label");
    taskTitleLabel.textContent = "Title:";
    taskTitleLabel.setAttribute("for", "title");
    const taskTitleInput = document.createElement("input");
    taskTitleInput.type = "text";
    taskTitleInput.placeholder = "Enter Title";
    taskTitleInput.name = "title";
    taskTitleInput.id = "title";
    taskTitleInput.required = true;

    const taskDescriptionLabel = document.createElement("label");
    taskDescriptionLabel.textContent = "Description:";
    taskDescriptionLabel.setAttribute("for", "description");
    const taskDescriptionInput = document.createElement("input");
    taskDescriptionInput.type = "text"; // maybe change to textfield.
    taskDescriptionInput.placeholder = "Enter Description";
    taskDescriptionInput.name = "description";
    taskDescriptionInput.id = "description";
    taskDescriptionInput.required = true;

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date:";
    dueDateLabel.setAttribute("for", "duedate");
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.placeholder = "Enter Duedate";
    dueDateInput.name = "duedate";
    dueDateInput.id = "duedate";
    dueDateInput.required = true;
    dueDateInput.min = new Date().toISOString().split("T")[0];

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority:";
    priorityLabel.setAttribute("for", "priorities");
    const priorityInput = document.createElement("select");
    priorityInput.id = "priorities";
    priorityInput.name = "priorities";
    const optionOne = document.createElement("option");
    optionOne.value = "High";
    optionOne.textContent = "High";
    const optionTwo = document.createElement("option");
    optionTwo.value = "Medium";
    optionTwo.textContent = "Medium";
    const optionThree = document.createElement("option");
    optionThree.value = "Low";
    optionThree.textContent = "Low";
    priorityInput.append(optionOne, optionTwo, optionThree);

    const formButtonDiv = document.createElement("div");
    formButtonDiv.id = "form-btn-div";

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.id = "submit-button-form";

    const resetButton = document.createElement("input");
    resetButton.type = "reset";
    resetButton.id = "reset-button-form";

    const closeButton = document.createElement("button");
    closeButton.id = "close-button-form";
    closeButton.textContent = "Close";
    closeButton.onclick = function () {
      while (form.firstChild) {
        form.removeChild(form.firstChild);
      }
      const contentParent = document.querySelector("#task-section");
      contentParent.removeChild(form);
    };

    formButtonDiv.append(submitButton, resetButton, closeButton);

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
      formButtonDiv
    );

    const taskSection = document.querySelector("#task-section");
    taskSection.appendChild(form);
  }
}
