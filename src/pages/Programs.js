import React from 'react';
import {DropdownItem} from './ProgramLists'
import './ProgramsDropdown.css'

  
    class Programs extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            program: "",
            career: ""
        };
    
        this.handleChange = this.handleChange.bind(this);     
        }

        handleChange(e) {
        console.log(e.target.value);

        this.setState({
            program: e.target.value
            })
       
        }
        render() {
            let showw=" "
            let careers = " "
            if(this.state.program==="Faculty1"){
                showw = <div className="program-list">program1</div>
                careers = <div className ="program-list2">career1</div>
        }

    return (
            
        <div>
            <div id="dropdown">
                <div >
                    <select 
                    placeholder='Select...'
                    className="dropdown-menu"
                     value={this.state.program}  
                     onChange={this.handleChange}
                    
                     >
                    <option value='' disabled>Select Study Program...</option>
                    {DropdownItem.map((option) => 
                    
                    (
                        <option 
                        placeholder='Select second value...'
                         >
                        {option.program}
                        </option>
                    ))}
                    </select>
                </div>
            </div>
                    
            <p>{showw}</p>
            <p>{careers}</p>

        </div>
                )
            }
        
    }
  


export default Programs;
// export default withStyles(styles)(Programs);