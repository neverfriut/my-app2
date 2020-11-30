import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCard5(props) {
  return (
    <Container {...props}>
      <CardItemImagePlace
        src={require("../assets/images/cardImage1.png")}
      ></CardItemImagePlace>
      <Rect>
        <TextInput placeholder="Title goes here"></TextInput>
        <SubtitleStyle>Subtitle here</SubtitleStyle>
      </Rect>
      <LoremIpsum></LoremIpsum>
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

const CardItemImagePlace = styled.img`
  background-color: #ccc;
  flex: 1 1 0%;
  min-height: 210px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Rect = styled.div`
  padding: 16px;
  padding-top: 24px;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const TextInput = styled.input`
  font-family: Roboto;
  font-size: 24px;
  color: #000;
  padding-bottom: 12px;
  width: 157px;
  height: 40px;
  border: none;
  background: transparent;
`;

const SubtitleStyle = styled.span`
  font-family: Roboto;
  font-size: 14px;
  color: #000;
  line-height: 16px;
  opacity: 0.5;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 294px;
  left: 43px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

export default MaterialCard5;
