import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialHeader11(props) {
  return (
    <Container {...props}>
      <TextWrapper>
        <Astronoma numberOfLines={1}>Astronoma</Astronoma>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 4px;
  justify-content: space-between;
  background-color: rgba(34,169,255,1);
`;

const TextWrapper = styled.div`
  flex-direction: column;
  display: flex;
  margin-left: 72px;
  margin-bottom: 19px;
`;

const Astronoma = styled.span`
  font-family: Roboto;
  font-size: 18px;
  color: #FFFFFF;
  background-color: transparent;
  line-height: 18px;
  font-weight: 600;
`;

export default MaterialHeader11;
