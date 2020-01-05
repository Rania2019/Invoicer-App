import React from 'react' ;
import './InvoiceInfo.css';

export const InvoiceInfo = (props) => {
    
return (
<div className = "invoiceinfo">

    <p><span>Date: {props.date}</span></p>
    <p><span>Payment Terms:{props.paymentTerms} </span></p>
    <p><span>Due Date: {props.dueDate}</span> </p>
    <p><span>Balance Due:{props.balanceDue} </span> </p>
     
</div>
)
};