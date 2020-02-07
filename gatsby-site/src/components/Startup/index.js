import React from 'react'

import ContactModal from './ContactModal'
import Calendly from '../Calendly'

import DocuSite from '../../../assets/docusite.svg'
import Entra from '../../../assets/entra.svg'

import {
  Root,
  StartupContainer,
  StartupColumn,
  Container,
  Column,
} from './styles'

const Startup = () => {
  const startups = [
    {
      image: <DocuSite />,
      title: 'DocuSite',
      body: `An easy to use mobile application for underground construction and civil engineers.`,
      url: 'https://docusites.com/',
      simple: 'www.docusites.com',
    },
    {
      image: <Entra />,
      title: 'Entra',
      body: `A powerful community of entrepreneurs that help each other learn and grow through a simple Question and Answer forum.`,
      url: 'https://entra.io/',
      simple: 'www.entra.io',
    },
  ]
  return (
    <Root>
      <StartupContainer style={{ width: '80%', paddingTop: '30px' }}>
        {startups.map(({ image, title, body, url, simple }) => (
          <StartupColumn key={title}>
            {image}

            <p>{body}</p>

            <a href={url} target="_blank" rel="noopener noreferrer">
              {simple}
            </a>
          </StartupColumn>
        ))}
      </StartupContainer>
      <Container>
        <Column>
          <h2>Interested in working together? </h2>
          <ContactModal buttonLabel=" LETS CHAT">
            <Calendly />
          </ContactModal>
        </Column>
      </Container>
    </Root>
  )
}

export default Startup
