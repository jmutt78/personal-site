import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Intro from "../components/Intro"
import About from "../components/About"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <Intro />
      <About />
    </div>
  </Layout>
)

export default IndexPage
