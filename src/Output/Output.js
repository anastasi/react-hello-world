import React from 'react';

const output = (props) => {
    return(
        <div>
            <h1>Hello {props.firstname} {props.lastname}!</h1>
        </div>
    );
}


export default output;