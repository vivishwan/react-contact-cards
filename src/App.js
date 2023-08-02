import React, { useState, useEffect } from 'react';
import './App.css';
import ContactCard from './ContactCard';

const App = () => {
  // const title = 'Vivishwan';
  //sample array of objects
  /*  const contacts = [
    {
      avatarUrl: 'https://via.placeholder.com/150',
      name: 'Jenny',
      email: 'jenny@abc.com',
      age: 33,
    },
    {
      avatarUrl: 'https://via.placeholder.com/150',
      name: 'Marlin',
      email: 'marlin@abc.com',
      age: 19,
    },
    {
      avatarUrl: 'https://via.placeholder.com/150',
      name: 'Peter',
      email: 'peter@abc.com',
      age: 24,
    },
  ];*/

  //api call for data
  //fetch data, convert it in json, log to console.
  const [results, setResults] = useState([]);

  //useEffect with dependency array
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  }, []);

  return (
    // <div>
    //   <h2 onClick={() => alert('you clicked the name')}>{title}</h2>
    // </div>
    // // React.createElement('div', null, 'testing')
    <div>
      {results.map((person, index) => {
        return (
          <ContactCard
            key={index}
            avatarUrl={person.picture.large}
            name={person.name.first + ' ' + person.name.last}
            email={person.email}
            age={person.dob.age}
          />
        );
      })}
    </div>
  );
};

export default App;
