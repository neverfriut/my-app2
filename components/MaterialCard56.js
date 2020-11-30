import React, { Component } from "react";
import styled, { css } from "styled-components";
import EvilIconsIcon from "react-native-vector-icons/dist/EvilIcons";

function MaterialCard56(props) {
  return (
    <Container {...props}>
      <CardItemImagePlace
        src={require("../assets/images/Beginner-white.png")}
      ></CardItemImagePlace>
      <EvilIconsIcon
        name="spinner-3"
        style={{
          top: 213,
          left: 13,
          position: "absolute",
          color: "rgba(117,211,195,1)",
          fontSize: 40
        }}
      ></EvilIconsIcon>
      <LoremIpsum>0/34</LoremIpsum>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-radius: 2px;
  flex-wrap: nowrap;
  background-color: #FFF;
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

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 223px;
  left: 53px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
`;

export default MaterialCard56;
