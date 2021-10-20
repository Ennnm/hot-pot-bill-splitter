import React, { useState } from 'react';

function ItemForm({ addToItems }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  // axios.put for creating new items?
  // no! create itemsList of item objects at app level
  // and add to that list
  // so that itemlist in bill will increase
  const handleSubmit = () => {
    const item = {
      name,
      price,
      people: [],
    };
    addToItems(item);
  };

  return (
    <div>
      <input type="text" placeholder="Item" onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Price" onChange={(e) => setPrice(Number(e.target.value))} />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

function PersonForm({ addToPeople }) {
  const [name, setName] = useState('');
  // create a peopleList
  // add to list
  // people will show up in the dropdownlist
  const handleSubmit = () => {
    addToPeople(name);
  };

  return (
    <div>
      <input type="text" placeholder="Person" onChange={(e) => { setName(e.target.value); }} />
      <button type="submit" onClick={handleSubmit}>Submit </button>
    </div>
  );
}

export default function FormElem({ addToItems, addToPeople }) {
  return (
    <div>
      <ItemForm addToItems={addToItems} />
      <PersonForm addToPeople={addToPeople} />
    </div>
  );
}
