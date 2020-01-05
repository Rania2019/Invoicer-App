import React from 'react' ;
import './Notes.css';

export const Notes = (props) => {
    
return (
<div className = "notes">

    <p> {props.notes} </p>
    
</div>
)
};