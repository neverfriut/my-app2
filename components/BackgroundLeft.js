import React, { Component } from "react";
import styled, { css } from "styled-components";

function BackgroundLeft(props) {
  return (
    <Container {...props}>
      <Backgroun1Filler></Backgroun1Filler>
      <Backgroun1
        src={require("../assets/images/Shape-background.png")}
      ></Backgroun1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Backgroun1Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Backgroun1 = styled.img`
  width: 815px;
  height: 100%;
  object-fit: contain;
`;

export default BackgroundLeft;
