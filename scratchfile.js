// import './App.css';
// import React, { useState } from "react";
// import './index.css';
// // import axios from 'axios';

// function App() {
//   const [userData, setUserData] = useState({ name: " ", zodiac: " ",  zodiacClicked: false, nameClicked: false });

//   const updateInput = (e) => {
//     e.preventDefault();
//     console.log(e)
//     if (e.className === "name-data" && "zodiac-data" ) {
//       setUserData({ name: e.target.value, nameClicked: true })
//     }
//       // else if (e.className === "zodiac-data") {
//       // setUserData({zodiac: e.target.value, zodiacClicked: true})
//       // }
//   }

//   return (
//     <div className="App">
//       <form onSubmit={updateInput}>
//         <label
//           htmlFor="name">Name:</label>
//         <input
//           className="name-data"
//           type="text"
//           name="name"
//           // onChange={(e) => {
//           //   console.log(e)
//           // }} 
//         />    
//         <button>Submit
//         </button>  
//       </form>
//       <div>
        
//           {userData.nameClicked ?
//           <p>
//           name not displaying
//           </p>
//           :
//           <p>
//             names:{userData.name}
//           </p>
//         }
//       </div>

//     </div>

//   );
// }
// export default App;