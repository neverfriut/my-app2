import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithTextOverImage6(props) {
  return (
    <Container {...props}>
      <CardItemImagePlace
        src={require("../assets/images/skilled.2703.png")}
      ></CardItemImagePlace>
      <CardBody>
        <BodyContent>
          <Guru>Guru</Guru>
        </BodyContent>
      </CardBody>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-radius: 2px;
  flex-wrap: nowrap;
  overflow: hidden;
  flex-direction: column;
  position: relative;
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

const Guru = styled.span`
  font-family: Roboto;
  font-size: 24px;
  color: #FFF;
  padding-bottom: 12px;
`;

export default MaterialCardWithTextOverImage6;
