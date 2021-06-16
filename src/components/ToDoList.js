import React from 'react'
import ToDoItem from './ToDoItem'

const taskList = [
    {
        id: 0,
        task: 'Lorem ipsum dum'
    },
    {
        id: 1,
        task: 'Lorem ipsum dum'
    },
    {
        id: 2,
        task: 'Lorem ipsum dum'
    },
    {
        id: 3,
        task: 'Lorem ipsum dum'
    },
    {
        id: 4,
        task: 'Lorem ipsum dum'
    },
    {
        id: 5,
        task: 'Lorem ipsum dum'
    }
]

const ToDoList = () => {
    return (
        <ul>
            {taskList.map(task => <ToDoItem key={task.id} task={task}/>)}
        </ul>
    )
}
export default ToDoList