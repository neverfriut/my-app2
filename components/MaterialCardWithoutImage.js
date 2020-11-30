import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithoutImage(props) {
  return (
    <Container {...props}>
      <BodyContent>
        <KnowYourEnergy>Know your energy</KnowYourEnergy>
      </BodyContent>
      <Body>
        <BodyText>
          Reach outside of your comfort zone to find something new in your life.
          Talk to people who you wouldn&#39;t typically talk to and see what
          they have to say. Go somewhere you&#39;ve never been. These visits to
          the outside realm will intrigue you and change you. It might even
          change your mind about something. You have to be open to that
          possibility. A leopard may never change its spots, but you&#39;re no
          leopard. You are a wise, courageous person!
        </BodyText>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-radius: 2px;
  flex-wrap: nowrap;
  background-color: rgba(244,219,189,1);
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

const KnowYourEnergy = styled.span`
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

export default MaterialCardWithoutImage;
