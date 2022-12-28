// //  1
// // Basic method to pass component data to other component  or Parent component
// // ( App.jsx is Parent Comp ) → CompA → CompB → CompC        and vise versa in not allowed
// // in this method not possible pass data direct CompC to Parent Comp  , because of tree flow

// import React from "react";

// const CompC = () => {
//   return (
//     <>
//       <h1> Hello Tarun</h1>
//     </>
//   );
// };
// export default CompC;

//  2
// context API  in this method possible to pass data direct CompC to Parent component  or Parent to CompC

import React from "react";
import { FirstName, LastName } from "./App";

const CompC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <>
              <LastName.Consumer>
                {(lname) => {
                  return (
                    <>
                      <h1>
                        My name is {fname} {lname}
                      </h1>
                    </>
                  );
                }}
              </LastName.Consumer>
              ;
            </>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

// In ES6 this Triangle code design call's  --  call back hell

export default CompC;

// Now, we see in next demoapp37 react useContext ,instead of using context API
