import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I'm making this for testing the Gatsby.</p>
      <StaticImage
        alt="Castle with beautiful secenario"
        src="../images/anime-aesthetic-wallpapers.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage