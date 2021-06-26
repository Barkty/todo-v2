import React, {Component} from 'react'
import axios from 'axios'
import './styles.css'


class Login extends Component {
    constructor(props){
	super(props)

	this.state = {
	    name: '',
	    password: ''
	}

	changeHandler = e => {
	    this.setState(e.target.value)
	}

	submitHandler = (e) => {
	    e.preventDefault()
	    alert(this.state)
	    axios.post('https://user-manager-three.vercel.app/api/')
	}
    }
 
    return(
     <div className='form-div mt-5'>
         <form className='form-signin m-5' onSubmit={this.submitHandler}>
          <h1 className="h3 mb-3 text-center font-weight-normal">Login</h1>
            <label className="sr-only">Username</label>
             <input type='email' name='name' value={this.state.name} className='form-control mb-4' placeholder='Enter email' onChange={this.changeHandler}/>
            <label >Password</label>
             <input type='password' className='form-control' name='password' value={this.state.password} placeholder='********' onChange={this.changeHandler}/>
            <button className="btn btn-lg btn-success btn-block mt-3" type="submit">Login</button>
         </form>
     </div>
 );   
}

export default Login
