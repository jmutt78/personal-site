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
  flex-grow: 1;
  margin: 0 auto;
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
