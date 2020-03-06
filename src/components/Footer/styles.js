import styled from "styled-components";

export const Root = styled.div`
  padding: 1rem 1.5rem 2rem;
  border-top: 1px solid #1c0947;
`;

export const Container = styled.div`
  display: block;
  text-align: center;
  justify-content: center;
  padding-top: 50px;
  h2 {
    font-weight: 300;
    font-size: 1.6rem;
    margin: 2rem auto;
    max-width: 300px;
    opacity: 0.7;
  }
  a {
    text-decoration: none;
    color: #1c0947;
    font-weight: 700;
  }
`;

export const ImageContainer = styled.div`
  svg {
    height: 80px;
    width: auto;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;

  svg {
    width: 42px;
    height: auto;
    margin: 0 50px 50px 0;
    cursor: pointer;

    filter: invert(3%) sepia(80%) saturate(6562%) hue-rotate(263deg)
      brightness(96%) contrast(96%);
    @media (max-width: 500px) {
      width: 30px;
      margin: 0px 15px 30px 15px;
      height: auto;
    }
  }
`;
