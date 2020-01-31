import React from 'react'

import Layout from '../components/Layout'
import Intro from '../components/Intro'
import About from '../components/About'
import Skill from '../components/Skill'
import SEO from '../components/Seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
    <Skill />
  </Layout>
)

export default IndexPage
