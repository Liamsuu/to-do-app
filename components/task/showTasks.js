import { getTaskObjList } from "./task";
import appendToTaskBox from "./appendToTaskBox";
import { deleteTaskObjFromList } from "./task";
import changeText from "../../src/changeText";
import deleteIcon from "../images/delete.svg";

export default function showTasks() {
  // just iterate through array of tasks and add that data in the task box.
  // for each task, the div the holds it's data will be assigned a id which is just be equal to the index
  // of the object in the array. That way deleting is as easy as checking the id
  // removing whatever object is in that index. then recalling the method that shows the objects, they should have a new index, so a new id will be assigned.
  const taskAddBtnContainer = document.querySelector("#create-task-container");
  const currentObjListValues = getTaskObjList();

  while (taskAddBtnContainer.nextSibling !== null) {
    taskAddBtnContainer.nextSibling.remove();
    // just refresh everytime this is called.
  }

  currentObjListValues.forEach((object) => {
    const objectDataContainer = document.createElement("div");
    objectDataContainer.className = "task-data-div";
    objectDataContainer.id = currentObjListValues.indexOf(object);

    const titleText = document.createElement("h1");
    titleText.className = "task-headings";
    titleText.textContent = object.title;
    titleText.onclick = function () {
      getTaskObjList()[Number(objectDataContainer.id)].title = changeText(
        titleText.textContent
      );
      showTasks();
    };

    const descriptionText = document.createElement("p");
    descriptionText.className = "task-descriptions";
    descriptionText.textContent = object.description;
    descriptionText.onclick = function () {
      getTaskObjList()[Number(objectDataContainer.id)].description = changeText(
        descriptionText.textContent
      );
      showTasks();
    };

    const dueDateText = document.createElement("p");
    dueDateText.className = "task-due-dates";
    dueDateText.textContent = object.dueDate;

    const priorityText = document.createElement("p");
    priorityText.className = "task-priorities";
    priorityText.textContent = object.priority;

    const removeBtn = new Image();
    removeBtn.src = deleteIcon;
    removeBtn.className = "task-remove-icon";
    removeBtn.onclick = function () {
      const parentId = removeBtn.parentElement.id;
      deleteTaskObjFromList(Number(parentId));
      showTasks();
    };

    const dataGrouper = document.createElement("div"); // this is just so they can be grouped together, so the remove icon can be styled right.
    dataGrouper.append(titleText, descriptionText, dueDateText, priorityText);
    dataGrouper.className = "data-grouper";

    objectDataContainer.append(dataGrouper, removeBtn);

    appendToTaskBox(objectDataContainer);
  });
}
