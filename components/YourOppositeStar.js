import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCard513 from "./MaterialCard513";

function YourOppositeStar(props) {
  return (
    <Container {...props}>
      <MaterialCard513
        style={{
          height: 350,
          width: 359,
          borderWidth: 1,
          borderColor: "rgba(213,213,213,1)",
          borderStyle: "solid"
        }}
      ></MaterialCard513>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default YourOppositeStar;
