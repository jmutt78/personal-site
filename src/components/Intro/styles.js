import styled from "styled-components";

export const SVGContainer = styled.div`
overflow-x: hidden;
svg {
  display: flex;
  height: auto;
  width: 1300px;
  margin-left auto;
  margin-right: auto;

}
`;

export const Root = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
`;

export const Container = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
`;

export const Column = styled.div`
  display: block;
  text-align: center;
  justify-content: center;
  h1 {
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.125;
    font-size: 3rem !important;
  }

  h2 {
    font-family: "europa", sans-serif;
    font-weight: 300;
    line-height: 1.5;
    font-size: 1.25rem !important;

    margin-bottom: 1.5rem;
  }

  @media (max-width: 500px) {
    h1 {
      font-weight: 800;
      margin-bottom: 1.5rem;
      line-height: 1.125;
      font-size: 2rem !important;
    }

    h2 {
      font-family: "europa", sans-serif;
      font-weight: 300;
      line-height: 1.5;
      font-size: 1rem !important;

      margin-bottom: 1.5rem;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25px;
  img {
    border-radius: 50%;
    width: 300px;
    height: auto;
  }

  @media (max-width: 500px) {
    img {
      border-radius: 50%;
      width: 50%;
      height: auto;
    }
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: -80px;
`;
