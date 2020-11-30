import React, { Component } from "react";
import styled, { css } from "styled-components";

function InfoText(props) {
  return (
    <Container {...props}>
      <LoremIpsum>
        Welcome to Astronoma! A new Social platform where you can meet and
        discuss with like-minded about the wonderful world of Astrology!
      </LoremIpsum>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 133px;
  width: 221px;
  font-size: 18px;
`;

export default InfoText;
