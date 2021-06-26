import React, {Component} from 'react'
import axios from 'axios'
import './styles.css'

class Register extends Component{
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    
    
    
    
    //const [userId, setUserId] = useState('')
    // const [username, setUserName] = useState('')
   // const [email, setEmail] = useState('')
    //const [password, setPassword] = useState('')
    //const [confirm, setConfirm] = useState('')

    submitHandler = e => {
        e.preventDefault()
        console.log(newUser)
    };

    registerForm = () => {
        if(!(userId || password || confirm || email))  {
            alert('Please register an account')
            return
        };
    }
    
    //if(confirm !== password) {
        //alert('Password doesn\'t match')
    }

    //Concatenate the user info
    //const registeredUser = user.concat({userId, email, password})
   // newUser(registeredUser);

 return( 
    //  const {userId, username, email, password, confirm} = this.props;

     <div className='form-div mt-5'>
         <form className='form-signin m-5' onSubmit={submitHandler}>
          <h1 className="h3 mb-3 text-center font-weight-normal">Register</h1>
            <label className="sr-only">Username</label>
            <input type='text' className='form-control mb-4' name='userId' value={userId} placeholder='Enter username' onChange={(e) => {setUserId({[e.target.name]: e.target.value})}}/>
            <label className="sr-only">Email address</label>
            <input type='email' className='form-control mb-4' name='email' value={email}placeholder='Enter email' onChange={(e) => {setEmail({[e.target.name]: e.target.value})}}/>
            <label className="sr-only">Password</label>
            <input type='password' className='form-control mb-4' name='password' value={password} placeholder='Enter password' onChange={(e) => {setPassword({[e.target.name]: e.target.value})}}/>
            <label className="sr-only">Confirm Password</label>
            <input type='password' className='form-control' name='confirm' value={confirm} placeholder='********' onChange={(e) => {setConfirm({[e.target.name]: e.target.value})}}/>
            <button className="btn btn-lg btn-success btn-block mt-3" type="submit" onClick={registerForm}>Register</button>
            <p>Have an account? <a href='./Login.js'>Login</a></p>
         </form>
     </div>
 );   
}

export default Register