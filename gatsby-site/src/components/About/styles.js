import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  size: 1800px;
  background-color: #1c0947;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 130px;
`

export const Column = styled.div`
  display: flex;
  text-align: center;
  max-width: 900px;
  align-self: center;
  width: 100%;
  padding: 100px 0px 50px 0px;

  h2 {
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.125;
    font-size: 2rem !important;
    display: inline-block;
    border-bottom: 2px solid #f97304;
  }

  h4 {
    font-family: 'europa', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    font-size: 1.25rem !important;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 500px) {
    h4 {
      padding: 0px 15px 0px 15px;
    }
`
