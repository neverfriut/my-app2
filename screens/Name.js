import React, { Component } from "react";
import styled, { css } from "styled-components";
import BackgroundLeft from "../components/BackgroundLeft";
import BackgroundMiddle from "../components/BackgroundMiddle";
import BackgroundRight from "../components/BackgroundRight";
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";

function Name(props) {
  return (
    <Stack>
      <BackgroundLeft
        style={{
          position: "absolute",
          left: 330,
          top: 238,
          width: 815,
          height: 1163,
          display: "none"
        }}
      ></BackgroundLeft>
      <BackgroundMiddle
        style={{
          position: "absolute",
          left: 88,
          height: 1408,
          bottom: 0,
          right: 180,
          display: "none"
        }}
      ></BackgroundMiddle>
      <BackgroundRight
        style={{
          position: "absolute",
          top: 0,
          width: 1489,
          height: 1370,
          right: 0,
          display: "none"
        }}
      ></BackgroundRight>
      <Headline>Tell us a bit about you!</Headline>
      <MaterialStackedLabelTextbox
        style={{
          position: "absolute",
          left: 563,
          top: 589,
          height: 97,
          width: 348
        }}
      ></MaterialStackedLabelTextbox>
      <Link to="/Interest">
        <Button>
          <ButtonOverlay>
            <FontAwesomeIcon
              name="arrow-circle-right"
              style={{
                color: "rgba(144,179,217,1)",
                fontSize: 40
              }}
            ></FontAwesomeIcon>
          </ButtonOverlay>
        </Button>
      </Link>
    </Stack>
  );
}

const Stack = styled.div`
  height: 1743px;
  margin-top: -373px;
  margin-left: -524px;
  margin-right: -450px;
  position: relative;
  display: flex;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Headline = styled.span`
  font-family: Roboto;
  top: 462px;
  left: 553px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 74px;
  font-size: 36px;
  width: 229px;
`;

const Button = styled.div`
  top: 703px;
  left: 563px;
  width: 35px;
  height: 40px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

export default Name;
