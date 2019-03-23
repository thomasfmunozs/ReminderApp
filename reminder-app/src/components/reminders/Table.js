import React from 'react'
import './style.css'

const RemindersTable = ({data, updateReminder, deleteReminder}) => {
  return (
    <div className="listWrapper">
	   <ul className="taskList">
		  {data.allReminders.map((reminder) => {
		    return(
		      <li className="task" key={reminder.id}>
            <input className="taskCheckbox" type="checkbox"
              checked={reminder.completed}
              onChange={(e) => updateReminder(reminder.id, !reminder.completed)} />
      			<label className="taskLabel">{reminder.title}</label>
            <span className="deadline">{`   Due: ${reminder.deadline}`}</span>
            <span className="deleteTaskBtn"
              onClick={(e) => deleteReminder(reminder.id)}>
              x
            </span>
		      </li>
		    )
		  })}
	   </ul>
	</div>
  )
}

export default RemindersTable
