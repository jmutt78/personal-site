import React from 'react'

import MattiD from '../Images/MattiD'
import DocuSite from '../Images/DocuSite'
import Hike from '../Images/Hike'
import Journal from '../Images/Journal'
import GitHub from '../../../assets/github.svg'

import {
  Root,
  Container,
  Column,
  SkillsContainer,
  SkillsColumn,
  Button,
} from './styles'

const Projects = () => {
  const myWorksection1 = [
    {
      image: <MattiD />,
      title: 'Matti D',
      body: 'Promotional website for a retail boutique in Del Mar, CA.',
      url: 'https://mattidstyle.com',
      stack: 'Wordpress',
    },
    {
      image: <DocuSite />,
      title: 'DocuSite',
      body: 'Promotional website for a construction application.',
      url: 'https://docusites.com',
      stack: 'Wordpress',
    },
  ]

  const myWorksection2 = [
    {
      image: <Journal />,
      title: 'Daily Journal',
      body: `Side project that lets users record a simple journal.`,
      url: 'https://my-journal-app123.herokuapp.com',
      stack: 'React, Redux, MongoDB',
      git: 'https://github.com/jmutt78/15-Minute-Journal',
    },
    {
      image: <Hike />,
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

      <SkillsContainer style={{ width: '80%', paddingTop: '30px' }}>
        {myWorksection1.map(({ image, title, body, stack, url, git }) => (
          <SkillsColumn>
            {image}
            <h4>{title}</h4>
            <p>{body}</p>
            <p>Stack: {stack}</p>
            <Button>
              <a href={url} target="_blank">
                <button className="btn">VISIT WEBSITE ></button>
              </a>
            </Button>
          </SkillsColumn>
        ))}
      </SkillsContainer>
      <SkillsContainer style={{ width: '80%', paddingTop: '30px' }}>
        {myWorksection2.map(({ image, title, body, stack, url, git }) => (
          <SkillsColumn>
            {image}
            <h4>{title}</h4>
            <p>{body}</p>
            <p>Stack: {stack}</p>
            <Button>
              <a href={url} target="_blank">
                <button className="btn">VISIT WEBSITE ></button>
              </a>
              <a href={git} target="_blank">
                <GitHub />
              </a>
            </Button>
          </SkillsColumn>
        ))}
      </SkillsContainer>
    </Root>
  )
}

export default Projects
