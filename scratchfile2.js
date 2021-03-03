import './App.css';
import React, { useState } from "react";
import './index.css';
// import axios from 'axios';


function App() {
  const [counter, setCounter] = useState(0);
  // const [randUser, setRandUser] = useState('');
  // const [userData, setUserData] = useState([{ name: " ", horoscope: " " }]);
  const [userData, setUserData] = useState({ name: " ", horoscope: " ",  horoscopeClicked: false, nameClicked: false });


  // const getRandomData = async (url) => {
  //   let response = await axios.get(url);
  //   let data = response.results;
  //   setRandUser(response);
  //   console.log(response);


  // }


  // const handleFormData = () => {
  // // const updatedList = { ...userData, name: e.target.value, horoscope: e.target.value }
  //   const updatedList = { name: userData.name, horoscope: userData.horoscope, hororClicked: true, nameClicked: true }
  //   setUserData(updatedList)
  //   console.log("namehere",updatedList.name)

  // }

  const updateInput = (e) => {
    // const updatedList = { name: userData.name, horoscope: userData.horoscope}
    // setUserData(updatedList)
    e.preventDefault();
    if (e.className === "name-data") {
      setUserData({ name: e.target.value, nameClicked: true })
      // console.log(e.target.value)
    }
      else if (e.className === "zodiac-data") {
      setUserData({horoscope: e.target.value, hororClicked: true})
      }
  }
  

  return (
    <div className="App">
      {counter} 
      <button className='button' onClick={() => {
        setCounter(counter + 1)
      }}>
      </button>

      <form onSubmit={updateInput}>
        <label
          htmlFor="name">Name:</label>
        <input
          className="name-data"
          type="text"
          name="name"
          // ref={userData.name}
          // value={e.target.value}
          // value={userData.name}
          onChange={(e) => {
            console.log(e.target.value)
          }} 
          // onChange={handleFormData} 
        />    
        {/* <label
          htmlFor="zodiac">Zodiac:</label>
        <input
          className="zodiac-data"
          type="text"
          name="horoscope"
          // ref={userData.horoscope}
          // value={userData.horoscope}
          // value={userData.horoscope}
          // onChange={(e) => { updateInput(e) }} 
          // onChange={handleFormData} 
          onChange={(e) => {
            console.log(e.target.value)
          }} 
        />     */}
        {/* <button onClick={handleFormData} >Submit</button>  */}
        <button>Submit
        </button> 
        
      </form>

      {/* <button onClick={() => {
      getRandomData()      }}> Get Random User
      </button> */}
      <div>
        
          {userData.nameClicked ?
          <p>
          name aint workin
          </p>
          :
          <p>
            names:{userData.name}
            {/* name aint workin */}
          </p>
        }
          <br></br>
        {/* {userData.hororClicked ? 
          <p>
          zodiacs:{userData.horoscope}
          </p>
          :
          <p>
            horoscope it aint workin
          </p>
        } */}
        
      </div>

    </div>

  );
}
export default App;
