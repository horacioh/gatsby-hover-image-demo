import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/Card"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Card file={data.file} />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
