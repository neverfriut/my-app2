import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCardWithoutImage2 from "../components/MaterialCardWithoutImage2";
import { Link } from "react-router-dom";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function WatersignsG(props) {
  return (
    <Container>
      <MaterialCardWithoutImage1Stack>
        <MaterialCardWithoutImage2
          style={{
            height: 729,
            width: 359,
            position: "absolute",
            left: 0,
            top: 35
          }}
        ></MaterialCardWithoutImage2>
        <Link to="/GuruSkills">
          <Button1>
            <ButtonOverlay>
              <FeatherIcon
                name="arrow-left"
                style={{
                  color: "rgba(240,154,127,1)",
                  fontSize: 40
                }}
              ></FeatherIcon>
            </ButtonOverlay>
          </Button1>
        </Link>
      </MaterialCardWithoutImage1Stack>
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
  top: 0px;
  left: 2px;
  width: 40px;
  height: 41px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const MaterialCardWithoutImage1Stack = styled.div`
  width: 359px;
  height: 764px;
  margin-top: 11px;
  margin-left: 6px;
  position: relative;
`;

export default WatersignsG;
