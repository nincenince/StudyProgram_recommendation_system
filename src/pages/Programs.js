import React, { Component } from 'react';
// import ProgramsList from "../ProgramsList";
import {ProgramsList} from "../ProgramsList.js";
import { Col,Row, Container , Image, Jumbotron, Button} from "react-bootstrap";

import "./Programs.css"

class Programs extends Component {
	render() {
		return (
			// <div className="container">
			<Container>
                {
					{ProgramsList}.ProgramsList.map((program, i) => {
						return (
							<div key={i} >
								<Row className = "ProgramsList-box" >
									<a href={program.url} >
                                        <img src={program.ProgramLogo} height="200"  alt={program.ProgramName} />
									</a>
									<div>
										<Col>
											<a href={program.url}>{program.ProgramName}</a>
										</Col>
											{program.ProgramDescription.map(function (role, i) { 
												return <div key={i}>
													<p>{role.description}</p>
												</div>
											})}
									</div>
								</Row>
								{/* </div> */}
							</div>
						);
					})
				}
			</Container>
            // </div>
        );
    }
} 
export default Programs;