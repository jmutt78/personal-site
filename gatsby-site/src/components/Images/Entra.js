import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Entra = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "entra.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      style={{
        height: '42px',
        width: 'auto',
        marginBottom: '2rem',
      }}
      objectFit="contain"
      alt="Entra Logo"
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default Entra
