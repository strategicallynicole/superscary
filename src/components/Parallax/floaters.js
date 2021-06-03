import React, { Component } from "react";
import styled from "styled-components";

const Left = styled.div`
  background: #72ccff;
  height: 200px;
  width: 100px;
  border-radius: 4px;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
  display: inline-block;
  animation: float 5s 1s infinite alternate;
  animation-timing-function: cubic-bezier(0.43, 0.05, 0.6, 0.99);
`;

const Right = styled.div`
  background: #9572ff;
  height: 200px;
  width: 100px;
  border-radius: 4px;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
  display: inline-block;
  animation: float 6s 1s infinite alternate;
  animation-timing-function: cubic-bezier(0.43, 0.05, 0.6, 0.99);
`;

class Floaters extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          height: "100%"
        }}
      >
        <Left style={{ margin: "24px" }} />
        <Right />
      </div>
    );
  }
}

export default Floaters;
