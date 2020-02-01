import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 50px 0px;
  margin-top: -130px;
`

export const Column = styled.div`
  display: flex;
  text-align: center;
  max-width: 900px;
  align-self: center;
  width: 100%;


  li {
    list-style-type: none;
    font-size: 17px;
    margin: 0;
    padding: 5px 0px 0px 0px;
}
  }
  h3 {
    font-family: 'eurostile', sans-serif;
    font-weight: 800;
    color: #141c3a;
  }

  p {
    font-size: 17px;
    font-weight: 300;
    line-height: 1.5;
  }
  .p-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #f97304 !important;
  }
`
export const BoxContainer = styled.div`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #e6ecf8;
  color: #141c3a;
  display: flex;
  padding: 0.5rem;
`

export const BoxLeft = styled.div`
  padding: 70px 45px;
  display: block;
  flex-basis: 0;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  border-right: 1px solid #e6ecf8;
`

export const BoxRight = styled.div`
  padding: 70px 45px;
  display: block;
  flex-basis: 0;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
`
