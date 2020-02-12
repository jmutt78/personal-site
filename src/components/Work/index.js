import React from "react";

import ContactModal from "./ContactModal";
import Calendly from "../Calendly";

import Idea from "../../../assets/idea.svg";
import System from "../../../assets/innovation.svg";
import Problem from "../../../assets/workflow.svg";
import Organize from "../../../assets/man.svg";

import {
  Root,
  Container,
  Column,
  SkillsContainer2,
  SkillsColumn
} from "./styles";

const Work = () => {
  const skillsData = [
    {
      image: <Idea />,
      title: "An Entrepreneurial Mind",
      body:
        "I leverage my experience in business with all of my projects. I understand your challenges and work my tail off to help you solve them."
    },
    {
      image: <System />,
      title: "Systems Thinking",
      body: `I'm good at thinking abstractly and putting together systems with many moving parts.`
    },
    {
      image: <Organize />,
      title: "Communicating",
      body: `I can explain things clearly, in plain English, with no tech jargon.`
    },
    {
      image: <Problem />,
      title: "Organizing",
      body: `I can self-manage, work to deadlines, organize projects, and present well-structured and complete deliverables.`
    }
  ];

  return (
    <Root>
      <Container>
        <Column>
          <h2>My Approach</h2>
          <h3>
            I help my clients make their ideas a reality. What to chat?{"  "}
            <ContactModal buttonLabel=" Contact Me">
              <Calendly />
            </ContactModal>
          </h3>
        </Column>
      </Container>
      <SkillsContainer2 style={{ width: "80%", paddingTop: "30px" }}>
        {skillsData.map(({ image, title, body }) => (
          <SkillsColumn key={title}>
            {image}
            <h4>{title}</h4>
            <p>{body}</p>
          </SkillsColumn>
        ))}
      </SkillsContainer2>
    </Root>
  );
};

export default Work;
