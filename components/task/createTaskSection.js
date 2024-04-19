export default function createTaskSection() {
  // just used for creating the box that will hold all the tasks, and a div that will hold that is used for placement in the site.
  const taskDiv = document.createElement("div");
  const taskBox = document.createElement("div");
  taskDiv.appendChild(taskBox);
  taskDiv.id = "task-section";
  taskBox.id = "task-box";
  return taskDiv;
}
