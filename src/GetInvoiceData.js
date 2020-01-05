import React from 'react';

const getInvoiceData = () => {

    let items = [
    
        {
            itemNumber: 12345,
            itemDesc:"Arcurve Project",
            quantity: 20,
            rate: 70,
            amount: 1400
        },
        {
            itemNumber: 12456,
            itemDesc: "Suncore Energy oil sands Ltd Partnership",
            quantity: 10,
            rate: 80,
            amount: 800

        },
        {
            itemNumber: 2345,
            itemDesc: "Suncore Energy",
            quantity: 10,
            rate: 70,
            amount: 700

        },
    ]
    return(
    itemNumber: items.itemNumber(),
    itemDesc: items.itemDesc(),
    quantity: items.quantity(),
    rate: items.rate(),
    amount: items.amount
    )  
  };
 



export default getInvoiceData;