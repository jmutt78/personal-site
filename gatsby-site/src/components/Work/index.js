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
  ContentLeft,
  ContentRight,
  SkillsContainer2,
  SkillsColumn,
} from './styles'

const Work = () => {
  const skillsData = [
    {
      image: <Idea />,
      title: 'An Entrepreneurial Mind',
      body:
        'I leverage my experience in business to all of my projects. I understand your challenges and work my tail off to help you solve them.',
    },
    {
      image: <System />,
      title: 'Systems Thinking',
      body: `I'm good at thinking abstractly and putting together systems with many moving parts.`,
    },
    {
      image: <Problem />,
      title: 'Communicating',
      body: `I can explain things clearly, in plain English, with no tech jargon.`,
    },
    {
      image: <Organize />,
      title: 'Organizing',
      body: `I can self-manage, work to deadlines, organize projects, and present well-structured and complete deliverables.`,
    },
  ]

  return (
    <Root>
      <Container>
        <Column>
          <h2>My Approach</h2>

          <h3>
            I help my clients make their ideas a reality. What to chat?{' '}
            <a href="mailto:justinmcintosh7897@gmail.com">Contact me</a>
          </h3>
        </Column>
      </Container>
      {
        // <SkillsContainer>
        //   <ContentLeft>
        //     {' '}
        //     <Idea
        //       style={{ height: '100px', width: 'auto', marginBottom: '20px' }}
        //     />
        //   </ContentLeft>
        //   <ContentRight>
        //     <h4>An Entrepreneurial Mind</h4>
        //     <p>
        //       My entire career has been focused on starting and operating
        //       businesses. I leverage that experience in all of my projects. I
        //       understand your challenges and work my tail off to help you solve
        //       them
        //     </p>
        //   </ContentRight>
        // </SkillsContainer>
      }
      <SkillsContainer2 style={{ width: '80%', paddingTop: '30px' }}>
        {skillsData.map(({ image, title, body }) => (
          <SkillsColumn>
            {image}
            <h4>{title}</h4>
            <p>{body}</p>
          </SkillsColumn>
        ))}
      </SkillsContainer2>
    </Root>
  )
}

export default Work
