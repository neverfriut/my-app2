import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCardWithoutImage from "../components/MaterialCardWithoutImage";
import { Link } from "react-router-dom";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function KnowYourEnergyG(props) {
  return (
    <Container>
      <MaterialCardWithoutImage1Stack>
        <MaterialCardWithoutImage
          style={{
            height: 320,
            width: 359,
            position: "absolute",
            top: 21,
            left: 0
          }}
        ></MaterialCardWithoutImage>
        <Link to="/GuruSkills">
          <Button>
            <ButtonOverlay>
              <FeatherIcon
                name="arrow-left"
                style={{
                  color: "rgba(240,154,127,1)",
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
  top: 0px;
  left: 0px;
  width: 40px;
  height: 41px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const MaterialCardWithoutImage1Stack = styled.div`
  width: 359px;
  height: 341px;
  margin-top: 11px;
  margin-left: 8px;
  position: relative;
`;

export default KnowYourEnergyG;
