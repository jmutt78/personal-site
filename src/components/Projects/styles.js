import styled from "styled-components";

export const Root = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 0rem 1.5rem;
  padding-bottom: 150px;
  @media (max-width: 800px) {
    width: 100%;
  }
  h2 {
    margin-bottom: 10px;

    text-align: center;
  }

  .title {
    padding-top: 30px;
  }
`;

//Icon on  top

export const SkillsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 80%;

  @media (max-width: 800px) {
    width: 90%;
    display: block;
    margin: 0 auto;
  }
`;

export const SkillsColumn = styled.div`
  display: flex;

  justify-content: center;
  flex-direction: column;
  margin: 30px 15px 0px 0px;

  h4 {
    line-height: 1.5;
    font-size: 1rem !important;
    color: white;
    margin-bottom: 0.75rem;
    margin-top: 0.75rem;
  }

  p {
    color: white;
    padding: 0px 30px 0px 30px;
    max-width: 500px;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  a {
    text-decoration: none;
  }
  svg {
    height: 30px;
    width: auto;
    padding-left: 10px;
    position: absolute;
    filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(167deg)
      brightness(103%) contrast(107%);
  }
`;
export const Button = styled.a`
  position: relative;
  width: 150px;
  height: auto;
  border-radius: 12px;
  cursor: pointer;
  text-align: center;
  background: transparent;
  border: 1.5px solid #f97304;
  outline: none;
  transition: 1s ease-in-out;
  font-size: 14px;
  font-weight: 900;
  color: #f97304;
  text-align: center;
  margin: 0px 0px 0px 5px;
  padding: 5px;
  @media (max-width: 500px) {
    font-size: 10px;
    width: 90px;
    height: auto;
  }

  :hover {
    transition: 0.5s ease-in-out;
    background: #f97304;
    color: #1c0947;
  }

  :hover svg {
    stroke-dashoffset: -480;
  }
`;
