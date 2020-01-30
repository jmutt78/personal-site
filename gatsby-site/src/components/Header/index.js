import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Logo from "../Images/Logo.js"

const Nav = styled.div`
  background-color: transparent;
`
const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`
const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`

const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  svg {
    margin-right: 20px;
  }
`
const MenuLink = styled.a``

const Header = ({ siteTitle }) => (
  <header>
    <Nav>
      <NavHeader>
        <NavLeft>
          <MenuLink>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <Logo />
            </Link>
          </MenuLink>
        </NavLeft>
      </NavHeader>
    </Nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
