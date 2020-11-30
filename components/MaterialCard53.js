import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCard53(props) {
  return (
    <Container {...props}>
      <CardItemImagePlace
        src={require("../assets/images/Bedtime_Astrology2.png")}
      ></CardItemImagePlace>
      <BodyContent></BodyContent>
      <BedtimeAstrology>Bedtime Astrology</BedtimeAstrology>
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

const BodyContent = styled.div`
  padding: 16px;
  padding-top: 24px;
  justify-content: center;
`;

const BedtimeAstrology = styled.span`
  font-family: Roboto;
  top: 216px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 24px;
`;

export default MaterialCard53;
