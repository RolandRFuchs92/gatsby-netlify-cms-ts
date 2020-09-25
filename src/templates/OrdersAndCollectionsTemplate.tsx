import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Typography, Box } from "@material-ui/core"
import Image from "../components/images/Image"
import ProductImage from "../components/images/ProductImages"

export default function OrdersAndCollectionsTemplate() {
  const {
    markdownRemark: {
      frontmatter: { description, image, title },
      html,
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      markdownRemark(frontmatter: { slug: { eq: "orders&collection" } }) {
        frontmatter {
          description
          image
          title
        }
        html
      }
    }
  `)

  return (
    <Box height="100vh">
      <Grid container justify="space-between">
        <Grid item md={6}>
          <ProductImage image={image} className="aaa" />
        </Grid>
        <Grid item md={6}>
          Hello
        </Grid>
      </Grid>
    </Box>
  )
}
