import "./App.css";
import React, { useState } from "react";
import "./index.css";
// import axios from 'axios';

function App() {
  const blankData = {
    name: " ",
    zodiac: " ",
    zodiacClicked: false,
    nameClicked: false,
  }
  const [userData, setUserData] = useState([{
    ...blankData
  }]);

  const updateInput = (e) => {
    e.preventDefault();
    console.log("this is the event", e)
    // if (e.children === "name" && "zodiac") {
      if (e.target) {
        setUserData([...userData, { name: e.target[0].value, zodiac: e.target[1].value, nameClicked: true, zodiacClicked: true }]);
        console.log("userData is here ",userData)
    }
    // else if (e.className === "zodiac-data") {
    // setUserData({zodiac: e.target.value, zodiacClicked: true})
    // }
  };

  return (
    <div className="App">
      <h1>This is the zodiac display thingy</h1>
      <form onSubmit={updateInput}>
        <label htmlFor="name">Name:</label>
        <input
          className="name-data"
          type="text"
          name="name"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
       <label htmlFor="name">Zodiac:</label>
        <input
          className="zodiac-data"
          type="text"
          name="zodiac"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      <div>
        {userData[1].nameClicked ? (
          
          <p>Name:{userData[0].name}</p>
        ) : (
          <p> name not displaying</p>
          )}
        {userData[1].zodiacClicked ? (
          <p>Zodiac:{userData[0].zodiac}</p>
        ) : (
          <p> zodiac not displaying</p>
        )}
      </div>
    </div>
  );
}
export default App;
