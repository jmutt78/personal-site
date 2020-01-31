import React from 'react'

import Computer from '../../../assets/computer.svg'
import Concept from '../../../assets/concept.svg'

import { Root, Column, BoxLeft, BoxRight, BoxContainer } from './styles'
import { Container } from '../Intro/styles.js'

export default () => (
  <Root>
    <Column>
      <BoxContainer>
        <BoxLeft>
          <Computer
            style={{ height: '80px', width: 'auto', marginBottom: '20px' }}
          />
          <h3>Full-Stack Developer</h3>
          <p>I love to create things, and enjoy bringing ideas to life.</p>
          <p className="p-title">Languages:</p>
          <p>React, Javascript, HTML/CSS, React Native</p>
          <p className="p-title">Services:</p>
          <ul>
            <li>Website Development</li>
            <li>Web Application</li>
            <li>Mobile Application</li>
            <li>Project Management</li>
            <li>Consulting</li>
          </ul>
        </BoxLeft>
        <BoxRight>
          <Concept
            style={{ height: '80px', width: 'auto', marginBottom: '20px' }}
          />
          <h3>Entreprenur</h3>
          <p>
            I genuinely care about people, and love helping fellow
            entrepreneurs.
          </p>
          <p className="p-title">Industries:</p>
          <p>Tech, Retail, Construction</p>
          <p className="p-title">Experience:</p>
          <ul>
            <li>3 years developer</li>
            <li>13 years in entrepreneurship</li>
            <li>+20 projects</li>
            <li>3 startup</li>
            <li>2 startup</li>
          </ul>
        </BoxRight>
      </BoxContainer>
    </Column>
  </Root>
)
