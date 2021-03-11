import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import About from './pages/About';
import RecProgram from './pages/RecProgram';
import Programs from './pages/Programs';
import Feedbacks from './pages/Feedbacks';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import './App.css';
import EduInformation from './pages/EduInformation';
import RecResult from './pages/RecResult'
import Dashboard from './pages/Dashboard'
import AccInfo from './pages/AccInfo'
import PerTest from './pages/PerTest'
import PerResult from './pages/PerResult'
import ForgotPassword from './pages/ForgotPassword'
import Loading from './pages/Loading'
import 'bootstrap/dist/css/bootstrap.min.css';

export const IncludeNav = ({ component: Component , ...rest})=>{
  return (
      <Route {...rest}  component={(props)=>(
          <div>
              <Navbar /> {/* HEADER ALWAYS VISIBLE */}
              <Component {...props} />
          </div>
      )}
      />
  )
}
export const NoNav = ({ component: Component, ...rest }) => {
  return (
      <Route
          {...rest}
          component={(props)=> (<Component {...props} />)}
      />
  );
};

const App = () => (
    <Router>
     {/* <Navbar/> */}
      <Switch>
  
        <IncludeNav path='/'  exact component={About} />
        <IncludeNav path='/RecProgram' component={RecProgram}/>
        <IncludeNav path='/Programs' component={Programs} />
        <IncludeNav path='/Feedbacks' component={Feedbacks} />
        <IncludeNav path='/SignUp' component={SignUp} />
        <IncludeNav path='/SignIn' component={SignIn} />
        <NoNav path='/EduInformation' component={EduInformation} />
        <NoNav path ='/RecResult' component={RecResult} />
        <NoNav path='/Dashboard' component={Dashboard}/>
        <NoNav path='/AccInfo' component={AccInfo}/>
        <NoNav path='/PerTest' component={PerTest}/>
        <NoNav path='/PerResult' component={PerResult}/>
        <NoNav path='/ForgotPassword' component={ForgotPassword}/>
        <NoNav path='/Loading' component={Loading}/>



      </Switch>
    </Router>

  )



export default App;

