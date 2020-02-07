import styled from 'styled-components'

export const Root = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding-bottom: 2rem;
  flex-direction: column;
  align-items: center;
  margin-top: -130px;
`

export const StartupContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`

export const StartupColumn = styled.div`

  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #e6ecf8;
  padding-bottom: 10px;
  display: block;
  text-align: center;
  justify-content: center;
  margin: 0px 20px 10px 20px;
  width: 450px;
  height auto;


  p {
    padding: 15px 30px 0px 30px;
    max-width: 500px;
    margin-bottom: .5rem;
    font-size: 1rem;
  }
  a {
        font-weight: 700;
        font-size: 18px;
        border: none;
        text-decoration: none;
  }

  svg {
    height: 60px;
    width: auto;
    margin-top: 30px;

}

  }
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
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
  h2 {
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.125;
    font-size: 2rem !important;
  }
`

export const Button = styled.button`
  position: relative;

  width: 200px;
  height: auto;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  background: transparent;
  border: 1.5px solid #f97304;
  outline: none;
  transition: 1s ease-in-out;
  font-size: 18px;
  font-weight: 900;
  color: #f97304;
  margin: 0px 0px 20px 5px;
  padding: 5px;
  @media (max-width: 500px) {
    font-size: 10px;
    width: 90px;
    height: auto;
  }

  :hover {
    transition: 0.5s ease-in-out;
    background: #f97304;
    color: white;
  }

  :hover svg {
    stroke-dashoffset: -480;
  }
`
