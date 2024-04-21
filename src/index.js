import "./index.css";
import createProjectBar from "../components/projectSection/createProjectBar";
import appendToMain from "./appendToMainSection";
import createTaskSection from "../components/task/createTaskSection";
import createTaskDivider from "../components/task/createTaskDivider";
import showProjects from "../components/projectSection/showProjects";

appendToMain(createProjectBar());
showProjects(); // this is just here because the project section has an initial project
appendToMain(createTaskSection());
createTaskDivider();
