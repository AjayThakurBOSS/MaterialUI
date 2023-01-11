import React, { useState } from "react";
import Child2 from "./Child2";

const Parent2 = () => {
  const [message, setMessage] = useState("Hello World");
  const chooseMessage = (message) => {
    setMessage(message);
  };
  return (
    <div>
      <h1>{message}</h1>
      <Child2 chooseMessage={chooseMessage} />
    </div>
  );
};

export default Parent2;
