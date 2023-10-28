import logo from './logo.svg';
import './App.css';
import InvoiceForm from './components/InvoiceForm';
import InvoicePDF from './components/InvoicePDF';
import {useState} from "react";


function App() {

  const [invoiceData, setInvoiceData] = useState(null);

    const handleFormSubmit = (data) => {
        console.log(data)
        setInvoiceData(data);
    };

  return (
    <div className="App">
      <h1>Invoice Generator</h1>
      <InvoiceForm onSubmit={handleFormSubmit} />
      {invoiceData && <InvoicePDF data={invoiceData} />}
    </div>
  );
}

export default App;
