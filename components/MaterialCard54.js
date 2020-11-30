import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCard54(props) {
  return (
    <Container {...props}>
      <CardItemImagePlace
        src={require("../assets/images/water_signs.png")}
      ></CardItemImagePlace>
      <Button>
        <ButtonOverlay></ButtonOverlay>
      </Button>
      <TextInput placeholder="Watersigns"></TextInput>
      <Watersigns>Watersigns</Watersigns>
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

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const CardItemImagePlace = styled.img`
  background-color: #ccc;
  min-height: 210px;
  height: 100%;
  width: 254px;
`;

const Button = styled.div`
  padding: 16px;
  padding-top: 24px;
  justify-content: center;
  width: 32px;
  border: none;
`;

const TextInput = styled.input`
  font-family: Roboto;
  top: 258px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 24px;
  width: 120px;
  height: 28px;
  border: none;
  background: transparent;
`;

const Watersigns = styled.span`
  font-family: Roboto;
  top: 217px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 24px;
`;

export default MaterialCard54;
