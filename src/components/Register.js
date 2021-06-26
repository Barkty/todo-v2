import React, {Component} from 'react'
import axios from 'axios'
import './styles.css'

class Register extends Component{
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
	    email: '',
	    password: '',
	    confirm: ''
        }
    }
    
    
    
    
    //const [userId, setUserId] = useState('')
    // const [username, setUserName] = useState('')
    //const [email, setEmail] = useState('')
    //const [password, setPassword] = useState('')
    //const [confirm, setConfirm] = useState('')

    changeHandler = e => {
	this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        alert(this.state)
	axios.post('https://user-manager-three.vercel.app/api/', this.state)
	    .then(response => {
		console.log(response)
	    } )
	    .catch(error => {
		console.log(error)
	    })
    };

    registerForm = () => {
        if(!(userId || password || confirm || email))  {
            alert('Please register an account')
            return;
        }
    };
    
    //Concatenate the user info
    //const registeredUser = user.concat({userId, email, password})
   // newUser(registeredUser);

 return( 
    //const {userId, email, password, confirm} = this.state

     <div className='form-div mt-5'>
         <form className='form-signin m-5' onSubmit={this.submitHandler}>
          <h1 className="h3 mb-3 text-center font-weight-normal">Register</h1>
            <label className="sr-only">Username</label>
             <input type='text' className='form-control mb-4' name='userId' value={this.userId} placeholder='Enter username' onChange={this.changeHandler}/>
            <label className="sr-only">Email address</label>
             <input type='email' className='form-control mb-4' name='email' value={this.email} placeholder='Enter email' onChange={this.changeHandler}/>
            <label className="sr-only">Password</label>
            <input type='password' className='form-control mb-4' name='password' value={this.password} placeholder='Enter password' onChange={this.changeHandler}/>
            <label className="sr-only">Confirm Password</label>
            <input type='password' className='form-control' name='confirm' value={this.confirm} placeholder='********' onChange={this.changeHandler}/>
            <button className="btn btn-lg btn-success btn-block mt-3" type="submit" onClick={this.registerForm}>Register</button>
            <p>Have an account? <a href='./Login.js'>Login</a></p>
         </form>
    </div>
 )   
}

export default Register
