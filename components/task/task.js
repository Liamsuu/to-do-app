import { getProjectObjList } from "../projectSection/project";
export default class Task {
  constructor(title, description, dueDate, priority, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export function deleteTaskObjFromList(projectObj, index) {
  projectObj.projectsTasksArr.splice(index, 1);
}

export function appendTaskObjToList(taskObj) {
  const selectedProject = document.querySelector(".selected-project");
  const selectedProjectId = selectedProject.id;
  getProjectObjList()[Number(selectedProjectId)].appendToDoTasksToProjectArr(
    taskObj
  );
}

export function getTaskObjList() {
  const selectedProject = document.querySelector(".selected-project");
  const selectedProjectId = selectedProject.id;
  return getProjectObjList()[Number(selectedProjectId)].projectsTasksArr;
}
