import React from "react";

const person = props => {
  return (
    <p>
      I'm {props.name} and I'm {props.age}
    </p>
  );
};

export default person;
