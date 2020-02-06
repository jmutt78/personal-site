import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "JustinM.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const mediaMatch = window.matchMedia('(max-width: 500px)')
  const [matches, setMatches] = useState(mediaMatch.matches)

  useEffect(() => {
    const handler = e => setMatches(e.matches)
    mediaMatch.addListener(handler)
    return () => mediaMatch.removeListener(handler)
  })

  const responsive = {
    width: '180px',
    height: '180px',
  }
  const style = {
    width: '300px',
    height: '300px',
  }

  console.log(style)
  return (
    <Img
      style={matches ? responsive : style}
      objectFit="cover"
      alt="Photo of Justin McIntosh a full stack developer"
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default Profile
