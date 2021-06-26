import './App.css';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login'
//import Register from './components/Register';
<<<<<<< HEAD
//import Tasks from './components/Tasks';

function App() {
    return (
      <Router>
	  <Switch>
	  <Route path='/login'>
	    <Login />
          </Route>
	  <Route path='/register'>
	   <Register />
          </Route>
	  <Route path='/tasks'>
	   <Tasks />
         </Route>
         </Switch>
         </Router>
  );
}

export default App;
