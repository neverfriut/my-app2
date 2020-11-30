import React, { Component } from "react";
import styled, { css } from "styled-components";
import BackgroundLeft from "../components/BackgroundLeft";
import BackgroundRight from "../components/BackgroundRight";
import BackgroundMiddle from "../components/BackgroundMiddle";
import { Link } from "react-router-dom";
import MaterialCardWithTextOverImage1 from "../components/MaterialCardWithTextOverImage1";
import MaterialCardWithTextOverImage2 from "../components/MaterialCardWithTextOverImage2";
import MaterialCardWithTextOverImage3 from "../components/MaterialCardWithTextOverImage3";
import MaterialHeader11 from "../components/MaterialHeader11";
import MaterialCardWithTextOverImage5 from "../components/MaterialCardWithTextOverImage5";

function SkilledMain(props) {
  return (
    <Stack>
      <BackgroundLeft
        style={{
          display: "none",
          position: "absolute",
          left: 267,
          top: 0,
          width: 815,
          height: 1163
        }}
      ></BackgroundLeft>
      <BackgroundRight
        style={{
          display: "none",
          position: "absolute",
          top: 0,
          width: 1489,
          height: 1370,
          right: 187
        }}
      ></BackgroundRight>
      <BackgroundMiddle
        style={{
          display: "none",
          position: "absolute",
          left: 363,
          height: 1408,
          bottom: 0,
          right: 0
        }}
      ></BackgroundMiddle>
      <YourProgress1>Your Progress</YourProgress1>
      <TrendingTopics1>Trending topics</TrendingTopics1>
      <Link to="/KnowYourEnergyS">
        <Button1>
          <ButtonOverlay>
            <MaterialCardWithTextOverImage1
              style={{
                height: 359,
                width: 359
              }}
            ></MaterialCardWithTextOverImage1>
          </ButtonOverlay>
        </Button1>
      </Link>
      <Link to="/Watersignss">
        <Button2>
          <ButtonOverlay>
            <MaterialCardWithTextOverImage2
              style={{
                height: 359,
                width: 359
              }}
            ></MaterialCardWithTextOverImage2>
          </ButtonOverlay>
        </Button2>
      </Link>
      <Link to="/BedtimeAstrologyS">
        <Button3>
          <ButtonOverlay>
            <MaterialCardWithTextOverImage3
              style={{
                height: 359,
                width: 359
              }}
            ></MaterialCardWithTextOverImage3>
          </ButtonOverlay>
        </Button3>
      </Link>
      <MaterialHeader11
        style={{
          height: 56,
          position: "absolute",
          left: 461,
          top: 135,
          opacity: 0.49,
          right: 608
        }}
      ></MaterialHeader11>
      <MaterialCardWithTextOverImage5
        style={{
          height: 359,
          width: 359,
          position: "absolute",
          left: 495,
          top: 293
        }}
      ></MaterialCardWithTextOverImage5>
    </Stack>
  );
}

const Stack = styled.div`
  height: 2536px;
  margin-top: -135px;
  margin-left: -461px;
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
const YourProgress1 = styled.span`
  font-family: Roboto;
  top: 235px;
  left: 501px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 58px;
  width: 283px;
  font-size: 25px;
`;

const TrendingTopics1 = styled.span`
  font-family: Roboto;
  top: 685px;
  left: 495px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 58px;
  width: 283px;
  font-size: 25px;
`;

const Button1 = styled.div`
  top: 743px;
  left: 495px;
  width: 359px;
  height: 359px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Button2 = styled.div`
  top: 1126px;
  left: 495px;
  width: 359px;
  height: 359px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Button3 = styled.div`
  top: 1508px;
  left: 495px;
  width: 359px;
  height: 359px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

export default SkilledMain;
