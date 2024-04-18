import "./index.css";
import createProjectBar from "../components/projectSection/createProjectBar";
import appendToMain from "./appendToMainSection";
import createTaskSection from "../components/task/createTaskSection";
import Task from "../components/task/task";
import { deleteTaskObj } from "../components/task/task";

appendToMain(createProjectBar());
appendToMain(createTaskSection()); // create todosection and put in here.
const newTask = new Task();
