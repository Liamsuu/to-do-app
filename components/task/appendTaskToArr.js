import Task from "./task";
import { appendTaskObjToList } from "./task";

export default function appendTaskToArr() {
  const form = document.querySelector("#add-task-form");

  const titleData = document.querySelector("#title").value;
  const descData = document.querySelector("#description").value;
  const dueDateData = document.querySelector("input[type='date']").value;
  const priorityData = document.querySelector("#priorities").value;
  appendTaskObjToList(new Task(titleData, descData, dueDateData, priorityData));
}
