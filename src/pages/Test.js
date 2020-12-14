import React, { Component } from 'react';
import {Link } from "react-router-dom";

import './Test.css'
import EducationInfo from "../EducationInfo"; 
import PersonanlityInfo from "../PersonalityInfo";

class Test extends Component{



  render(){


      return(
          <>
              <h1 className= "rec-header">Get ready to discover your programs</h1>

              <div class="rec-education-info">           
               <h2 className="rec-educationalInformation">Education Information </h2>
          <br></br>

      <ul>
          <div>
                {
                  EducationInfo.EduInfo.map((Info) => {
                    return (
                      <div>
                        <h4 className= "rec-EduName" >{Info.TestName}</h4>
                        <ul>
                          {
                            Info.ScoreList.map((InfoDetail) => {
                              return (
                                  <p className= "rec-EduInfo" >
                                    {InfoDetail.Score}
                                  </p>
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


               <Link to="/EduInformation">
                <button className="rec-edit-button">
                  Edit Information
                </button>
                </Link>
           </div>
                

              <div class="rec-personality">
              <h2 className="rec-personalityInformation">Big 5 Personality Label</h2>
              <br></br>
              <ul>

          <div>
                {
                  PersonanlityInfo.PersonalInfo.map((PerInfo) => {
                    return (
                      <div>
                        <p className= "rec-PerName"  >{PerInfo.Personality}</p>
                          {
                            PerInfo.PersonalityList.map((PerInfoDetail) => {
                              return (
                                <p className="rec-PerScore">
                                    {PerInfoDetail.PerScore}
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

              <Link to="/Test">
                <button className="rec-retake-button">
                  Retake Test
                </button>
                </Link>
              </div>

              <Link to="/RecommendProg">
                <button className="rec-programs-button">
                  Recommend Programs
                </button>
                </Link>
                  
             

          </>
      )
  }
}

export default Test;
