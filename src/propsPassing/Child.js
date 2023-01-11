// import React from "react";

// const Child = (props) => {
//   return <div>{props.message}</div>;
// };

// export default Child;

import React, { Component } from "react";

export default class Child extends Component {
  render() {
    return <div>{this.props.message}</div>;
  }
}
