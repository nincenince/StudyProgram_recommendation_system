import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './RecommendProg.css';
import RecommendPrograms from "../RecommendPrograms";

class RecommendProg extends Component{



  render(){


      return(
          <>
            <div>
             
             <h1 className = "navbar-logo">
             <i className = "fas fa-graduation-cap"></i>
                 <p className= "navbar-p">Study Program</p><p className="navbar-p">Recommendation</p><p className="navbar-p">System
             </p></h1>
            
             <h1 className= "recprog-header">Recommend Programs Results</h1>
            
            
           </div>
                

    <div class="recprog-box">
        <h2 className="recprog-result">Possible Programs</h2>
            <br></br>
            <ul>

          <div>
                {
                  RecommendPrograms.RecommendProgList.map((RecInfo) => {
                    return (
                      <div>
                        <p className= "recprog-proglist"  >{RecInfo.Programs}</p>
                          {
                            RecInfo.ProgramList.map((RecDetail) => {
                              return (
                                <p className="recprog-recscore">
                                    {RecDetail.RecProgScore}
                                </p>
                              );
                            }) 
                           
                         }
                        
              

                      </div>
                    );
                  })
                } 
            </div>

              </ul>

              
              </div>

              <Link to="/Test">
                <button className="recprog-done-button">
                  Done
                </button>
                </Link>
                  
             

          </>
      )
  }
}

export default RecommendProg;


