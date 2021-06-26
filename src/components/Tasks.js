import React from 'react';
import Form from './Form';
import ToDoList from './ToDoList' 

const Tasks = () => {
    return(
        <div className='mt-5'>
            <Form />
            <ToDoList />
        </div>
    )
}

export default Tasks
