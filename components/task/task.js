let taskObjList = [];
export default class Task {
  constructor(title, description, dueDate, priority, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export function deleteTaskObj(taskObj) {
  taskObj = undefined;
}

export function appendTaskObjToList(object) {
  taskObjList.push(object);
}

export function getTaskObjList() {
  return taskObjList;
}
