// import React from "react";
// import Child from "./Child";

// const Parent = () => {
//   return (
//     <div>
//       <Child message="Tu mera bachha hai" />
//     </div>
//   );
// };

// export default Parent;

import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  render() {
    return (
      <div>
        <Child message="tu mera bachha hai re" />
      </div>
    );
  }
}
