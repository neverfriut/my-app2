import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialStackedLabelTextbox(props) {
  return (
    <Container {...props}>
      <Label>What should we call you?</Label>
      <InputStyle placeholder="Your nickname" maxLength={20}></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-bottom-width: 1px;
  border-color: #D9D5DC;
  background-color: transparent;
  flex-direction: column;
`;

const Label = styled.span`
  font-family: Roboto;
  font-size: 14px;
  text-align: left;
  color: #000;
  opacity: 0.6;
  padding-top: 16px;
  font-style: normal;
  font-weight: 100;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  color: #000;
  font-size: 16px;
  align-self: stretch;
  flex: 1 1 0%;
  line-height: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default MaterialStackedLabelTextbox;
