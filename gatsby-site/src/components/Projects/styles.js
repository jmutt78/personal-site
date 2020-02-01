import styled from 'styled-components'

export const Root = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 1rem 1.5rem;
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
  text-align: left;
  padding-left: 180px;
  justify-content: center;

  h3 {
    font-weight: 700;
    line-height: 1.5;
    font-size: 1.5rem !important;

    margin-bottom: 1.5rem;
  }
`

//Icon on  top

export const SkillsContainer = styled.div`
  -webkit-box-flex: 1;
  display: flex;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;

  h4 {
    line-height: 1.5;
    font-size: 1.1rem !important;
  }
  svg {
    height: 100px;
    width: auto;
    margin-bottom: 20px;
  }

  p {
    max-width: 500px;
    font-size: 1.1rem;
  }
`

export const SkillsColumn = styled.div`
  display: block;
  text-align: center;
  justify-content: center;
  padding-right: 50px;
`
