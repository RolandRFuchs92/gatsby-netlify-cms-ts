import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostLink from "../components/PostLink"

import LandingScreenTemplate from "../templates/LandingScreenTemplate"

import { graphql } from "gatsby"

const IndexPage = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => (
  <Layout>
    <>
      <SEO title="Home" />
      <LandingScreenTemplate />
    </>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { eq: "landingScreen" } } }
    ) {
      nodes {
        frontmatter {
          title
          caption
        }
      }
    }
  }
`
