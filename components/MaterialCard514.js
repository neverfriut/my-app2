import React, { Component } from "react";
import styled, { css } from "styled-components";
import EvilIconsIcon from "react-native-vector-icons/dist/EvilIcons";

function MaterialCard514(props) {
  return (
    <Container {...props}>
      <CardItemImagePlace
        src={require("../assets/images/skilled.270-3201.png")}
      ></CardItemImagePlace>
      <BodyContent>
        <Skilled>Skilled</Skilled>
      </BodyContent>
      <EvilIconsIcon
        name="spinner-3"
        style={{
          top: 291,
          left: 252,
          position: "absolute",
          color: "rgba(169,172,241,1)",
          fontSize: 40
        }}
      ></EvilIconsIcon>
      <LoremIpsum>1/20</LoremIpsum>
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

const Skilled = styled.span`
  font-family: Roboto;
  font-size: 24px;
  color: #000;
  padding-bottom: 12px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 300px;
  left: 292px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

export default MaterialCard514;
