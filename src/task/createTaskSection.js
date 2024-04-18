export default function createTaskSection() {
  const taskDiv = document.createElement("div");
  const taskBox = document.createElement("div");
  taskDiv.appendChild(taskBox);
  taskDiv.id = "task-section";
  taskBox.id = "task-box";
  return taskDiv;
}
