import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import HeaderModal from "./HeaderModal";
import Logo from "../../../assets/logo.svg";
import Calendly from "../Calendly";

import { Root, NavFlex, NavLinks, BlogLink } from "./styles";

const Header = ({ siteTitle }) => (
  <header>
    <Root>
      <NavFlex>
        <Link to="/">
          <Logo />
        </Link>
        <NavLinks>
          <HeaderModal buttonLabel="LETS CHAT">
            <Calendly />
          </HeaderModal>

          <BlogLink>
            <Link to="/blog">
              <h3>BLOG</h3>
            </Link>
          </BlogLink>
        </NavLinks>
      </NavFlex>
    </Root>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
