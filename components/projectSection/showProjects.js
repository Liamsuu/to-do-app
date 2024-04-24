import { getProjectObjList } from "./project";
import { setProjectObjLocalStorage } from "./project";
import { removeObjFromProjectArr } from "./project";
import changeText from "../../src/changeText";
import deleteIcon from "../images/delete.svg";
import showTasks from "../task/showTasks";

export default function showProjects() {
  const projectList = getProjectObjList();

  const addProjectBtn = document.querySelector("#add-project-btn");
  while (addProjectBtn.nextSibling !== null) {
    addProjectBtn.nextSibling.remove();
  }
  projectList.forEach((object) => {
    const projectsContainer = document.createElement("div");
    projectsContainer.className = "projects-container";
    projectsContainer.id = projectList.indexOf(object);

    const projectName = document.createElement("p");
    projectName.textContent = object.name;
    projectName.onclick = function () {
      getProjectObjList()[Number(projectsContainer.id)].name = changeText(
        projectName.textContent
      ); // when project name is clicked, prompt to enter a new one then refresh with new name.
      setProjectObjLocalStorage();
      showProjects();
    };

    const projectRemoveBtn = new Image();
    projectRemoveBtn.src = deleteIcon;
    projectRemoveBtn.className = "project-remove-icon";
    projectRemoveBtn.onclick = function (event) {
      event.stopPropagation(); // will stop div also being clicked.
      removeObjFromProjectArr(Number(projectsContainer.id));
      setProjectObjLocalStorage();
      showProjects();
    };

    projectsContainer.append(projectName, projectRemoveBtn);
    projectsContainer.onclick = function () {
      showTasks(getProjectObjList()[Number(projectsContainer.id)]);
      for (
        let child = projectBar.firstChild;
        child;
        child = child.nextSibling
      ) {
        if (child.classList.contains("selected-project")) {
          child.classList.remove("selected-project");
        }
      }
      projectsContainer.classList.add("selected-project");
    };

    const projectBar = document.querySelector("#side-nav");
    projectBar.appendChild(projectsContainer);

    // set single project as selected project.
  });
}
