import styled from 'styled-components'

export const Root = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 0rem 1.5rem;
`

export const Container = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
`

export const Column = styled.div`
  display: block;
  text-align: center;
  h3 {
    font-weight: 700;
    line-height: 1.5;
    font-size: 1.8rem !important;
    margin-bottom: 0rem;
  }
`

//Icon on  top

export const SkillsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 0 auto;
  justify-content: center;
`

export const SkillsColumn = styled.div`

  background-color: #1c0947;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #e6ecf8;
  color: #141c3a;
  display: block;
  text-align: center;
  justify-content: center;
  margin: 0px 20px 10px 20px;
  width: 350px;
  height auto;
  h4 {

    line-height: 1.5;
    font-size: 1.1rem !important;
    color: white;
    margin-bottom: .75rem;
    margin-top: .75rem;
  }

  p {
    color: white;

    padding: 0px 30px 0px 30px;
    max-width: 500px;
    margin-bottom: .5rem;
    font-size: 1rem;
  }
  a {
    color: white;
  }
  svg {
    height: 30px;
    width: auto;
    position:absolute;

    filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(167deg) brightness(103%) contrast(107%);
  }
`
export const Button = styled.div`
  position: relative;
  svg {
    height: 30px;
    width: auto;
    position: absolute;
    top: 10%;
    padding-left: 10px;
    cursor: pointer;
    filter: invert(44%) sepia(48%) saturate(1564%) hue-rotate(358deg)
      brightness(102%) contrast(101%);
  }
  .btn {
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
    margin: 0px 0px 20px 5px;
    padding: 5px;
    @media (max-width: 500px) {
      font-size: 10px;
      width: 90px;
      height: auto;
    }
  }

  .btn:hover {
    transition: 0.5s ease-in-out;
    background: #f97304;
    color: #1c0947;
  }

  .btn:hover svg {
    stroke-dashoffset: -480;
  }
`
