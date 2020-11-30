import React, { Component } from "react";
import styled, { css } from "styled-components";
import EvilIconsIcon from "react-native-vector-icons/dist/EvilIcons";

function MaterialCard12(props) {
  return (
    <Container {...props}>
      <EvilIconsIcon
        name="spinner-3"
        style={{
          top: 132,
          left: 18,
          position: "absolute",
          color: "rgba(217,101,25,1)",
          fontSize: 40
        }}
      ></EvilIconsIcon>
      <Image src={require("../assets/images/beginner-svg2.png")}></Image>
      <LoremIpsum>0/34</LoremIpsum>
      <CardBody>
        <BodyContent>
          <TextInput placeholder="Beginner"></TextInput>
        </BodyContent>
      </CardBody>
      <LoremIpsum2>34 readings you need to know</LoremIpsum2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-width: 1px;
  border-radius: 2px;
  border-color: #CCC;
  flex-wrap: nowrap;
  background-color: #FFF;
  overflow: hidden;
  flex-direction: column;
  border-style: solid;
  position: relative;
  box-shadow: -2px 2px 1.5px  0.1px #000 ;
`;

const Image = styled.img`
  top: 3px;
  left: 3px;
  width: 227px;
  height: 100%;
  position: absolute;
  object-fit: contain;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 144px;
  left: 64px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const CardBody = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
`;

const BodyContent = styled.div`
  padding: 16px;
  padding-top: 24px;
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const TextInput = styled.input`
  font-family: Roboto;
  font-size: 24px;
  color: #000;
  padding-bottom: 12px;
  width: 94px;
  height: 63px;
  border: none;
  background: transparent;
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  top: 111px;
  left: 18px;
  position: absolute;
  font-style: italic;
  font-weight: ;
  color: #121212;
  opacity: 0.56;
`;

export default MaterialCard12;
