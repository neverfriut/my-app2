import React, { Component } from "react";
import styled, { css } from "styled-components";
import BackgroundRight from "../components/BackgroundRight";
import BackgroundLeft from "../components/BackgroundLeft";
import BackgroundMiddle from "../components/BackgroundMiddle";
import { Link } from "react-router-dom";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import Header1 from "../components/Header1";
import InfoText from "../components/InfoText";

function Index(props) {
  return (
    <Stack>
      <BackgroundRight
        style={{
          position: "absolute",
          top: 0,
          height: 1370,
          width: 1489,
          right: 0,
          display: "none"
        }}
      ></BackgroundRight>
      <BackgroundLeft
        style={{
          position: "absolute",
          top: 123,
          left: 163,
          height: 1163,
          width: 815,
          display: "none"
        }}
      ></BackgroundLeft>
      <BackgroundMiddle
        style={{
          position: "absolute",
          height: 1132,
          bottom: 0,
          right: 306,
          left: 145,
          display: "none"
        }}
      ></BackgroundMiddle>
      <Link to="/Name">
        <Button>
          <ButtonOverlay>
            <MaterialButtonPrimary
              style={{
                height: 42,
                width: 142,
                borderRadius: 60
              }}
            ></MaterialButtonPrimary>
          </ButtonOverlay>
        </Button>
      </Link>
      <Header1
        style={{
          position: "absolute",
          top: 403,
          left: 436,
          height: 70,
          width: 270
        }}
      ></Header1>
      <InfoText
        style={{
          position: "absolute",
          top: 459,
          left: 436,
          height: 133,
          width: 221
        }}
      ></InfoText>
    </Stack>
  );
}

const Stack = styled.div`
  height: 1525px;
  margin-top: -153px;
  margin-left: -370px;
  margin-right: -462px;
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
const Button = styled.div`
  top: 614px;
  left: 428px;
  width: 142px;
  height: 42px;
  position: absolute;
  flex-direction: column;
  border: none;
`;

export default Index;
