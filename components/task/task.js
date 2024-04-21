let taskObjList = [];
export default class Task {
  constructor(title, description, dueDate, priority, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export function deleteTaskObjFromList(index) {
  taskObjList.splice(index, 1);
}

export function appendTaskObjToList(object) {
  taskObjList.push(object);
}

export function getTaskObjList() {
  return taskObjList;
}
