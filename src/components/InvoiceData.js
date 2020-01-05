import React, {useState, useEffect}  from 'react';
import axios from 'axios';
//import Table from 'react-bootstrap/Table';
import ReactTable from "react-table";
import "react-table/react-table.css";

export const InvoiceData = props => {

  const [data, setData] = useState([]);
  useEffect( () => {
    async function getData() {
      const response = await axios.get('https://localhost:44360/api/data'); 
      setData(response.data);
    }

    getData();
  });


  const columns = [
    {
      
        Header:"Item Number",
        accessor: "invoiceNumber"
    },
    {
        Header:" Description",
        accessor: "name"
    },
    {
        Header:"Quantity",
        accessor: "hours"
    },
    {
        Header:"Rate",
        accessor: "rate"
    },
    {
        Header:"Amount",
        accessor: "invoiceAmount"
    }


  ]
  

  return (
     //JSON.stringify(data)
    
    <ReactTable columns = {columns}
                data = {data}>
    </ReactTable>
  );

  }





