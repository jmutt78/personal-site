import React from 'react'

import Idea from '../../../assets/idea.svg'
import System from '../../../assets/innovation.svg'
import Problem from '../../../assets/workflow.svg'
import Organize from '../../../assets/man.svg'

import {
  Root,
  Container,
  Column,
  SkillsContainer,
  SkillsColumn,
} from './styles'

const Projects = () => {
  const myWorksection1 = [
    {
      image: <Idea />,
      title: 'Matti D',
      body: 'Promotional website for a retail boutique in Del Mar, CA.',
      url: 'https://mattidstyle.com',
      stack: 'Wordpress',
    },
    {
      image: <System />,
      title: 'DocuSite',
      body: 'Promotional website for a construction application.',
      url: 'https://docusites.com',
      stack: 'Wordpress',
    },
    {
      image: <Problem />,
      title: 'Daily Journal',
      body: `Side project that lets users record a simple journal.`,
      url: 'my-journal-app123.herokuapp.com',
      stack: 'React, Redux, MongoDB',
      git: 'https://github.com/jmutt78/15-Minute-Journal',
    },
    {
      image: <Problem />,
      title: 'Trail Finder API',
      body: `Side project that lets users find trails near them.`,
      url: 'https://jmutt78.github.io/Hiking-API-Hack/',
      stack: 'HTML CSS JavaScript jQuery',
      git: 'https://github.com/jmutt78/15-Minute-Journal',
    },
  ]

  return (
    <Root>
      <Container>
        <Column>
          <h3>Recent Projects</h3>
        </Column>
      </Container>

      <SkillsContainer
        style={{ width: '80%', paddingTop: '30px' }}
      ></SkillsContainer>
    </Root>
  )
}

export default Projects
