import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCardWithoutImage1 from "../components/MaterialCardWithoutImage1";
import { Link } from "react-router-dom";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function BedtimeAstrologyG(props) {
  return (
    <Container>
      <Rect1Stack>
        <Rect1>
          <MaterialCardWithoutImage1
            style={{
              height: 768,
              width: 359
            }}
          ></MaterialCardWithoutImage1>
        </Rect1>
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
      </Rect1Stack>
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
const Rect1 = styled.div`
  top: 20px;
  left: 0px;
  width: 359px;
  height: 768px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Button1 = styled.div`
  top: 0px;
  left: 0px;
  width: 40px;
  height: 41px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Rect1Stack = styled.div`
  width: 359px;
  height: 788px;
  margin-top: 11px;
  margin-left: 8px;
  position: relative;
`;

export default BedtimeAstrologyG;
