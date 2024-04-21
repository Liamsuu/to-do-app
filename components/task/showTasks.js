import { getTaskObjList } from "./task";
import appendToTaskBox from "./appendToTaskBox";
import { deleteTaskObjFromList } from "./task";

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
    objectDataContainer.class = "task-data-div";
    objectDataContainer.id = currentObjListValues.indexOf(object);

    const titleText = document.createElement("h1");
    titleText.className = "task-headings";
    titleText.textContent = object.title;

    const descriptionText = document.createElement("p");
    descriptionText.className = "task-descriptions";
    descriptionText.textContent = object.description;

    const dueDateText = document.createElement("p");
    dueDateText.className = "task-due-dates";
    dueDateText.textContent = object.dueDate;

    const priorityText = document.createElement("p");
    priorityText.className = "task-priorities";
    priorityText.textContent = object.priority;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function () {
      const parentId = removeBtn.parentElement.id;
      deleteTaskObjFromList(Number(parentId));
      showTasks();
    };

    objectDataContainer.append(
      titleText,
      descriptionText,
      dueDateText,
      priorityText,
      removeBtn
    );

    appendToTaskBox(objectDataContainer);
  });
}
