// //  1
// // Basic method to pass component data to other component  or Parent component
// // ( App.jsx is Parent Comp ) → CompA → CompB → CompC        and vise versa in not allowed
// // in this method not possible pass data direct CompC to Parent Comp or direct Parent to CompC , because of tree flow

// import React from "react";
// import CompA from "./CompA";

// const App = () => {
//   return (
//     <>
//       <CompA />
//     </>
//   );
// };
// export default App;

//  2
// context API  in this method possible to pass data direct CompC to Parent component  or Parent to CompC
// step 1- create context
// step 2- proviver
// step 3- consumer     {consumer ko hamesha only ek fuction chahiye hota h }
// export is must needed

import React, { createContext } from "react";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Tarun"}>
        <LastName.Provider value={"Mandhan"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName, LastName };
