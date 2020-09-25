import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostLink from "../components/PostLink"

import LandingScreenTemplate from "../templates/LandingScreenTemplate"
import SideCardTemplate from "../templates/SideCardTemplate"
import ProductsTemplate from "../templates/ProductsTemplate"
import OrdersAndCollectionsTemplate from "../templates/OrdersAndCollectionsTemplate"

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
      <SideCardTemplate />
      <ProductsTemplate />
      <OrdersAndCollectionsTemplate />
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
