import React, { useEffect, useState } from "react";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "JustinM.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      style={{ width: "250px", height: "250px" }}
      objectFit="cover"
      alt="Photo of Justin McIntosh a full stack developer"
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};

export default Profile;
