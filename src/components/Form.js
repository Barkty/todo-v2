import React, { Fragment, useState } from 'react';
import Header from './Header'
import './styles.css';

const Form = () => {
	const [task, setTask] = useState('')


	return (
	<Fragment>
			<Header />
			<div className="p-3 bg-primary">
			<form onSubmit={(e) => {
				e.preventDefault();
				alert(`${task}`)
				}}>
				<div className=''>
					<input type="text" placeholder="Enter task" value={task} onChange={(e) => {setTask(e.target.value)}} className="p-2 rounded "/>
					<button type='submit' className="btn btn-danger btn-md ml-2" onClick={() => {
					if(!task) {
						alert("Please add a task");
						return;
					}
					}}>Add Task</button>
				</div>
			</form>
	</div>
	</Fragment>
)
}

export default Form 