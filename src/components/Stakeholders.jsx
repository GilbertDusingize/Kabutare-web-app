import React from 'react';
   

function Stakeholders(props) { 
    return (
        <div className="stakeholders">
           {props.title}
           {props.description}
        </div>
    );
        }

export default Stakeholders;
