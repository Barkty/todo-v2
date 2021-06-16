import React from 'react'
import './styles.css'


const Login = () => {
 return(
     <div className='form-div mt-5'>
         <form className='form-signin m-5'>
          <h1 className="h3 mb-3 text-center font-weight-normal">Login</h1>
            <label className="sr-only">Username</label>
            <input type='email' className='form-control mb-4' placeholder='Enter email'/>
            <label >Password</label>
            <input type='password' className='form-control' placeholder='********'/>
            <button className="btn btn-lg btn-success btn-block mt-3" type="submit">Login</button>
         </form>
     </div>
 );   
}

export default Login