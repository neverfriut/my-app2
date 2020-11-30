import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialButtonPrimary(props) {
  return (
    <Container {...props}>
      <SignUp>Sign up!</SignUp>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(144,179,217,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
`;

const SignUp = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 14px;
`;

export default MaterialButtonPrimary;
