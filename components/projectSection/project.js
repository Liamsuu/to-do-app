import showProjects from "./showProjects";

let projectObjArr = [];

let projectObjArrLocalStorage;
// to store all projects with its respective tasks when browser is closed
// use web storage and on each start of program in index run some method that grabs web storage JSON
// and with that data append it to the array above.

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

export function setProjectObjLocalStorage() {
  projectObjArrLocalStorage = JSON.stringify(projectObjArr);
  localStorage.setItem("array", projectObjArrLocalStorage);
}

export function getLocalStorageValues() {
  const arrString = localStorage.getItem("array");
  const parsedArr = JSON.parse(arrString);
  if (parsedArr !== null) {
    projectObjArr = parsedArr;
    showProjects();
  }
}
