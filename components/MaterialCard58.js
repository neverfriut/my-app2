import React, { Component } from "react";
import styled, { css } from "styled-components";
import SpinnerBeginner from "./SpinnerBeginner";

function MaterialCard58(props) {
  return (
    <Container {...props}>
      <CardItemImagePlace
        src={require("../assets/images/beginner318.png")}
      ></CardItemImagePlace>
      <BodyContent>
        <SpinnerBeginner
          style={{
            position: "absolute",
            top: 23,
            left: 246,
            height: 35,
            width: 40
          }}
        ></SpinnerBeginner>
        <Beginner>Beginner</Beginner>
        <LoremIpsum>0/34</LoremIpsum>
      </BodyContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-radius: 2px;
  flex-wrap: nowrap;
  background-color: #FFF;
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
  flex-direction: row;
  display: flex;
  position: relative;
`;

const Beginner = styled.span`
  font-family: Roboto;
  font-size: 24px;
  color: #000;
  padding-bottom: 12px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 35px;
  left: 286px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

export default MaterialCard58;
