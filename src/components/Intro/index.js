import React from "react";

import Profile from "../Images/Profile.js";
import Purple from "../../../assets/city.svg";

import {
  Root,
  Container,
  Column,
  ImageContainer,
  SVGContainer
} from "./styles";

export default () => (
  <SVGContainer>
    <Root>
      <Container>
        <Column>
          <h1>Web Developer & Entrepreneur</h1>

          <h2>
            I build beautiful functional websites and products for businesses
            because I love them.
          </h2>
          <ImageContainer>
            <Profile />
          </ImageContainer>
        </Column>
      </Container>
    </Root>
    <Purple />
  </SVGContainer>
);
