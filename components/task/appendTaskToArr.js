import Task from "./task";
import { appendTaskObjToList } from "./task";
import { getTaskObjList } from "./task";
import appendToTaskBox from "./appendToTaskBox";

export default function appendTaskToArr() {
  const form = document.querySelector("#add-task-form");
  // form.addEventListener("submit", (event) => {
  // event.preventDefault(); // just stops page refreshing.

  const titleData = document.querySelector("#title").value;
  const descData = document.querySelector("#description").value;
  const dueDateData = document.querySelector("input[type='date']").value;
  const priorityData = document.querySelector("#priorities").value;
  appendTaskObjToList(new Task(titleData, descData, dueDateData, priorityData));

  // });
}

// tomorrow, change this so instead of directly appending, use a method to iterate through a list of
// Task objects, and append the details in them. That way, when a Object is deleted from that list, it should no longer
// appear in the area of the website that shows the Tasks.
