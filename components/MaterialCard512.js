import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCard512(props) {
  return (
    <Container {...props}>
      <CardItemImagePlace
        src={require("../assets/images/guessMySignCard.png")}
      ></CardItemImagePlace>
      <BodyContent>
        <GuessMySign>Guess My Sign</GuessMySign>
      </BodyContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-radius: 2px;
  flex-wrap: nowrap;
  overflow: hidden;
  flex-direction: column;
`;

const CardItemImagePlace = styled.img`
  flex: 1 1 0%;
  min-height: 210px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BodyContent = styled.div`
  padding: 16px;
  padding-top: 24px;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const GuessMySign = styled.span`
  font-family: Roboto;
  font-size: 24px;
  color: #000;
  padding-bottom: 12px;
`;

export default MaterialCard512;
