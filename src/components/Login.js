import {useState} from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios'
import './styles.css'


function Login () {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

<<<<<<< HEAD
    const submitHandler = (e) => {
	    e.preventDefault();
	    axios.post('https://user-manager-three.vercel.app/api', {email, password})
		.then((res) => {
		    console.log(res.data);
		})
		.catch((err) => {
		    console.log(err)
		});
    };
    return (
>>>>>>> 3dc611c8e1bd7190f71daef053375a67fa60471d
     <div className='form-div mt-5'>
         <form className='form-signin m-5' onSubmit={submitHandler}>
          <h1 className="h3 mb-3 text-center font-weight-normal">Login</h1>
            <label className="sr-only">Username</label>
            <input type='email' name='email' value={email} className='form-control mb-4' placeholder='Enter email' onChange={(e) => {setEmail(e.target.value)}}/>
            <label>Password</label>
             <input type='password' className='form-control' name='password' value={password} placeholder='Enter password' onChange={(e) => {setPassword(e.target.value)}}/>
            <button className="btn btn-lg btn-success btn-block mt-3" type="submit">Login</button>
	    <p>Do not have an account? <Link to='/register'>Register</Link></p>
	</form>
     </div>
=======
 );   
}

export default Login;
