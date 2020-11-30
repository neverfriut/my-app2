import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithTextOverImage(props) {
  return (
    <Container {...props}>
      <CardItemImagePlace
        src={require("../assets/images/beginner-card.png")}
      ></CardItemImagePlace>
      <CardBody>
        <BodyContent>
          <Beginner>Beginner</Beginner>
        </BodyContent>
      </CardBody>
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
  min-height: 359px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardBody = styled.div`
  position: absolute;
  bottom: 0px;
  background-color: rgba(0,0,0,0.2);
  left: 0px;
  right: 0px;
  flex-direction: column;
  display: flex;
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
  color: #FFF;
  padding-bottom: 12px;
`;

export default MaterialCardWithTextOverImage;
