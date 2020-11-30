import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithoutImage2(props) {
  return (
    <Container {...props}>
      <BodyContent>
        <WaterSigns>Water signs</WaterSigns>
      </BodyContent>
      <Body>
        <BodyText>
          Intuitive and often dreamy, Pisces feel best in a position where their
          creative skills will come to the fore, even better if it&#39;s for
          charity. Occupations that fit Pisces are: attorney, architect,
          veterinarian, musician, social worker and game designer.{"\n"}Inspired
          by the need to make changes in the lives of others, they are willing
          to help even if that means to go beyond the boundaries. This zodiac
          sign is compassionate, hard-working, dedicated and reliable.
          Pisces-born can be great at solving problems.{"\n"}For the most part,
          Pisces don’t give money too much thought. They are usually more
          focused on their dreams and goals, but they will try to make enough
          money to achieve their goals. In this area, there can be two sides of
          the Pisces - on one hand, they will spend a lot of money with little
          thought, while on the other hand they can become quite stingy. Yet, in
          the end, there will always be enough money for a normal life.
        </BodyText>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-radius: 2px;
  flex-wrap: nowrap;
  background-color: rgba(15,133,176,1);
  overflow: hidden;
  flex-direction: column;
`;

const BodyContent = styled.div`
  padding: 16px;
  padding-top: 24px;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const WaterSigns = styled.span`
  font-family: Roboto;
  font-size: 24px;
  color: #000;
  padding-bottom: 12px;
`;

const Body = styled.div`
  padding: 16px;
  padding-top: 8px;
  flex-direction: column;
  display: flex;
`;

const BodyText = styled.span`
  font-family: Arial;
  line-height: 20px;
  font-size: 14px;
  color: #424242;
  flex-wrap: wrap;
`;

export default MaterialCardWithoutImage2;
