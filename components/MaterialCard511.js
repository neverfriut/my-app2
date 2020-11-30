import React, { Component } from "react";
import styled, { css } from "styled-components";
import SpinnerBeginner from "./SpinnerBeginner";

function MaterialCard511(props) {
  return (
    <Container {...props}>
      <CardItemImagePlace
        src={require("../assets/images/beginner3181.png")}
      ></CardItemImagePlace>
      <BodyContent>
        <Beginner>Beginner</Beginner>
      </BodyContent>
      <SpinnerBeginner
        style={{
          position: "absolute",
          left: 276,
          top: 291,
          width: 40,
          height: 35
        }}
      ></SpinnerBeginner>
      <LoremIpsum>1/34</LoremIpsum>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-radius: 2px;
  flex-wrap: nowrap;
  overflow: hidden;
  flex-direction: row;
  position: relative;
`;

const CardItemImagePlace = styled.img`
  background-color: #ccc;
  flex: 1 1 0%;
  min-height: 210px;
  width: 100%;
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

const Beginner = styled.span`
  font-family: Roboto;
  font-size: 24px;
  color: #000;
  padding-bottom: 12px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 300px;
  left: 316px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

export default MaterialCard511;
