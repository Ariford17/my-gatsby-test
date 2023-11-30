import * as React from "react"
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I'm making this for testing the Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>Home</title>

export default IndexPage