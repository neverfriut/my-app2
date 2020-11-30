import React, { Component } from "react";
import styled, { css } from "styled-components";

function BackgroundRight(props) {
  return (
    <Container {...props}>
      <ImageFiller></ImageFiller>
      <Image src={require("../assets/images/Shape-background1.png")}></Image>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  transform: rotate(174.00deg);
  margin-right: 61px;
  margin-top: 68px;
  margin-bottom: 68px;
  object-fit: contain;
`;

export default BackgroundRight;
