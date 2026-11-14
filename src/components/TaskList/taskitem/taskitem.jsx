import React, { useState } from "react";
import propTypes from "prop-types";
import "./taskitem.css"

export default function TaskItem({ taskId, taskTitle, taskState, onUpdateTask, onDeleteTask }) {
  const [isEditing, SetIsEditing] = useState(false)
  const [editableTitle, SetEditableTitle] = useState(taskTitle)

  const onChangeTitle = (event) => {
    const newTitle = event.target.value
    SetEditableTitle(newTitle)
    onUpdateTask(taskId, newTitle, taskState)
  }

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      if (editableTitle.length === 0) {
        onDeleteTask(taskId)
      } else {
        SetIsEditing(false)
      }

    }
  }

  const onTaskStateChange = (event) => {
    onUpdateTask(taskId, taskTitle, event.target.value)
  }

  if (isEditing) {
    return <input className="onEditTitle" type="text" value={editableTitle} onChange={onChangeTitle} onKeyPress={onKeyPress} />
  } else {
    return (
      <div className="Task">
        <div className="taskTitle" onClick={(e) => SetIsEditing(true)}>{editableTitle}</div>
        <select onChange={onTaskStateChange} value={taskState}>
          <option value="Pendente">Pendente</option>
          <option value="Em Andamento">Em Andamento</option>
          <option value="Concluida">Concluida</option>
        </select>
      </div>
    )
  }


}

TaskItem.propTypes = {
  taskId: propTypes.number.isRequired,
  taskTitle: propTypes.string.isRequired,
  taskState: propTypes.string.isRequired,
};
