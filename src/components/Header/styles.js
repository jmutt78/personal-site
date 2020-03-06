import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  backround: transparent;
  min-height: 100;
  display: flex;
`;

export const NavFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 80px;
  padding: 60px 30px;
  max-width: 1920px;
  svg {
    height: 80px;
    width: auto;
  }
`;

export const NavLinks = styled.div`
  padding: 12px 10px 8px 10px;
  display: flex;
`;
export const BlogLink = styled.div`
  padding: 20px 0px 0px 25px;
  @media (max-width: 500px) {
    padding: 10px 0px 0px 25px;
  }

  h3 {
    font-size: 18px;
    font-weight: 400;
    color: #f97304;
  }
  h3:hover {
    color: #1c0947;
  }

  a {
    text-decoration: none;
  }
`;

export const Button = styled.button`
  width: 110px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1.5px solid #1c0947;
  outline: none;
  transition: 1s ease-in-out;
  font-size: 14px;
  font-weight: 900;
  color: #1c0947;
  @media (max-width: 500px) {
    font-size: 10px;
    width: 90px;
    height: 40px;
  }

  :hover {
    transition: 0.5s ease-in-out;
    background: #1c0947;
    color: white;
  }

  :hover svg {
    stroke-dashoffset: -480;
  }
`;
