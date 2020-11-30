import React, { Component } from "react";
import styled, { css } from "styled-components";
import BackgroundRight from "../components/BackgroundRight";
import BackgroundLeft from "../components/BackgroundLeft";
import BackgroundMiddle from "../components/BackgroundMiddle";
import { Link } from "react-router-dom";
import MaterialCardWithTextOverImage1 from "../components/MaterialCardWithTextOverImage1";
import MaterialCardWithTextOverImage2 from "../components/MaterialCardWithTextOverImage2";
import MaterialCardWithTextOverImage3 from "../components/MaterialCardWithTextOverImage3";
import MaterialHeader11 from "../components/MaterialHeader11";
import MaterialCardWithTextOverImage4 from "../components/MaterialCardWithTextOverImage4";

function BeginnerMain(props) {
  return (
    <Stack>
      <BackgroundRight
        style={{
          position: "absolute",
          top: 0,
          width: 1489,
          height: 1370,
          right: 187,
          display: "none"
        }}
      ></BackgroundRight>
      <BackgroundLeft
        style={{
          position: "absolute",
          left: 211,
          top: 0,
          width: 815,
          height: 1163,
          display: "none"
        }}
      ></BackgroundLeft>
      <BackgroundMiddle
        style={{
          position: "absolute",
          left: 307,
          height: 1408,
          bottom: 0,
          right: 0,
          display: "none"
        }}
      ></BackgroundMiddle>
      <YourProgress>Your Progress</YourProgress>
      <TrendingTopics>Trending topics</TrendingTopics>
      <Link to="/KnowYourEnergy">
        <Button>
          <ButtonOverlay>
            <MaterialCardWithTextOverImage1
              style={{
                height: 359,
                width: 359
              }}
            ></MaterialCardWithTextOverImage1>
          </ButtonOverlay>
        </Button>
      </Link>
      <Link to="/WaterSigns">
        <Button3>
          <ButtonOverlay>
            <MaterialCardWithTextOverImage2
              style={{
                height: 359,
                width: 359
              }}
            ></MaterialCardWithTextOverImage2>
          </ButtonOverlay>
        </Button3>
      </Link>
      <Link to="/BedtimeAstrology">
        <Button2>
          <ButtonOverlay>
            <MaterialCardWithTextOverImage3
              style={{
                height: 359,
                width: 359
              }}
            ></MaterialCardWithTextOverImage3>
          </ButtonOverlay>
        </Button2>
      </Link>
      <MaterialHeader11
        style={{
          height: 57,
          position: "absolute",
          left: 405,
          top: 135,
          opacity: 0.49,
          right: 608
        }}
      ></MaterialHeader11>
      <MaterialCardWithTextOverImage4
        style={{
          height: 359,
          width: 359,
          position: "absolute",
          left: 445,
          top: 293
        }}
      ></MaterialCardWithTextOverImage4>
    </Stack>
  );
}

const Stack = styled.div`
  height: 2552px;
  margin-top: -135px;
  margin-left: -405px;
  margin-right: -608px;
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
const YourProgress = styled.span`
  font-family: Roboto;
  top: 235px;
  left: 445px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 58px;
  width: 283px;
  font-size: 25px;
`;

const TrendingTopics = styled.span`
  font-family: Roboto;
  top: 685px;
  left: 439px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 58px;
  width: 283px;
  font-size: 25px;
`;

const Button = styled.div`
  top: 743px;
  left: 439px;
  width: 359px;
  height: 359px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Button3 = styled.div`
  top: 1126px;
  left: 439px;
  width: 359px;
  height: 359px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Button2 = styled.div`
  top: 1508px;
  left: 439px;
  width: 359px;
  height: 359px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

export default BeginnerMain;
