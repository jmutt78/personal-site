import React from 'react'

import Profile from '../Images/Profile.js'

import { Root, Container, Column, ImageContainer } from './styles'

export default () => (
  <Root>
    <Container>
      <Column>
        <h1>Full Stack Developer & Entreprenur</h1>

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
)
