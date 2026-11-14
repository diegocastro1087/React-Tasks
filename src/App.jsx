import "./styles.css";
import React, { useState, useRef } from "react";
import NavBar from "./components/header/navbar";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, settasks] = useState([]);

  /*
  const task = [(id = 1), (title = "titulo"), (state = "pendente")];
  */

  //Cria o id da task com base no ultimo taskid, progressivo.
  const idTask = useRef(0);
  const generateId = () => {
    idTask.current = idTask.current + 1;
    return idTask.current;
  };

  function addTask(title, state) {
    const newTask = { id: generateId(), title, state };

    settasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  }

  const deleteTask = (id) => {
    settasks((existingtasks) => {
      return existingtasks.filter((task) => task.id !== id)
    })
  }

  const updateTask = (id, title, state) => {
    settasks((existingtasks) => {
      return existingtasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state }

        } else {
          return task
        }
      })
    })
  }

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <TaskList title="Pendente" onAddTask={addTask} tasks={tasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
        <TaskList title="Em Andamento" onAddTask={addTask} tasks={tasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
        <TaskList title="Concluida" onAddTask={addTask} tasks={tasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
