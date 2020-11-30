import React, { Component } from "react";
import styled, { css } from "styled-components";
import EvilIconsIcon from "react-native-vector-icons/dist/EvilIcons";

function SpinnerBeginner(props) {
  return (
    <Container {...props}>
      <EvilIconsIcon
        name="spinner-3"
        style={{
          color: "rgba(62,141,128,1)",
          fontSize: 40
        }}
      ></EvilIconsIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SpinnerBeginner;
