import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import About from './pages/About';
import Test from './pages/Test';
import Programs from './pages/Programs';
import Personality from './pages/Personality';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn'
import './App.css';



function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/'  exact component={About} />
        <Route path='/Test' component={Test}/>
        <Route path='/Programs' component={Programs} />
        <Route path='/Personality' component={Personality} />
        <Route path='/SignUp' component={SignUp} />
        <Route path='/SignIn' component={SignIn} />

      </Switch>
   
    </Router>
  );
}

export default App;
