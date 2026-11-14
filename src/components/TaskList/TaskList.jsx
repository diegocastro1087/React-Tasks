import "./TaskList.css";
import PropTypes from "prop-types";
import TaskItem from "./taskitem/taskitem";
import plusIcon from "../../img/plus-icon.svg";

export default function TaskList({ title, onAddTask, tasks, onUpdateTask, onDeleteTask }) {
  const addTask = () => {
    onAddTask("Nova tarefa", title);
  };

  const taskfiltered = tasks.filter(task => task.state === title)

  return (
    <div className="tasklist">
      <div className={"title"}>{title}</div>
      <div className="content">
        {taskfiltered.map((task) => {

          return (
            <TaskItem
              key={task.id}
              taskId={task.id}
              taskTitle={task.title}
              taskState={task.state}
              onUpdateTask={onUpdateTask}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {taskfiltered.length === 0 && <div className="empty-list">Lista Vazia</div>}
      </div>
      <button onClick={addTask}>
        <img src={plusIcon} />
        Adicionar tarefa
      </button>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
