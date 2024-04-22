import { getProjectObjList } from "./project";
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
      showProjects();
    };

    const projectRemoveBtn = new Image();
    projectRemoveBtn.src = deleteIcon;
    projectRemoveBtn.className = "project-remove-icon";
    projectRemoveBtn.onclick = function (event) {
      event.stopPropagation(); // will stop div also being clicked.
      removeObjFromProjectArr(Number(projectsContainer.id));
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

/**Will have to find a way to save the state of the tasks(they're just objects remember).
 * Likely will have to have a seperate array of Task objects for each project and link
 * them by the id number of the project and remove that task list when project is deleted.
 * likely need a array of array lists than just array of objects.
 * So that means the array will hold another array inside of it, which will include the task objects
 * as normal. The array inside the array index will correspond the id so can easily be deleted.
 *
 * MAKE A GIT BRANCH TO WORK ON THIS NEW FEATURE AS I WILL HAVE TO REFACTOR ALOT!!!
 */

// try onclick, create task object inside project object as an array of object values if not there already, otherwise load them
// by iterating. Reload them as done before.
