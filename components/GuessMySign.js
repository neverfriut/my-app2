import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCard512 from "./MaterialCard512";

function GuessMySign(props) {
  return (
    <Container {...props}>
      <MaterialCard512
        style={{
          height: 350,
          width: 359,
          borderWidth: 1,
          borderColor: "rgba(213,213,213,1)",
          borderStyle: "solid"
        }}
      ></MaterialCard512>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default GuessMySign;
