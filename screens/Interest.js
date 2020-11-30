import React, { Component } from "react";
import styled, { css } from "styled-components";
import BackgroundRight from "../components/BackgroundRight";
import BackgroundMiddle from "../components/BackgroundMiddle";
import BackgroundLeft from "../components/BackgroundLeft";
import { Link } from "react-router-dom";

function Interest(props) {
  return (
    <Stack>
      <BackgroundRight
        style={{
          position: "absolute",
          top: 75,
          width: 1489,
          height: 1370,
          right: 188,
          display: "none"
        }}
      ></BackgroundRight>
      <BackgroundMiddle
        style={{
          position: "absolute",
          left: 647,
          height: 1408,
          bottom: 37,
          right: 0,
          display: "none"
        }}
      ></BackgroundMiddle>
      <BackgroundLeft
        style={{
          position: "absolute",
          left: 551,
          top: 75,
          width: 815,
          height: 1163,
          display: "none"
        }}
      ></BackgroundLeft>
      <Headline1>Tell us a bit about you!</Headline1>
      <InsterestText>What are you interested in?</InsterestText>
      <Link to="/Level">
        <Button>
          <ButtonOverlay>
            <GuessMySign
              src={require("../assets/images/Guess_My_Sign.png")}
            ></GuessMySign>
          </ButtonOverlay>
        </Button>
      </Link>
      <Link to="/Level">
        <Button2>
          <ButtonOverlay>
            <IWantAdvice
              src={require("../assets/images/I_want_advice.png")}
            ></IWantAdvice>
          </ButtonOverlay>
        </Button2>
      </Link>
      <Link to="/Level">
        <Button3>
          <ButtonOverlay>
            <YourOppositeStar
              src={require("../assets/images/Your_Opposite_star.png")}
            ></YourOppositeStar>
          </ButtonOverlay>
        </Button3>
      </Link>
    </Stack>
  );
}

const Stack = styled.div`
  height: 1445px;
  margin-top: -210px;
  margin-left: -745px;
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
const Headline1 = styled.span`
  font-family: Roboto;
  top: 299px;
  left: 774px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 72px;
  font-size: 36px;
  width: 229px;
`;

const InsterestText = styled.span`
  font-family: Roboto;
  top: 406px;
  left: 774px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 72px;
  width: 229px;
  font-size: 20px;
`;

const Button = styled.div`
  top: 478px;
  left: 774px;
  width: 200px;
  height: 53px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const GuessMySign = styled.img`
  width: 200px;
  height: 100%;
  object-fit: contain;
`;

const Button2 = styled.div`
  top: 577px;
  left: 774px;
  width: 200px;
  height: 58px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const IWantAdvice = styled.img`
  width: 200px;
  height: 100%;
  object-fit: contain;
`;

const Button3 = styled.div`
  top: 682px;
  left: 774px;
  width: 200px;
  height: 57px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const YourOppositeStar = styled.img`
  width: 200px;
  height: 100%;
  object-fit: contain;
`;

export default Interest;
