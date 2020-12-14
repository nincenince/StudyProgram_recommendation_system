import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import About from './pages/About';
import Test from './pages/Test';
import Programs from './pages/Programs';
import Personality from './pages/Personality';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import './App.css';
import EduInformation from './pages/EduInformation';
import RecommendProg from './pages/RecommendProg'



// 2

// function App() {
//   return (
//     <Router>
//      <Navbar/>
//       <Switch>
  
//         <Route path='/'  exact component={About} />
//         <Route path='/Test' component={Test}/>
//         <Route path='/Programs' component={Programs} />
//         <Route path='/Personality' component={Personality} />
//         <Route path='/SignUp' component={SignUp} />
//         <Route path='/SignIn' component={SignIn} />
//         {/* <Route path='/EduInformation' component={EduInformation} /> */}
//       </Switch>
//     </Router>

    
//   )

// }

// export default App;



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
        <IncludeNav path='/Test' component={Test}/>
        <IncludeNav path='/Programs' component={Programs} />
        <IncludeNav path='/Personality' component={Personality} />
        <IncludeNav path='/SignUp' component={SignUp} />
        <IncludeNav path='/SignIn' component={SignIn} />
        <NoNav path='/EduInformation' component={EduInformation} />
        <NoNav path ='/RecommendProg' component={RecommendProg} />
      </Switch>
    </Router>

  )



export default App;

