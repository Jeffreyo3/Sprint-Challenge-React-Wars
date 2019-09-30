import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  
  const [peopleState, setPeopleState] = useState("");    

  useEffect(() => {

    axios
      .get('https://swapi.co/api/people/')
      .then(res => {
        setPeopleState(res.data.results);

      })
      .catch(err =>
        console.log(err));

  }, []);

  const charArray = Array.from(peopleState);
  


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div id="characterContainer">
        {charArray.map(person => (
          <Character key={person.name} name={person.name} height={person.height} mass={person.mass} hairColor={person.hair_color} eyeColor={person.eye_color} gender={person.gender} homeworld={person.homeworld} species={person.species}/>
        ))}
      </div>
    </div>
  );
}

export default App;
