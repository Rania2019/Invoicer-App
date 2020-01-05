import React from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import {InvoiceTag} from './InvoiceTag';
import {CompanyAddress} from './CompanyAddress';
import {BillTo} from './BillTo';
import {InvoiceInfo} from './InvoiceInfo';
import {Thankyou} from './Thankyou';
import {Notes} from './Notes';
import {ActionButtons} from './ActionButtons';
import {InvoiceData} from './InvoiceData';

export const Page = (props) => {
    let invoiceNumber = "12324";

    let invoiceInfo = {
        date: "09-05-2019",
        paymentTerms: ["monthly", "bi-weekly"],
        dueDate: "10-05-2019",
        balanceDue: 3000
    }

    let companyAddress = {
        add1: "#501 630 -17 Ave SW",
        add2: "Calgary, AB T2S0B4"
    }

    let notes = "Your notes";

    let thankyou = "Thank you for your bussiness with us";

    // let items = [
    
    //     {
    //         itemNumber: 12345,
    //         itemDesc:"Arcurve Project",
    //         quantity: 20,
    //         rate: 70,
    //         amount: 1400
    //     },
    //     {
    //         itemNumber: 12456,
    //         itemDesc: "Suncore Energy oil sands Ltd Partnership",
    //         quantity: 10,
    //         rate: 80,
    //         amount: 800

    //     },
    //     {
    //         itemNumber: 2345,
    //         itemDesc: "Suncore Energy",
    //         quantity: 10,
    //         rate: 70,
    //         amount: 700

    //     },
    // ]

    const columns = [
        {
            Header:"Item Number",
            accessor: "12345"
        },
        {
            Header:" Description",
            accessor: "Suncore Energy oil sands Ltd Partnership"
        },
        {
            Header:"Quantity",
            accessor: "10"
        },
        {
            Header:"Rate",
            accessor: "70"
        },
        {
            Header:"Amount",
            accessor: "700"
        },

    ]

    
    
  //    const ItemsList = () => (
  //        <ul>
  //          {items.map(item => (
  //            <li key={item.itemNumber}>
  //              <div>{item.itemNumber}</div>
  //              <div>{item.itemDesc}</div>
  //              <div>{item.quantity}</div>
  //         <div>{item.rate}</div>
  //              <div>{item.amount}</div>
  //        </li>
  //      ))}
  //       </ul>
        
  //  );
  // show output in browser
//   axios
//     .get(https://localhost:44360/api/invoices)
//     .then(res => console.log (res))
//     .catch(err => console.error(err));

  const ItemsList = () => (
    
      //  <ReactTable columns = {columns}columns = {columns}>
      //     {columns.map(item => (
      //       <li key={item.itemNumber}>
      //         <div>{item.itemNumber}</div>
      //         <div>{item.itemDesc}</div>
      //         <div>{item.quantity}</div>
      //         <div>{item.rate}</div>
      //         <div>{item.amount}</div>
      //       </li>
      //     ))}
        
      //   </ReactTable>
      <div className="table-responsive">
      <Table striped bordered hover >
        
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Item Number</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Amount</th>
           
          </tr>
        </thead>
 
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            
          </tr>
        </tbody>
       </Table >
       </div>
       // pagination with arrows
       
      //  <nav>
      //    <ul class="paginaion">
      //      <li class="page-item disabled">
      //        <a class= "page-link" href="#">
      //          <span>&laquo;</span>
      //          <span class="sr-only">Previous</span>
      //        <a>
      //      </li>

      //      <li class="page-item">
      //        <a class= "page-link" href="#">2</a>
      //      </li>

      //      <li class="page-item">
      //        <a class= "page-link" href="#">3</a>
      //      </li>

      //      <li class="page-item">
      //        <a class= "page-link" href="#">
      //          <span>&raquo;</span>
      //          <span class="sr-only">Next</span>
      //        <a>
      //      </li>
      //   </ul>
      // </nav>
    

  );

    return ( 
        
        <div >
            
            <InvoiceTag invoiceNumber = {invoiceNumber}/> 
            <CompanyAddress companyAddress = {companyAddress}/> 
            <BillTo />
    
            <InvoiceInfo date = {invoiceInfo.date}
                paymentTerms = {invoiceInfo.paymentTerms}
                dueDate = {invoiceInfo.dueDate}
                balanceDue = {invoiceInfo.balanceDue}
            />

            {/* <ItemsList />  */}
            <InvoiceData />
    

            <Notes notes= {notes}/>
            < ActionButtons />
            <Thankyou thankyou= {thankyou}/>
            
        </div>
    )
};