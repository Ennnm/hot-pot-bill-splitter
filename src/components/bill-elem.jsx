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
const PersonList = ({ people, items }) => {
  console.log('people in PersonList :>> ', people);
  // create a tally for each person
  const peopleTally = {};
  people.forEach((person) => peopleTally[person] = 0);

  items.forEach((item) => {
    const { price } = item;
    const costPerPax = price / item.people.length;
    item.people.forEach((person) => {
      peopleTally[person] += costPerPax;
    });
  });
  const peopleElem = people.map((person) => (

    <p key={person}>
      {person}
      {' '}
      $
      {peopleTally[person]}
    </p>

  ));
  // amount owed per person
  return (
    <div>{peopleElem}</div>
  ); };

// update total bill based of itemlist
export default function BillElem({ items, setItems, people }) {
  console.log('items :>> ', items);

  const addPersonToItem = (item, person) => {
    console.log('items :>> ', items);
    console.log('item :>> ', item);
    const itemObj = items.filter((_) => _.name === item.name)[0];
    console.log('itemObj :>> ', itemObj);

    itemObj.people.push(person);

    setItems([...items]);
  };
  const handleSubmit = () => {
    // save bill to db?
    // but thats already done

  };
  return (
    <div>
      <ItemList key="itemList" items={items} people={people} addPersonToItem={addPersonToItem} />
      <PersonList key="personlst" people={people} items={items} />
      <h1>Total bill is: </h1>
      <button type="submit" onClick={handleSubmit}>Save Bill</button>
    </div>
  );
}
