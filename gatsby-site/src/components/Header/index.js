import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Logo from '../Images/Logo.js'

import { Button, Root, NavFlex, NavLinks, BlogLink } from './styles'

const Header = ({ siteTitle }) => (
  <header>
    <Root>
      <NavFlex>
        <Link to="/">
          <Logo />
        </Link>
        <NavLinks>
          <Button>
            <button className="btn">LETS CHAT</button>
          </Button>
          <BlogLink>
            <Link to="/blog">
              <h3>BLOG</h3>
            </Link>
          </BlogLink>
        </NavLinks>
      </NavFlex>
    </Root>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
