import React from 'react';
import './Form.css';

const form = (props) => {
    return(
        <form onSubmit={props.submitted} className="Form" >
              <input type="text"  placeholder="First Name" id="firstname" value={props.firstname} onChange={props.changed}></input>
              <input type="text" placeholder="Last Name"  id="lastname" value={props.lastname} onChange={props.changed}></input>
              <input type="submit" value="Submit" ></input>
        </form>
    );
}


export default form;