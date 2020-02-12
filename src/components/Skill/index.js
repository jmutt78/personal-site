import React from "react";

import WebCoding from "../../../assets/web-coding.svg";
import Concept from "../../../assets/concept.svg";

import { Root, Column, BoxLeft, BoxRight, BoxContainer } from "./styles";

export default () => (
  <Root>
    <Column>
      <BoxContainer>
        <BoxLeft>
          <WebCoding
            style={{ height: "80px", width: "auto", marginBottom: "20px" }}
          />
          <h3>Full-Stack Developer</h3>
          <p>I love to create things, and enjoy bringing ideas to life.</p>

          <p className="p-title">Services:</p>
          <ul>
            <li>Website Development</li>
            <li>Web Application Development</li>
            <li>Mobile Application Development</li>
          </ul>
        </BoxLeft>
        <BoxRight>
          <Concept
            style={{ height: "80px", width: "auto", marginBottom: "20px" }}
          />
          <h3>Entrepreneur</h3>
          <p>
            I genuinely care about people and love helping fellow entrepreneurs.
          </p>

          <p className="p-title">Experience:</p>
          <ul>
            <li>3 years Developer</li>
            <li>13 Years in Entrepreneurship</li>
            <li>2 Startups</li>
          </ul>
        </BoxRight>
      </BoxContainer>
    </Column>
  </Root>
);

//
// <p className="p-title">Industries:</p>
// <p>Tech, Retail, Construction</p>
//
// <p className="p-title">Languages:</p>
// <p>React, Javascript, HTML/CSS, React Native</p>
