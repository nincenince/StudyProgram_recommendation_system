import React from 'react';
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
import Admin_prog from './pages/Admin_prog'
import LoadingRec from './pages/LoadingRec'
import LoadingPer from './pages/LoadingPer'
import SelectProgram from './pages/SelectProgram'
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
        <IncludeNav path='/EduInformation' component={EduInformation} />
        <IncludeNav path ='/RecResult' component={RecResult} />
        <IncludeNav path='/Dashboard' component={Dashboard}/>
        <IncludeNav path='/AccInfo' component={AccInfo}/>
        <IncludeNav path='/PerTest' component={PerTest}/>
        <IncludeNav path='/PerResult' component={PerResult}/>
        <NoNav path='/ForgotPassword' component={ForgotPassword}/>
        <NoNav path='/Loading' component={Loading}/>
        <NoNav path='/LoadingRec' component={LoadingRec}/>
        <NoNav path='/LoadingPer' component={LoadingPer}/>
        <IncludeNav path='/Admin_prog' component={Admin_prog}/>
        <IncludeNav path='/SelectProgram' component={SelectProgram}/>
      </Switch>
    </Router>

  )



export default App;

