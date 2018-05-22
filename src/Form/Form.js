import React from 'react';

const form = (props) => {
    return(
        <div>
              <input type="text"  placeholder="First Name" id="firstname" value={props.firstname} onChange={props.changed}></input>
              <input type="text" placeholder="Last Name"  id="lastname" value={props.lastname} onChange={props.changed}></input>
              <input type="submit" value="Submit" ></input>
        </div>
    );
}


export default form;