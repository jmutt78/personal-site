import React from "react";

import Hover from "./Hover";

import mattid from "../../images/mattid.jpg";
import hike from "../../images/hike.jpg";
import docusite from "../../images/docusite.jpg";
import journal from "../../images/journal.jpg";
import { Root, SkillsContainer, SkillsColumn } from "./styles";

const Projects = () => {
  const myWorksection1 = [
    {
      image: mattid,
      title: "Matti D",
      body: "Promotional website for a retail boutique in Del Mar, CA.",
      url: "https://mattidstyle.com",
      stack: "Wordpress"
    },
    {
      image: docusite,
      title: "DocuSite",
      body: "Promotional website for a construction application.",
      url: "https://docusites.com",
      stack: "Wordpress"
    }
  ];

  const myWorksection = [
    {
      image: journal,
      title: "Daily Journal",
      body: `Side project that lets users record a simple journal.`,
      url: "https://my-journal-app123.herokuapp.com",
      stack: "React, Redux, MongoDB",
      git: "https://github.com/jmutt78/15-Minute-Journal"
    },
    {
      image: hike,
      title: "Trail Finder API",
      body: `Side project that lets users find trails near them.`,
      url: "https://jmutt78.github.io/Hiking-API-Hack/",
      stack: "HTML, CSS, JavaScript, jQuery",
      git: "https://github.com/jmutt78/15-Minute-Journal"
    }
  ];

  return (
    <Root>
      <h2>Business Websites</h2>
      <SkillsContainer>
        {myWorksection1.map(({ image, title, body, stack, url, git }) => (
          <SkillsColumn key={url}>
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
      <h2 className="title">Web Applications</h2>
      <SkillsContainer>
        {myWorksection.map(({ image, title, body, stack, url, git }) => (
          <SkillsColumn key={url}>
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
  );
};

export default Projects;
