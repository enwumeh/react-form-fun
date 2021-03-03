import "./App.css";
import React, { useState } from "react";
import "./index.css";
// import axios from 'axios';

function App() {
  const [userData, setUserData] = useState({
    name: " ",
    zodiac: " ",
    zodiacClicked: false,
    nameClicked: false,
  });

  const updateInput = (e) => {
    e.preventDefault();
    console.log("this is the event",e)
    // if (e.children === "name" && "zodiac") {
      if (e.target) {
      setUserData({ name: e.target[0].value, zodiac: e.target[1].value, nameClicked: true, zodiacClicked: true });
    }
    // else if (e.className === "zodiac-data") {
    // setUserData({zodiac: e.target.value, zodiacClicked: true})
    // }
  };

  return (
    <div className="App">
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
        {userData.nameClicked ? (
          <p>Zame:{userData.name}</p>
        ) : (
          <p> name not displaying</p>
          )}
        {userData.zodiacClicked ? (
          <p>Zodiac:{userData.zodiac}</p>
        ) : (
          <p> name not displaying</p>
        )}
      </div>
      {/* {userData.zodiac}
      {userData.nameClicked} */}

    </div>
  );
}
export default App;
