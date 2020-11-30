import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCardWithoutImage2 from "../components/MaterialCardWithoutImage2";
import BackgroundRight from "../components/BackgroundRight";
import BackgroundMiddle from "../components/BackgroundMiddle";
import BackgroundLeft from "../components/BackgroundLeft";
import { Link } from "react-router-dom";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function WaterSigns(props) {
  return (
    <Container>
      <MaterialCardWithoutImage2Stack>
        <MaterialCardWithoutImage2
          style={{
            height: 729,
            width: 359,
            position: "absolute",
            left: 700,
            top: 181
          }}
        ></MaterialCardWithoutImage2>
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
      </MaterialCardWithoutImage2Stack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(15,133,176,1);
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

const MaterialCardWithoutImage2Stack = styled.div`
  height: 1421px;
  margin-top: -135px;
  margin-left: -694px;
  margin-right: -608px;
  position: relative;
`;

export default WaterSigns;
