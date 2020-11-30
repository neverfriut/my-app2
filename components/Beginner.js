import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCard58 from "./MaterialCard58";

function Beginner(props) {
  return (
    <Container {...props}>
      <MaterialCard58
        style={{
          height: 350,
          width: 359,
          borderWidth: 1,
          borderColor: "rgba(213,213,213,1)",
          borderStyle: "solid"
        }}
      ></MaterialCard58>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Beginner;
