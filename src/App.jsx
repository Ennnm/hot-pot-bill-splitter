import axios from 'axios';
import React, { useState } from 'react';
import CreateBill from './components/create-bill.jsx';
import FormElem from './components/form.jsx';
import BillElem from './components/bill-elem.jsx';

export default function App() {
  const [isBillCreated, setBillCreated] = useState(false);
  const [bill, setBill] = useState();

  const [itemList, setItemList] = useState([]);
  const [peopleList, setPeopleList] = useState([]);

  console.log('itemList :>> ', itemList);
  console.log('peopleList :>> ', peopleList);

  // calculate each person's bill at the end and add to the db when saving bill
  const addToItems = (item) => {
    setItemList([...itemList, item]);
  };
  const addToPeople = (person) => {
    setPeopleList([...peopleList, person]);
  };

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
      {isBillCreated && <FormElem addToItems={addToItems} addToPeople={addToPeople} />}
      {isBillCreated && <BillElem items={itemList} setItems={setItemList} people={peopleList} />}

    </div>
  );
}
