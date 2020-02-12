import React from "react";

import Profile from "../Images/Profile.js";

import { Root, Container, Column, ImageContainer } from "./styles";

export default () => (
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
);
