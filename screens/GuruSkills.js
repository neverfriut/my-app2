import React, { Component } from "react";
import styled, { css } from "styled-components";
import BackgroundRight from "../components/BackgroundRight";
import BackgroundLeft from "../components/BackgroundLeft";
import BackgroundMiddle from "../components/BackgroundMiddle";
import GuessMySign from "../components/GuessMySign";
import YourOppositeStar from "../components/YourOppositeStar";
import MaterialHeader11 from "../components/MaterialHeader11";
import MaterialCardWithTextOverImage6 from "../components/MaterialCardWithTextOverImage6";

function GuruSkills(props) {
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
          left: 233,
          top: 0,
          width: 815,
          height: 1163,
          display: "none"
        }}
      ></BackgroundLeft>
      <BackgroundMiddle
        style={{
          position: "absolute",
          left: 329,
          height: 1408,
          bottom: 0,
          right: 0,
          display: "none"
        }}
      ></BackgroundMiddle>
      <YourProgress1>Your Progress</YourProgress1>
      <TryYourNewSkills1>Try your new skills</TryYourNewSkills1>
      <GuessMySign
        style={{
          position: "absolute",
          top: 757,
          left: 462,
          height: 350,
          width: 359
        }}
      ></GuessMySign>
      <YourOppositeStar
        style={{
          position: "absolute",
          top: 1141,
          left: 467,
          height: 350,
          width: 359
        }}
      ></YourOppositeStar>
      <MaterialHeader11
        style={{
          height: 43,
          position: "absolute",
          left: 427,
          top: 135,
          opacity: 0.49,
          right: 608
        }}
      ></MaterialHeader11>
      <MaterialCardWithTextOverImage6
        style={{
          height: 359,
          width: 359,
          position: "absolute",
          left: 461,
          top: 293
        }}
      ></MaterialCardWithTextOverImage6>
    </Stack>
  );
}

const Stack = styled.div`
  height: 2081px;
  margin-top: -135px;
  margin-left: -427px;
  margin-right: -608px;
  position: relative;
  display: flex;
`;

const YourProgress1 = styled.span`
  font-family: Roboto;
  top: 235px;
  left: 467px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 58px;
  width: 283px;
  font-size: 25px;
`;

const TryYourNewSkills1 = styled.span`
  font-family: Roboto;
  top: 698px;
  left: 462px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 58px;
  width: 283px;
  font-size: 25px;
`;

export default GuruSkills;
