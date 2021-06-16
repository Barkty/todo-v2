import React from 'react'


const ToDoItem = ({task}) => {
    return (
        <li>
            <p>{task}</p>
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-success">Complete Task</button>
        </li>
    )
}

export default ToDoItem