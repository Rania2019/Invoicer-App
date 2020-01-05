import React from 'react';
import {Page} from './components/Page';
import {InvoiceTag} from './components/InvoiceTag';
import {CompanyAddress} from './components/CompanyAddress';
import {BillTo} from './components/BillTo';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Page>
        <InvoiceTag />
        <CompanyAddress/>
      </Page>

    </div>
  );
}

export default App;
