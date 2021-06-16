import React, { Component, Fragment } from 'react';

class Form extends Component {
    constructor(props) {
	super(props)

	this.state = {
	    task: ""
	}
    }

    //Handle Task change
    taskChange = (e) => {
	this.setState({
	    task: e.target.value
	})
    }
    
    submitHandler = (e) => {
	//Alert the task value
	alert(`${this.state.task}`)
    }

    
    render() {
    return(
	<div className="m-5 p-5 bg-primary">
	<form onSubmit={this.submitHandler} className=''>
	    <input type="text" placeholder="Enter task" value={this.state.task} onChange={this.taskChange}/>
	    <button type='submit' className="bg-secondary  rounded ">Add Task</button>
	</form>
	    </div>
    )
    }
}

export default Form 
