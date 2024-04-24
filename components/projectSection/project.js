import showProjects from "./showProjects";
import Task from "../task/task";

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
  console.log(projectObjArrLocalStorage);
  localStorage.setItem("projectArray", projectObjArrLocalStorage);
}

export function getLocalStorageValues() {
  /** Essentially this will be the first thing called to check if any saves have been done.
   * it will check the set item above for the value of the project array which is saved when something changes each time(clicks to add and remove stuff, etc.)
   * it will turn the string aray values into an object, so the job i needed to do was turn them back into project objects,
   * but before that it needs to go through each projects tasks and also turn them back into task objects from unnamed objects. To do that it needs to iterate through them and get each of their values.
   */

  let projects;
  let parsedProjects;
  projects = localStorage.getItem("projectArray");
  parsedProjects = JSON.parse(projects);
  console.log(parsedProjects);
  let tasks = [];
  let serializedProjects = [];
  if (parsedProjects !== null) {
    parsedProjects.forEach((projectObject) => {
      tasks.push([]);
      projectObject.projectsTasksArr.forEach((taskObject) => {
        tasks[parsedProjects.indexOf(projectObject)].push(
          new Task(
            taskObject.title,
            taskObject.description,
            taskObject.dueDate,
            taskObject.priority
          )
        );
      });
      serializedProjects.push(new Project(projectObject.name));
    });
    serializedProjects.forEach((project) => {
      project.projectsTasksArr = tasks[serializedProjects.indexOf(project)];
      projectObjArr.push(project);
    });
    console.log(getProjectObjList());
  }
}
