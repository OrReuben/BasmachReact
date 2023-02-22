import React from "react";

const Introduction = ({ name, age }) => {
  return (
    <>
      <h1>Hello from the Introduction component!</h1>
      <strong>The props you've sent me are :</strong>
      <p>name: {name}</p>
      <p> age: {age} </p>
    </>
  );
};

export default Introduction;
