import React from 'react'

import Hover from './Hover'

import mattid from '../../images/mattid.jpg'
import hike from '../../images/hike.jpg'
import docusite from '../../images/docusite.jpg'
import journal from '../../images/journal.jpg'
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
      image: mattid,
      title: 'Matti D',
      body: 'Promotional website for a retail boutique in Del Mar, CA.',
      url: 'https://mattidstyle.com',
      stack: 'Wordpress',
    },
    {
      image: docusite,
      title: 'DocuSite',
      body: 'Promotional website for a construction application.',
      url: 'https://docusites.com',
      stack: 'Wordpress',
    },
  ]

  const myWorksection2 = [
    {
      image: journal,
      title: 'Daily Journal',
      body: `Side project that lets users record a simple journal.`,
      url: 'https://my-journal-app123.herokuapp.com',
      stack: 'React, Redux, MongoDB',
      git: 'https://github.com/jmutt78/15-Minute-Journal',
    },
    {
      image: hike,
      title: 'Trail Finder API',
      body: `Side project that lets users find trails near them.`,
      url: 'https://jmutt78.github.io/Hiking-API-Hack/',
      stack: 'HTML, CSS, JavaScript, jQuery',
      git: 'https://github.com/jmutt78/15-Minute-Journal',
    },
  ]

  return (
    <Root>
      <SkillsContainer style={{ width: '80%', paddingTop: '30px' }}>
        {myWorksection1.map(({ image, title, body, stack, url, git }) => (
          <SkillsColumn>
            <Hover
              image={image}
              title={title}
              body={body}
              stack={stack}
              url={url}
              git={git}
            />
          </SkillsColumn>
        ))}
      </SkillsContainer>
      <SkillsContainer style={{ width: '80%', paddingTop: '30px' }}>
        {' '}
        {myWorksection2.map(({ image, title, body, stack, url, git }) => (
          <SkillsColumn>
            <Hover
              image={image}
              title={title}
              body={body}
              stack={stack}
              url={url}
              git={git}
            />
          </SkillsColumn>
        ))}
      </SkillsContainer>
    </Root>
  )
}

export default Projects

// <Container>
//   <Column>
//     <h3>Recent Projects</h3>
//   </Column>
// </Container>
