import axios from 'axios';
import React, { useState } from 'react';
import CreateBill from './components/create-bill.jsx';

export default function App() {
  const [isBillCreated, setBillCreated] = useState(false);
  const [bill, setBill] = useState();

  const addBill = (name) => {
    axios.put('/bill/create', { name })
      .then((result) => {
        console.log('result from put bill :>> ', result);
        setBill(result.data);
        setBillCreated(true);
      })
      .catch((e) => {
        console.log('error in creating bill :>> ', e);
      });
  };

  return (
    <div>
      {!isBillCreated && <CreateBill addItem={addBill} />}
      {isBillCreated && <FormElem />}
      {isBillCreated && <BillElem />}

    </div>
  );
}
