import React, { Component } from "react";
import styled, { css } from "styled-components";

function BackgroundMiddle(props) {
  return (
    <Container {...props}>
      <Image2Filler></Image2Filler>
      <Image2 src={require("../assets/images/Path_113.png")}></Image2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image2Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Image2 = styled.img`
  width: 1279px;
  height: 100%;
  object-fit: contain;
`;

export default BackgroundMiddle;
