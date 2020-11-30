import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialButtonPrimary3(props) {
  return <Container {...props}></Container>;
}

const Container = styled.div`
  display: flex;
  background-color: #2196F3;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 2px;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: 0px 1px 5px  0.35px #000 ;
`;

export default MaterialButtonPrimary3;
