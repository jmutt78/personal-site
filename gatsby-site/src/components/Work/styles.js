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
  h2 {
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.125;
    font-size: 2rem !important;
  }

  h3 {
    font-weight: 300;
    line-height: 1.5;
    font-size: 1.25rem !important;
    display: inline-flex;
    margin-bottom: 1.5rem;
    @media (max-width: 800px) {
      display: block;
    }
  }
`

//Icon on  top

export const SkillsContainer2 = styled.div`
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

  @media (max-width: 800px) {
    display: block;
  }
`

export const SkillsColumn = styled.div`
  display: block;
  text-align: center;
  justify-content: center;
  padding-right: 50px;

  @media (max-width: 800px) {
    padding: 0px 0px 15px 0px;
  }
`

export const Button = styled.a`
  color: #f97304;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  margin-left: 10px;
`
