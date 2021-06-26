import {useState} from 'react'
import axios from 'axios'
import './styles.css'

function Register() {
    
    const [name, setName] = useState()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();

<<<<<<< HEAD
   const submitHandler = e => {
       e.preventDefault();

       if (!(name && email && password)) {
	   return alert('Fill out the name, email and password fields');
       }
	   if (password !== repeatPassword) {
	       return alert('Passwords do not match!')
	   }
       
       axios.post('https://user-manager-three.vercel.app/api/', {name, email, password})
	    .then(response => {
		console.log(response.data);
	    } )
	    .catch(error => {
		console.log(error);
	    })
    };

    
 return( 

     <div className='form-div mt-5'>
         <form className='form-signin m-5' onSubmit={submitHandler}>
          <h1 className="h3 mb-3 text-center font-weight-normal">Register</h1>
            <label className="sr-only">Username</label>
             <input type='text' className='form-control mb-4' name='name' value={name} placeholder='Enter username' onChange={(e) => {setName(e.target.value)}}/>
            <label className="sr-only">Email address</label>
             <input type='email' className='form-control mb-4' name='email' value={email} placeholder='Enter email' onChange={(e) => {setEmail(e.target.value)}}/>
            <label className="sr-only">Password</label>
             <input type='password' className='form-control mb-4' name='password' value={password} placeholder='Enter password' onChange={(e) => {setPassword(e.target.value)}}/>
            <label className="sr-only">Confirm Password</label>
             <input type='password' className='form-control' name='confirm' value={repeatPassword} placeholder='Confirm password' onChange={(e) => {setRepeatPassword(e.target.value)}}/>
            <button className="btn btn-lg btn-success btn-block mt-3" type="submit">Register</button>
         </form>
    </div>
 )   
}

export default Register;
