import React from 'react'
import { Link } from 'gatsby'

import {
  Title,
  Date,
  Description,
  StyledPhoto,
  StyledContainer,
  Border,
} from './styles.js'

export default ({ image, title, date, slug, uri, alt, excerpt }) => (
  <StyledContainer>
    <Link to={uri}>
      <StyledPhoto src={image} />
    </Link>
    <Link to={uri}>
      <Title>{title}</Title>
    </Link>
    <Date>{date}</Date>
    <Description dangerouslySetInnerHTML={{ __html: excerpt }} />
    <Border />
  </StyledContainer>
)
