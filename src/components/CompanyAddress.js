import React from 'react' ;
import './CompanyAddress.css';

export const CompanyAddress = (props) => {
    
return (
<div className = "companyaddress">

    <p> Spawnd Corporation</p>
    <p> {props.companyAddress.add1}</p>
    <p> {props.companyAddress.add2}</p>

</div>
)
};