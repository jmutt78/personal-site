import styled from 'styled-components'

export const Root = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
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
  h1 {
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.125;
    font-size: 3rem !important;
  }

  h2 {
    font-weight: 300;
    line-height: 1.5;
    font-size: 1.25rem !important;

    margin-bottom: 1.5rem;
  }
`
