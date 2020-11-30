import React, { Component } from "react";
import styled, { css } from "styled-components";

function Header1(props) {
  return (
    <Container {...props}>
      <HelloYou>HELLO YOU!</HelloYou>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HelloYou = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 70px;
  width: 270px;
  font-size: 40px;
`;

export default Header1;
