import "./App.css";
import React, { useState } from "react";
import "./index.css";
// import axios from 'axios';

function App() {
  const blankData = {
    name: " ",
    message: " ",
    messageClicked: false,
    nameClicked: false,
  }
  const [userData, setUserData] = useState([{
    ...blankData
  }]);

  const updateInput = (e) => {
    e.preventDefault();
    console.log("this is the event", e)
    // if (e.children === "name" && "message") {
      if (e.target) {
        setUserData([...userData, { name: e.target[0].value, message: e.target[1].value, nameClicked: true, messageClicked: true }]);
        console.log("userData is here ",userData)
    }
    // else if (e.className === "message-data") {
    // setUserData({zodiac: e.target.value, zodiacClicked: true})
    // }
  };

  return (
    <div className="App">
      <h1>This is a message display forum</h1>
      <p>leave your name and a message. just for fun!</p>
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
       <label htmlFor="name">Message:</label>
        <input
          className="message-data"
          type="text"
          name="zodiac"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      <div>
        {
          !userData[0].nameClicked || userData[1].nameClicked && !userData[0].messageClicked || userData[1].messageClicked ? (
            userData.map((userTxt,idx)=>
              <div id={idx}>
                <span className="labelText">name: </span><span className="userText">{userTxt.name}</span>
                <br />
               <span className="labelText">message: </span><span className="userText">{userTxt.message}</span>
                <br></br>
                <br></br>
              </div>

            )) : (
              <p> name not displaying</p>
            )}            
      </div>
    </div>
  );
}
export default App;
