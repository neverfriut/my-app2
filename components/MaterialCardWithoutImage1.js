import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithoutImage1(props) {
  return (
    <Container {...props}>
      <BodyContent>
        <BedtimeAstrology>Bedtime Astrology</BedtimeAstrology>
      </BodyContent>
      <Body>
        <BodyText>
          Although astrology is not a religion, it offers comfort, faith and a
          deeper understanding of the world we live in. Interpretations often
          offer assurances of one&#39;s future, but more importantly, they are
          supposed to show us a way to resolve our issues and to improve our
          relationships with our partners, family, and friends and mainly tools
          to meet ourselves and discover our own inner worlds in a different
          light.{"\n"}Astrology claims that nothing in life is coincidental and
          everything that happens to us happens for a particular reason.
          Astrology can provide us some good answers as to why these things
          happen to us and it guides us on our steps forward. In this way,
          astrology actually helps people to understand themselves and the world
          around them much better.{"\n"}Astrology works, astrologers don’t. Most
          of the people who visit astrologers or read their horoscopes
          regularly, end up with a sensation of fulfillment and satisfaction
          somewhat like euphoria. This does not mean that the astrologers have
          accurately predicted the individuals future or present based on their
          horoscope dates, but it means that having a horoscope cast can be
          actually a very fulfilling experience.{"\n"}The Earth is positioned
          under the constellations that were known as our star signs millenniums
          ago. Although signs don&#39;t coincide with the constellations
          anymore, we are still under the influence of seasons and planetary
          movements in the same way as we were back then. Many people diligently
          follow their horoscopes and believe in their astrology signs meanings.
          This isn&#39;t surprising, as astrology is widely popular and everyone
          in the world knows which are their horoscope dates and signs. People
          enjoy reading their horoscope signs forecasts and this often leads to
          changes in personalities, behaviors and decision-making processes.
          {"\n"}Astrology can be a real lifesaver because it lets you know of
          the future obstacles and problems in advance. It is up to you whether
          you want to believe the advice and precautions suggested in a
          horoscope reading and save yourself from the pain without doing much.
          Here is your first problem - There is no salvation “without doing
          much”. This is the main problem with approach to chart readings –
          everyone has to put up a strong effort to change things in their
          lives.{"\n"}Some People believe in astrology because others before
          them did and curiosity it a basic human nature, but the further drawn
          into astrology the more clear things become. The zodiac dates, the
          signs. We can associate zodiac signs to almost all aspects of our
          lives and we will see they are truly insightful and correct. Our
          horoscopes are unique and they can help us find and reveal our
          strengths, weaknesses as well as our natural qualities.{"\n"}Astrology
          can also help us find, which relationships are compatible - and which
          are not. Horoscope compatibility can improve our relationships with
          other zodiac signs. By knowing about your love potential you can make
          the best use of opportunities and take appropriate measures leading to
          a happy love or married life.{"\n"}Astrology takes into account two
          major aspects - our birth potential and the effects of the planets and
          the stars on our personal horoscope. It can help us choose the right
          career and education path in order to make a good and successful life.
          {"\n"}Last, but not least - we believe in astrology because it&#39;s
          about us. My horoscope is like a blueprint of my life that got created
          precisely at the time I was born. That means that my birth chart is
          almost as unique as my fingerprints. Each planet&#39;s placement in my
          horoscope can reveal a lot about my personality and destiny.{"\n"}
          Astrocartography is one method of locational astrology which claims to
          identify varying life conditions through differences in geographic
          location. Reportedly, by comparing your natal chart to different areas
          in the world, you can determine the area where you&#39;ll be most
          successful.
        </BodyText>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-radius: 2px;
  flex-wrap: nowrap;
  background-color: rgba(102,124,198,1);
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

const BedtimeAstrology = styled.span`
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

export default MaterialCardWithoutImage1;
