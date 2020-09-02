import React from "react"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import PostLink from "../components/PostLink"
import { graphql } from "gatsby"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>Blog Posts</h1>
    {edges.map(edge => (
      <PostLink key={edge.node.id} post={edge.node} />
    ))}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
