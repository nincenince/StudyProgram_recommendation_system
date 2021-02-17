import React, { Component , useState} from 'react';
// import ProgramsList from "../ProgramsList";
import {ProgramsList} from "../ProgramsList.js";
import { Col,Row, Container , Image, Jumbotron, Button} from "react-bootstrap";

import  "./Programs.css"
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// class Programs extends Component {
// 	render() {
// 		return (
// 			<Container>
//                 {
// 					{ProgramsList}.ProgramsList.map((program, i) => {
// 						return (
// 							<div key={i} >
// 								<Row className = "ProgramsList-box" >
// 									<a href={program.url} >
//                                         <img src={program.ProgramLogo} height="200"  alt={program.ProgramName} />
// 									</a>
// 									<div>
// 										<Col>
// 											<a href={program.url}>{program.ProgramName}</a>
// 										</Col>
// 									</div>
// 								</Row>
// 							</div>
// 						);
// 					})
// 				}
// 			</Container>
//         );
//     }
// } 

 
function Programs() {

	
 

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(ProgramsList);
 
//   const excludeColumns = ["id"];
const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

//   const handleChange = value => {
 	// this.setState({setSearchText: value});
 	// this.setState({filterData: value});
	
//   };
 
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(ProgramsList);
    else {
      const filteredData = ProgramsList.filter(item => {
        return Object.keys(item).some(key =>
        //   excludeColumns.includes(key) ? false :
		   item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }
 
  return (
    <div className="App">

      <div  style={{ marginLeft: "20%"}}>Search: 
	  <input
        style={{}}
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />
	  </div> 

				

<Container>
        {data.map((d, i) => {
          return <div key={i} style={{ backgroundColor: d.color }}>
	<Row className = "ProgramsList-box" >
			<a href={d.url} >
            <img src={d.ProgramLogo} height="200"  alt={d.ProgramName} />
			</a>
			<Col>
			<a href={d.url}>{d.ProgramName}</a>
			</Col>
			</Row>
          </div>
		 
        }
		)}
		

        {data.length === 0 && <span>!</span>}

		</Container>
		
    </div>
  );
}
 






export default Programs;