import React, { useState } from 'react';
import Dropdown from 'react-dropdown';

const PeopleDropDown = ({ people, setPerson }) => {
  const [chosenPerson, setChosenPerson] = useState(people[0]);
  console.log('people in dropdown :>> ', people);
  const options = people.map((person) => (
    <option value={person}>{person}</option>
  ));

  const handleChange = (obj) => {
    // an easier way?
    setPerson(obj.value.props.value);
    setChosenPerson(obj.value.props.value);
  };
  return (
    <Dropdown options={options} onChange={handleChange} value="" placeholder="Select an option" />

  );
};

const PersonItemLst = ({ peopleList }) => {
  console.log('peopleList :>> ', peopleList);

  // somehow people List is a react component not a normal array
  const peopleElem = peopleList.map((person, i) => (<div key={`person${i.toString()}`}>{person}</div>));
  return (
    <div>
      {peopleElem}
    </div>
  );
};
const Item = ({ item, people, addPersonToItem }) => {
  const [peopleList, setPeopleList] = useState([]);
  const [person, setPerson] = useState();
  console.log('peopleList in Item :>> ', peopleList);
  const addPerson = (person) => {
    setPeopleList([...peopleList, person]);
    addPersonToItem(item, person);
  };

  return (
    <div>
      <h1>
        {item.name}
        {'            '}
        $
        {item.price}
      </h1>
      <PeopleDropDown people={people} setPerson={setPerson} />
      <button type="submit" onClick={() => addPerson(person)}>Add Person</button>
      <PersonItemLst peopleList={peopleList} />
    </div>
  ); };

const ItemList = ({ items, people, addPersonToItem }) => {
  const listItems = items.map((item) => (
    <Item item={item} people={people} addPersonToItem={addPersonToItem} />
  ));
  return (
    <div>
      <h1>Items List</h1>
      {listItems}
    </div>
  );
};
const PersonList = ({ people }) =>
  // amount owed per person
  (
    <div>PersonList</div>
  )
;

// update total bill based of itemlist
export default function BillElem({ items, people }) {
  // const peopleObj = {};
  // people.forEach((person) => { peopleObj[person] = 0; });
  // const [personalBills, setPersonalBills] = useState(peopleObj);
  const itemsObj = {};
  items.forEach((item) => { itemsObj[item] = []; });
  const [itemsPeople, setItemPeople] = useState(itemsObj);

  const addPersonToItem = (item, person) => {
    const updateItemPeople = { ...itemsPeople };
    itemsObj[item].push(person);
    setItemPeople({ ...itemsPeople });
  };
  const handleSubmit = () => {
    // save bill to db?
    // but thats already done

  };
  return (
    <div>
      <ItemList items={items} people={people} addPersonToItem={addPersonToItem} />
      <PersonList people={people} itemsPeople={itemsPeople} />
      <h1>Total bill is: </h1>
      <button type="submit" onClick={handleSubmit}>Save Bill</button>
    </div>
  );
}
