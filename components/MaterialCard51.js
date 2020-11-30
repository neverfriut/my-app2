import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCard51(props) {
  return (
    <Container {...props}>
      <CardItemImagePlace
        src={require("../assets/images/know_your_energy.png")}
      ></CardItemImagePlace>
      <ScrollArea>
        <KnowYourEnergy>Know your energy</KnowYourEnergy>
      </ScrollArea>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-width: 1px;
  border-radius: 2px;
  border-color: #CCC;
  flex-wrap: nowrap;
  background-color: rgba(15,15, 15,0);
  overflow: hidden;
  flex-direction: column;
  border-style: solid;
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

const ScrollArea = styled.div`
  overflow-y: scroll;
  padding: 0px;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const KnowYourEnergy = styled.span`
  font-family: Roboto;
  font-size: 24px;
  color: #000;
  padding-bottom: 12px;
  margin: 0px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
`;

export default MaterialCard51;
