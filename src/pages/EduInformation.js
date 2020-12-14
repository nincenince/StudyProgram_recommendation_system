import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './EduInformation.css'
import EduInfoLabel from "../EduInfoLabel"; 

class EduInformation extends Component{

  render(){


      return(
          <>
          <div>
             
             <h1 className = "navbar-logo">
             <i className = "fas fa-graduation-cap"></i>
                 <p className= "navbar-p">Study Program</p><p className="navbar-p">Recommendation</p><p className="navbar-p">System
             </p></h1>
            
             <h1 className= "Edu-header">Edit Information</h1>
             <div>

        <ul>
          <div className= "edu-box">
                {
                  EduInfoLabel.EduInfo.map((Info) => {
                    return (
                      <div className= "edu-input-box" >
                        <h4 className= "edu-info-label" >{Info.TestName}</h4>
                        <ul>
                          {
                            Info.ScoreList.map((InfoDetail) => {
                              return (
                                <select className="edu-info" >
                                    <option hidden value="">select score</option>
                                    <option>-</option>
                                    <option value="300">300</option>
                                    <option value="400">400</option>
                                    <option value="500">500</option>
                                    <option value="600">600</option>
                                </select>
                              );
                            })
                          }
                        </ul>
                      </div>
                    );
                  })
                } 
            </div>

              </ul>


{/*         
             <Link to="/Test">
                <button className="Edu-back-button">
                  Back
                </button>
                </Link> */}
           

              <Link to="/Test">
                <button className="Edu-done-button">
                  Done
                </button>
                </Link>



             </div>

          </div>
          </>
      )
  }
}

export default EduInformation;
