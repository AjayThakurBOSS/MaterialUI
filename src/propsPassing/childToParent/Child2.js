import React from "react";

const Child2 = ({ chooseMessage }) => {
  let msg = "Goodbye";
  return (
    <div>
      <button onClick={() => chooseMessage(msg)}>Change message</button>
    </div>
  );
};

export default Child2;
