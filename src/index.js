import "./index.css";
import createProjectBar from "../components/projectSection/createProjectBar";
import appendToMain from "./appendToMainSection";
import createTaskSection from "../components/task/createTaskSection";
import createTaskForm from "../components/task/createTaskForm";
import Task from "../components/task/task";
import { deleteTaskObj } from "../components/task/task";

appendToMain(createProjectBar());
appendToMain(createTaskSection());
createTaskForm();
const newTask = new Task();
