import React, { useEffect, useState } from "react";
import styled from "@emotion/styled/macro";
import { css } from "@emotion/core";
import { Button } from "./styles";
import GitHub from "../../../assets/github.svg";

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease"
});

const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
  zIndex: 2,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  padding: "20px 20px 0 20px",
  boxSizing: "border-box",
  borderRadius: "12px"
});

const BigTitle = styled.h2({
  textTransform: "uppercase",
  fontFamily: "Helvetica"
});

const SubTitle = styled.h4({
  fontFamily: "Helvetica",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease"
});

const Paragraph = styled.p({
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease"
});

const Background = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "300px",
  height: "350px",
  cursor: "pointer",
  borderRadius: "12px",

  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,.5)"
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)"
  },
  [`:hover ${Hover}`]: {
    opacity: 1
  }
});

const CTA = styled.div({
  position: "absolute",
  bottom: "20px",
  left: "20px"
});

const Hovers = ({ image, title, body, stack, url, git }) => {
  return (
    <div className="App" style={{ margin: `0 auto` }}>
      <Background
        css={css`
          background-image: url(${image});
          @media (max-width: 500px) {
            img {
              width: "300px";
            }
          }
        `}
      >
        <DisplayOver>
          <Hover>
            <BigTitle>{title}</BigTitle>
            <SubTitle>{body}</SubTitle>
            <Paragraph>Stack: {stack}</Paragraph>
            <CTA>
              <div>
                <Button href={url} target="_blank" rel="noopener noreferrer">
                  VISIT WEBSITE+
                </Button>
                {git && (
                  <a href={git} target="_blank" rel="noopener noreferrer">
                    <GitHub />
                  </a>
                )}
              </div>
            </CTA>
          </Hover>
        </DisplayOver>
      </Background>
    </div>
  );
};

export default Hovers;
