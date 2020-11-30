import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialButtonPrimary1(props) {
  return (
    <Container {...props}>
      <LogIn>Log in</LogIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(92,158,211,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 2px;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
`;

const LogIn = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 14px;
`;

export default MaterialButtonPrimary1;
