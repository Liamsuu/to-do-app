let projectObjArr = [];

export default class Project {
  constructor(name) {
    this.name = name;
    this.projectsTasksArr = [];
  }

  appendToDoTasksToProjectArr(object) {
    this.projectsTasksArr.push(object);
  }
}

export function appendProjectObjToArr(projectObj) {
  projectObjArr.push(projectObj);
}

export function removeObjFromProjectArr(index) {
  projectObjArr.splice(index, 1);
}

export function getProjectObjList() {
  return projectObjArr;
}
