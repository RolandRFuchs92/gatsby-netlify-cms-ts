import React from "react"
import { Grid, Typography, Box } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"

import Image from "../components/images/FancyFood"
import PortraitCard from "../components/PortraitCard"

export default function LandingScreenTemplate() {
  const {
    allMarkdownRemark: { edges: products },
  } = useStaticQuery(graphql`
    query products {
      allMarkdownRemark(
        filter: { frontmatter: { slug: { in: ["humus", "pesto"] } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              image
              title
              caption
            }
            html
          }
        }
      }
    }
  `)

  return (
    <Box height="50vh">
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Box m={2}>
            <Typography variant="h3" align="center">
              Products
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Snacky-Snack
          </Typography>
        </Grid>
        <Box mt={5}>
          <Grid container justify="center" spacing={3}>
            {products.map(({ node: { frontmatter, html } }: any) => {
              return (
                <Grid item>
                  <PortraitCard
                    image={frontmatter.image}
                    heading={frontmatter.heading}
                    caption={frontmatter.caption}
                    title={frontmatter.title}
                    markdown={html}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Grid>
    </Box>
  )
}
