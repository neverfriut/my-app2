import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCardWithoutImage from "../components/MaterialCardWithoutImage";
import BackgroundLeft from "../components/BackgroundLeft";
import BackgroundMiddle from "../components/BackgroundMiddle";
import BackgroundRight from "../components/BackgroundRight";
import { Link } from "react-router-dom";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function KnowYourEnergyS(props) {
  return (
    <Container>
      <MaterialCardWithoutImage1Stack>
        <MaterialCardWithoutImage
          style={{
            height: 320,
            width: 359,
            position: "absolute",
            top: 167,
            left: 528
          }}
        ></MaterialCardWithoutImage>
        <BackgroundLeft
          style={{
            position: "absolute",
            left: 326,
            top: 0,
            width: 815,
            height: 1163,
            display: "none"
          }}
        ></BackgroundLeft>
        <BackgroundMiddle
          style={{
            position: "absolute",
            left: 422,
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
            right: 187,
            display: "none"
          }}
        ></BackgroundRight>
        <Link to="/SkilledSkills">
          <Button>
            <ButtonOverlay>
              <FeatherIcon
                name="arrow-left"
                style={{
                  color: "rgba(169,172,241,1)",
                  fontSize: 40
                }}
              ></FeatherIcon>
            </ButtonOverlay>
          </Button>
        </Link>
      </MaterialCardWithoutImage1Stack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(244,219,189,1);
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
const Button = styled.div`
  top: 141px;
  left: 528px;
  width: 40px;
  height: 41px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const MaterialCardWithoutImage1Stack = styled.div`
  height: 2009px;
  margin-top: -135px;
  margin-left: -520px;
  margin-right: -607px;
  position: relative;
`;

export default KnowYourEnergyS;
