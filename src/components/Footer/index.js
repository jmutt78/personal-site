import React from "react";

import Mail from "../../../assets/mail.svg";
import Github from "../../../assets/github.svg";
import ProductHunt from "../../../assets/product-hunt.svg";
import Linkin from "../../../assets/linkedin.svg";
import Twitter from "../../../assets/twitter.svg";
import Logo from "../../../assets/logo.svg";

import { Root, Container, ImageContainer, SocialContainer } from "./styles";

const Footer = () => {
  const social = [
    {
      image: <Mail />,
      url: "mailto:justinmcintosh7897@gmail.com",
      alt: "email icon"
    },
    {
      image: <Github />,
      url: "https://github.com/jmutt78",
      alt: "github icon"
    },
    {
      image: <ProductHunt />,
      url: "https://www.producthunt.com/@justinmcintoshs",
      alt: "product hunt icon"
    },
    {
      image: <Linkin />,
      url: "https://www.linkedin.com/in/justin-mcintosh-45897833/",
      alt: "Linkedin icon"
    },
    {
      image: <Twitter />,
      url: "https://twitter.com/JustinMcIntoshs",
      alt: "twitter icon"
    }
  ];

  return (
    <Root>
      <Container>
        <ImageContainer>
          <Logo />
        </ImageContainer>
        <h2>Never Giving Up.</h2>
        <SocialContainer>
          {social.map(({ image, url, alt }) => (
            <div key={url}>
              <a href={url} alt={alt}>
                {image}
              </a>
            </div>
          ))}
        </SocialContainer>
        <div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            title="Pixel perfect"
          >
            Pixel perfect
          </a>{" "}
          &{" "}
          <a
            href="https://www.flaticon.com/authors/photo3idea-studio"
            title="photo3idea_studio"
          >
            photo3idea_studio
          </a>{" "}
        </div>
      </Container>
    </Root>
  );
};

export default Footer;
