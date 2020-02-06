import styled from 'styled-components'

export const Root = styled.div`
  padding: 1rem 1.5rem 4rem;
`

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
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25px;
`

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25px;
  svg {
    width: 42px;
    height: auto;
    margin: 0 50px 50px 0;
    cursor: pointer;
    filter: invert(44%) sepia(48%) saturate(1564%) hue-rotate(358deg)
      brightness(102%) contrast(101%);
  }
`
