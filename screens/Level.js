import React, { Component } from "react";
import styled, { css } from "styled-components";
import BackgroundRight from "../components/BackgroundRight";
import BackgroundMiddle from "../components/BackgroundMiddle";
import BackgroundLeft from "../components/BackgroundLeft";
import { Link } from "react-router-dom";

function Level(props) {
  return (
    <Stack>
      <BackgroundRight
        style={{
          display: "none",
          position: "absolute",
          top: 75,
          width: 1489,
          height: 1370,
          right: 187
        }}
      ></BackgroundRight>
      <BackgroundMiddle
        style={{
          display: "none",
          position: "absolute",
          left: 369,
          height: 1408,
          bottom: 37,
          right: 0
        }}
      ></BackgroundMiddle>
      <BackgroundLeft
        style={{
          display: "none",
          position: "absolute",
          left: 273,
          top: 75,
          width: 815,
          height: 1163
        }}
      ></BackgroundLeft>
      <Headline1>Tell us a bit about you!</Headline1>
      <ExperienceLevel>
        What&#39;s your experience level with Astrology?
      </ExperienceLevel>
      <Link to="/BeginnerMain">
        <Button>
          <ButtonOverlay>
            <Beginner src={require("../assets/images/Beginner.png")}></Beginner>
          </ButtonOverlay>
        </Button>
      </Link>
      <Link to="/SkilledMain">
        <Button2>
          <ButtonOverlay>
            <Skilled src={require("../assets/images/Skilled.png")}></Skilled>
          </ButtonOverlay>
        </Button2>
      </Link>
      <Link to="/GuruMain">
        <Button3>
          <ButtonOverlay>
            <Image src={require("../assets/images/Guru.png")}></Image>
          </ButtonOverlay>
        </Button3>
      </Link>
    </Stack>
  );
}

const Stack = styled.div`
  height: 1445px;
  margin-top: -210px;
  margin-left: -467px;
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
  left: 496px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 72px;
  font-size: 36px;
  width: 229px;
`;

const ExperienceLevel = styled.span`
  font-family: Roboto;
  top: 406px;
  left: 496px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 72px;
  width: 229px;
  font-size: 20px;
`;

const Button = styled.div`
  top: 452px;
  left: 493px;
  width: 200px;
  height: 200px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Beginner = styled.img`
  width: 200px;
  height: 100%;
  object-fit: contain;
`;

const Button2 = styled.div`
  top: 581px;
  left: 493px;
  width: 200px;
  height: 200px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Skilled = styled.img`
  width: 200px;
  height: 100%;
  object-fit: contain;
`;

const Button3 = styled.div`
  top: 718px;
  left: 493px;
  width: 200px;
  height: 200px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image = styled.img`
  width: 200px;
  height: 100%;
  object-fit: contain;
`;

export default Level;
