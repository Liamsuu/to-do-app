import Task from "./task";
import { appendTaskObjToList } from "./task";
import { getTaskObjList } from "./task";
import appendToTaskBox from "./appendToTaskBox";

export default function appendFormData() {
  const form = document.querySelector("#add-task-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // just stops page refreshing.

    const titleData = document.querySelector("#title").value;
    const descData = document.querySelector("#description").value;
    const dueDateData = document.querySelector("#duedate").value;
    const priorityData = document.querySelector("#priorities").value;
    let id = getTaskObjList().length;
    appendTaskObjToList(
      new Task(titleData, descData, dueDateData, priorityData, id)
    );

    id = getTaskObjList().length - 1;
    const taskDiv = document.createElement("div");
    taskDiv.id = id;
    taskDiv.className = "task-data-div";
    // grab all data from object and append it to taskdiv as paragraphs or something.
    const titlePara = document.createElement("p");
    titlePara.textContent = `Title: ${getTaskObjList()[id].title}`;
    const desc = document.createElement("p");
    desc.textContent = `Description: ${getTaskObjList()[id].description}`;
    const duedate = document.createElement("p");
    duedate.textContent = `Due Date: ${getTaskObjList()[id].duedate}`;
    const priority = document.createElement("p");
    priority.textContent = `Priority: ${getTaskObjList()[id].priority}`;
    taskDiv.append(titlePara, desc, duedate, priority);
    appendToTaskBox(taskDiv);
  });
}
