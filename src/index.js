import "./index.css";
import createProjectBar from "./projectSection/createProjectBar";
import appendToMain from "./appendToMainSection";
import createTaskSection from "./task/createTaskSection";

appendToMain(createProjectBar());
appendToMain(createTaskSection()); // create todosection and put in here.
