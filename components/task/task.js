export default class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export function deleteTaskObj(taskObj) {
  taskObj = undefined;
}

export function addTask() {
  const addTaskButton = document.querySelector("#create-task-button");
  addTaskButton.onclick = displayTaskForm();
}
