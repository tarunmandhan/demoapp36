// //  1
// // Basic method to pass component data to other component  or Parent component
// // ( App.jsx is Parent Comp ) → CompA → CompB → CompC        and vise versa in not allowed
// // in this method not possible pass data direct CompC to Parent Comp  , because of tree flow

// import React from "react";
// import CompC from "./CompC";

// const CompB = () => {
//   return (
//     <>
//       <CompC />
//     </>
//   );
// };
// export default CompB;

//  2
// context API  in this method possible to pass data direct CompC to Parent component  or Parent to CompC

import React from "react";
import CompC from "./CompC";

const CompB = () => {
  return (
    <>
      <CompC />
    </>
  );
};

export default CompB;
