import Project from "./project";
import { appendProjectObjToArr } from "./project";
import showProjects from "./showProjects";

export default function createProjectBar() {
  // create the project bar. Inside create a button that creates new projects. Essentially just write a method
  // that creates new projects and appends it to a list of project objects. Much like the task object.

  const projectBar = document.createElement("div");
  projectBar.id = "side-nav"; // this is what is is called in the CSS, might change later.
  projectBar.setAttribute("style", "overflow-y:auto");

  const addProjectBtn = document.createElement("button");
  addProjectBtn.textContent = "Add Project";
  addProjectBtn.id = "add-project-btn";
  addProjectBtn.onclick = function () {
    appendProjectObjToArr(new Project("Untitled Project"));
    showProjects();
  };
  projectBar.appendChild(addProjectBtn);

  const starterProject = new Project("Untitled Project");
  appendProjectObjToArr(starterProject);
  return projectBar;
}
