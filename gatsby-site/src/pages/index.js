import React from 'react'

import Layout from '../components/Layout'
import Intro from '../components/Intro'
import About from '../components/About'
import SEO from '../components/Seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    {
      //
      //   <About />
    }
  </Layout>
)

export default IndexPage
