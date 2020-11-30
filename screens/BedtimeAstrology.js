import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCardWithoutImage1 from "../components/MaterialCardWithoutImage1";
import BackgroundLeft from "../components/BackgroundLeft";
import BackgroundMiddle from "../components/BackgroundMiddle";
import BackgroundRight from "../components/BackgroundRight";
import { Link } from "react-router-dom";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function BedtimeAstrology(props) {
  return (
    <Container>
      <RectStack>
        <Rect>
          <MaterialCardWithoutImage1
            style={{
              height: 768,
              width: 359
            }}
          ></MaterialCardWithoutImage1>
        </Rect>
        <BackgroundLeft
          style={{
            position: "absolute",
            left: 500,
            top: 0,
            width: 815,
            height: 1163,
            display: "none"
          }}
        ></BackgroundLeft>
        <BackgroundMiddle
          style={{
            position: "absolute",
            left: 596,
            height: 1408,
            bottom: 0,
            right: 0,
            display: "none"
          }}
        ></BackgroundMiddle>
        <BackgroundRight
          style={{
            position: "absolute",
            top: 0,
            width: 1489,
            height: 1370,
            right: 188,
            display: "none"
          }}
        ></BackgroundRight>
        <Link to="/BeginnerSkills">
          <Button1>
            <ButtonOverlay>
              <FeatherIcon
                name="arrow-left"
                style={{
                  color: "rgba(121,189,174,1)",
                  fontSize: 40
                }}
              ></FeatherIcon>
            </ButtonOverlay>
          </Button1>
        </Link>
      </RectStack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(102,124,198,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Rect = styled.div`
  top: 166px;
  left: 702px;
  width: 359px;
  height: 768px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Button1 = styled.div`
  top: 147px;
  left: 702px;
  width: 40px;
  height: 41px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const RectStack = styled.div`
  height: 1421px;
  margin-top: -135px;
  margin-left: -694px;
  margin-right: -608px;
  position: relative;
`;

export default BedtimeAstrology;
