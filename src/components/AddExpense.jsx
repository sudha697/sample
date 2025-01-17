import React, { useState } from 'react';
import './AddExpense.css';

const AddExpense = () => {
  const [formData, setFormData] = useState({
    particulars: '',
    invoiceId: '',
    category: '', // This will be selected from dropdown
    paidBy: '',
    amount: '',
    gst: '',
    date: '',
    invoiceImage: null,
  });

  const categories = [
    'Salary/Stipend',
    'Collaboration Software',
    'Hardware',
    'Administration',
    'Travel',
    'Software',
    'Stationary',
    'Bank Charges',
    'Training',
    'Insurance',
    'Director Benefits',
    'Employee Engagement',
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="expense-page">
      {/* Top Header */}
      <header className="header">
        <div className="logo">
          <img src="/quadface.jpeg" alt="Quadface Logo" />
        </div>
      </header>

      <div className="body-container">
        {/* Sidebar */}
        <div className="sidebar">
          <ul>
            <li>Forecast</li>
            <li className="active">Add Expense</li>
            <li>Category Expenses</li>
            <li>Analytics</li>
            <li>Logout</li>
          </ul>
        </div>

        {/* Form Content */}
        <div className="form-container">
          <h1>Add Expense</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <input
                type="text"
                name="particulars"
                placeholder="Particulars"
                value={formData.particulars}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="invoiceId"
                placeholder="Invoice Id"
                value={formData.invoiceId}
                onChange={handleChange}
                required
              />
            </div>
            <div className="row">
              <input
                type="file"
                name="invoiceImage"
                onChange={handleChange}
                accept="image/*"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="row">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="row">
              <input
                type="text"
                name="paidBy"
                placeholder="Paid By"
                value={formData.paidBy}
                onChange={handleChange}
              />
              <input
                type="text"
                name="gst"
                placeholder="GST (If Applicable)"
                value={formData.gst}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;

