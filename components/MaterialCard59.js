import React, { Component } from "react";
import styled, { css } from "styled-components";
import EvilIconsIcon from "react-native-vector-icons/dist/EvilIcons";

function MaterialCard59(props) {
  return (
    <Container {...props}>
      <CardItemImagePlace
        src={require("../assets/images/skilled.270-320.png")}
      ></CardItemImagePlace>
      <BodyContent>
        <Skilled>Skilled</Skilled>
      </BodyContent>
      <EvilIconsIcon
        name="spinner-3"
        style={{
          top: 293,
          left: 239,
          position: "absolute",
          color: "rgba(169,172,241,1)",
          fontSize: 40
        }}
      ></EvilIconsIcon>
      <LoremIpsum>0/20</LoremIpsum>
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
  top: 302px;
  left: 284px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

export default MaterialCard59;
