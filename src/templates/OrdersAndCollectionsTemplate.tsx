import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Grid, Typography, Box, makeStyles } from "@material-ui/core"
import ProductImage from "../components/images/ProductImages"

const useStyles = makeStyles(theme => {
  return {
    ordersAndCollectionsMarkdownContainer: {
      textAlign: "center",
      justifyContent: "center",
      fontSize: 24,
      "& p, h4, h2, h3": {
        margin: 0,
      },
      "& ul li": {
        listStyle: "none",
      },
    },
  }
})

export default function OrdersAndCollectionsTemplate() {
  const classes = useStyles()
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
    <Box height="100vh" className="ordersAndCollectionsContainer">
      <Grid container justify="space-between">
        <Grid item md={6}>
          <Box p={5}>
            <ProductImage image={image} className="aaa" />
          </Box>
        </Grid>
        <Grid
          container
          item
          md={6}
          justify="center"
          alignContent="center"
          className="ordersAndCollectionsMarkdownContainer"
        >
          <Box p={5}>
            <div
              data-sal="slide-right"
              className={`${classes.ordersAndCollectionsMarkdownContainer} ${classes.animate}`}
            >
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </Box>
        </Grid>
        <style
          dangerouslySetInnerHTML={{
            __html: `.ordersAndCollectionsMarkdownContainer {background-color: green;}`,
          }}
        />
      </Grid>
    </Box>
  )
}
