import "./index.css";
import createProjectBar from "../components/projectSection/createProjectBar";
import appendToMain from "./appendToMainSection";
import createTaskSection from "../components/task/createTaskSection";
import createTaskDivider from "../components/task/createTaskDivider";
import showProjects from "../components/projectSection/showProjects";
import { getLocalStorageValues } from "../components/projectSection/project";

getLocalStorageValues();
appendToMain(createProjectBar());
showProjects();
appendToMain(createTaskSection());
createTaskDivider();
