import React, { useState } from 'react';

export default function CreateBill({ addItem }) {
  const [billName, setBillName] = useState('');

  const handleSubmit = () => {
    addItem(billName);
  };

  return (
    <div>
      <h1>Create Bill</h1>
      <input type="text" placeholder="bill name" onChange={(e) => setBillName(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}
