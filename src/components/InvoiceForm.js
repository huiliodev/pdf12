// src/components/InvoiceForm.js

import React, { useState } from 'react';

function InvoiceForm({onSubmit}) {
    const [customerName, setCustomerName] = useState('');
    // Add more state variables for other form fields

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            customerName: customerName,
            // Add other form fields as needed
        };

        onSubmit(formData);

        // Handle form submission (e.g., validation, calculations)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Customer Name:</label>
                <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />
            </div>
            <div>
                <label>Customer Name:</label>
                <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />
            </div>
            <div>
                <label>Customer Name:</label>
                <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />
            </div>
            {/* Add more form fields here for items, quantities, prices, etc. */}
            <button type="submit">Generate Invoice</button>
        </form>
    );
}

export default InvoiceForm;
