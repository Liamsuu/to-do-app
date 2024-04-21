import { getProjectObjList } from "./project";
import { removeObjFromProjectArr } from "./project";

export default function showProjects() {
  const projectList = getProjectObjList();

  const addProjectBtn = document.querySelector("#add-project-btn");
  while (addProjectBtn.nextSibling !== null) {
    addProjectBtn.nextSibling.remove();
  }
  projectList.forEach((object) => {
    const projectsContainer = document.createElement("div");
    projectsContainer.className = "projects-container";
    projectsContainer.id = projectList.indexOf(object); // adding a zero upfront of the number to not give them the same id format as the tasks containers.

    const projectName = document.createElement("p");
    projectName.textContent = object.name;

    const projectRemoveBtn = document.createElement("button");
    projectRemoveBtn.textContent = "Remove";
    projectRemoveBtn.onclick = function () {
      removeObjFromProjectArr(Number(projectsContainer.id));
      showProjects();
    };

    projectsContainer.append(projectName, projectRemoveBtn);

    const projectBar = document.querySelector("#side-nav");
    projectBar.appendChild(projectsContainer);
  });
}
